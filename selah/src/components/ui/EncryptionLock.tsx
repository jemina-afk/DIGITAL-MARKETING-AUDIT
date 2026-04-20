'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface EncryptionLockProps {
  mode: 'setup' | 'unlock';
  onSetup?: (passphrase: string) => Promise<boolean>;
  onUnlock?: (passphrase: string) => Promise<boolean>;
}

export default function EncryptionLock({ mode, onSetup, onUnlock }: EncryptionLockProps) {
  const [passphrase, setPassphrase] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (mode === 'setup') {
      if (passphrase.length < 8) {
        setError('Passphrase must be at least 8 characters.');
        return;
      }
      if (passphrase !== confirm) {
        setError('Passphrases do not match.');
        return;
      }
      setLoading(true);
      const ok = await onSetup?.(passphrase);
      setLoading(false);
      if (!ok) setError('Something went wrong. Please try again.');
    } else {
      if (!passphrase) return;
      setLoading(true);
      const ok = await onUnlock?.(passphrase);
      setLoading(false);
      if (!ok) setError('Incorrect passphrase. Please try again.');
    }
  }

  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-sage/20 to-lavender/20 flex items-center justify-center">
        <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>

      {mode === 'setup' ? (
        <>
          <h2 className="text-lg text-charcoal text-center mb-1">Protect your journal</h2>
          <p className="text-sm text-stone text-center leading-relaxed max-w-xs mb-6">
            Create a passphrase to encrypt your entries. Only you will be able to read them - not even us.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-lg text-charcoal text-center mb-1">Unlock your journal</h2>
          <p className="text-sm text-stone text-center leading-relaxed max-w-xs mb-6">
            Enter your passphrase to read and write entries.
          </p>
        </>
      )}

      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-charcoal-light mb-1.5">
              {mode === 'setup' ? 'Choose a passphrase' : 'Your passphrase'}
            </label>
            <input
              type="password"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              placeholder={mode === 'setup' ? 'At least 8 characters' : 'Enter passphrase'}
              className="w-full text-sm text-charcoal bg-cream border-2 border-cream-dark rounded-xl px-4 py-3 focus:outline-none focus:border-sage placeholder:text-stone-light/60"
              autoFocus
            />
          </div>

          {mode === 'setup' && (
            <div>
              <label className="block text-xs font-medium text-charcoal-light mb-1.5">
                Confirm passphrase
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Type it again"
                className="w-full text-sm text-charcoal bg-cream border-2 border-cream-dark rounded-xl px-4 py-3 focus:outline-none focus:border-sage placeholder:text-stone-light/60"
              />
            </div>
          )}

          {error && (
            <p className="text-xs text-red-500 text-center">{error}</p>
          )}

          <Button type="submit" fullWidth loading={loading} disabled={!passphrase}>
            {mode === 'setup' ? 'Enable encryption' : 'Unlock'}
          </Button>
        </form>
      </Card>

      {mode === 'setup' && (
        <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 max-w-sm">
          <p className="text-xs text-amber-800 leading-relaxed text-center">
            <strong>Important:</strong> If you forget your passphrase, your journal entries cannot be recovered. There is no reset option. Write it down somewhere safe.
          </p>
        </div>
      )}
    </div>
  );
}
