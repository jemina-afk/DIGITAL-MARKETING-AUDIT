'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <Card variant="elevated" className="animate-fade-in text-center">
        <div className="py-4">
          <p className="text-3xl mb-4">📬</p>
          <h2 className="text-xl text-charcoal mb-2">Check your email</h2>
          <p className="text-sm text-stone-light mb-6">
            We sent a password reset link to <strong>{email}</strong>.
          </p>
          <Link href="/login" className="text-sm text-sage hover:text-sage-dark transition-colors">
            Back to sign in
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="elevated" className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl text-charcoal text-center mb-2">Reset your password</h2>
        <p className="text-sm text-stone-light text-center mb-4">
          Enter your email and we&apos;ll send you a reset link.
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <Button type="submit" fullWidth loading={loading}>
          Send reset link
        </Button>

        <p className="text-sm text-stone-light text-center pt-2">
          <Link href="/login" className="text-sage hover:text-sage-dark transition-colors">
            Back to sign in
          </Link>
        </p>
      </form>
    </Card>
  );
}
