// End-to-end encryption for journal entries using Web Crypto API
// AES-GCM-256 with PBKDF2 key derivation from user passphrase
//
// SECURITY MODEL:
// - Encryption happens entirely in the browser
// - Server only ever stores ciphertext
// - Key is derived from user's passphrase + salt
// - Passphrase is never sent to the server
// - Lost passphrase = lost data (no recovery)

const PBKDF2_ITERATIONS = 100_000;
const SALT_LENGTH = 16;
const IV_LENGTH = 12;

function toBase64(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(base64: string): Uint8Array {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
}

export function generateSalt(): string {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  return toBase64(salt);
}

async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

export async function encrypt(plaintext: string, passphrase: string, saltB64: string): Promise<string> {
  const salt = fromBase64(saltB64);
  const key = await deriveKey(passphrase, salt);
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const encoder = new TextEncoder();
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(plaintext)
  );
  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return 'enc:v1:' + toBase64(combined);
}

export async function decrypt(ciphertextB64: string, passphrase: string, saltB64: string): Promise<string> {
  if (!ciphertextB64.startsWith('enc:v1:')) {
    // Not encrypted - return as-is (backwards compat for old plaintext entries)
    return ciphertextB64;
  }
  const payload = ciphertextB64.slice('enc:v1:'.length);
  const salt = fromBase64(saltB64);
  const key = await deriveKey(passphrase, salt);
  const combined = fromBase64(payload);
  const iv = combined.slice(0, IV_LENGTH);
  const ciphertext = combined.slice(IV_LENGTH);
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );
  return new TextDecoder().decode(decrypted);
}

export function isEncrypted(text: string): boolean {
  return typeof text === 'string' && text.startsWith('enc:v1:');
}

// ============================================================
// SESSION MANAGEMENT
// The derived passphrase is stored only in sessionStorage,
// cleared when the tab closes.
// ============================================================

const SESSION_PASSPHRASE_KEY = 'selah_journal_passphrase';
const SESSION_SALT_KEY = 'selah_journal_salt';

export function cachePassphrase(passphrase: string, salt: string) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(SESSION_PASSPHRASE_KEY, passphrase);
  sessionStorage.setItem(SESSION_SALT_KEY, salt);
}

export function getCachedPassphrase(): { passphrase: string; salt: string } | null {
  if (typeof window === 'undefined') return null;
  const passphrase = sessionStorage.getItem(SESSION_PASSPHRASE_KEY);
  const salt = sessionStorage.getItem(SESSION_SALT_KEY);
  if (!passphrase || !salt) return null;
  return { passphrase, salt };
}

export function clearCachedPassphrase() {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_PASSPHRASE_KEY);
  sessionStorage.removeItem(SESSION_SALT_KEY);
}

// Verify a passphrase is correct by trying to decrypt a test blob
export async function verifyPassphrase(
  testCiphertext: string,
  passphrase: string,
  salt: string
): Promise<boolean> {
  try {
    await decrypt(testCiphertext, passphrase, salt);
    return true;
  } catch {
    return false;
  }
}
