-- E2EE: store per-user salt for journal encryption
-- The passphrase itself is NEVER stored. Lost passphrase = lost data.

alter table public.profiles
  add column if not exists journal_encryption_salt text,
  add column if not exists journal_encryption_test text;

-- journal_encryption_test holds a small ciphertext blob encrypted with
-- the user's passphrase so we can verify a re-entered passphrase is correct
-- without ever sending the passphrase off the device.
