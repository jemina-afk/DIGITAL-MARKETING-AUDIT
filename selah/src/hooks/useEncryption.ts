'use client';

import { useState, useCallback, useEffect } from 'react';
import {
  encrypt,
  decrypt,
  generateSalt,
  isEncrypted,
  cachePassphrase,
  getCachedPassphrase,
  clearCachedPassphrase,
  verifyPassphrase,
} from '@/lib/encryption';
import { createClient } from '@/lib/supabase/client';

type EncryptionStatus = 'loading' | 'no_account' | 'needs_setup' | 'locked' | 'unlocked';

const VERIFY_PLAINTEXT = 'selah-encryption-check';

export function useEncryption() {
  const [status, setStatus] = useState<EncryptionStatus>('loading');
  const [salt, setSalt] = useState<string | null>(null);
  const [passphrase, setPassphrase] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function init() {
      const cached = getCachedPassphrase();

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setStatus('no_account'); return; }

      const { data: profile } = await supabase
        .from('profiles')
        .select('journal_encryption_salt, journal_encryption_test')
        .eq('id', user.id)
        .single();

      if (!profile?.journal_encryption_salt) {
        setStatus('needs_setup');
        return;
      }

      setSalt(profile.journal_encryption_salt);

      if (cached && cached.salt === profile.journal_encryption_salt) {
        const valid = await verifyPassphrase(
          profile.journal_encryption_test,
          cached.passphrase,
          cached.salt
        );
        if (valid) {
          setPassphrase(cached.passphrase);
          setStatus('unlocked');
          return;
        }
      }

      setStatus('locked');
    }
    init();
  }, [supabase]);

  const setupEncryption = useCallback(async (newPassphrase: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const newSalt = generateSalt();
    const testBlob = await encrypt(VERIFY_PLAINTEXT, newPassphrase, newSalt);

    const { error } = await supabase
      .from('profiles')
      .update({
        journal_encryption_salt: newSalt,
        journal_encryption_test: testBlob,
      })
      .eq('id', user.id);

    if (error) return false;

    setSalt(newSalt);
    setPassphrase(newPassphrase);
    cachePassphrase(newPassphrase, newSalt);
    setStatus('unlocked');
    return true;
  }, [supabase]);

  const unlock = useCallback(async (enteredPassphrase: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !salt) return false;

    const { data: profile } = await supabase
      .from('profiles')
      .select('journal_encryption_test')
      .eq('id', user.id)
      .single();

    if (!profile?.journal_encryption_test) return false;

    const valid = await verifyPassphrase(
      profile.journal_encryption_test,
      enteredPassphrase,
      salt
    );

    if (!valid) return false;

    setPassphrase(enteredPassphrase);
    cachePassphrase(enteredPassphrase, salt);
    setStatus('unlocked');
    return true;
  }, [supabase, salt]);

  const lock = useCallback(() => {
    clearCachedPassphrase();
    setPassphrase(null);
    setStatus(salt ? 'locked' : 'needs_setup');
  }, [salt]);

  const encryptText = useCallback(async (plaintext: string) => {
    if (!passphrase || !salt) throw new Error('Encryption not unlocked');
    return encrypt(plaintext, passphrase, salt);
  }, [passphrase, salt]);

  const decryptText = useCallback(async (ciphertext: string) => {
    if (!passphrase || !salt) throw new Error('Encryption not unlocked');
    if (!isEncrypted(ciphertext)) return ciphertext;
    return decrypt(ciphertext, passphrase, salt);
  }, [passphrase, salt]);

  return {
    status,
    setupEncryption,
    unlock,
    lock,
    encryptText,
    decryptText,
    isEncrypted: isEncrypted,
  };
}
