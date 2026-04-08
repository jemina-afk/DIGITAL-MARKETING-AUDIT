'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/onboarding`,
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // If the user session exists immediately, email confirmation is disabled
    // → go straight to onboarding
    if (data.session) {
      router.push('/onboarding');
      router.refresh();
      return;
    }

    // If no session, email confirmation is required → show confirmation message
    setEmailSent(true);
    setLoading(false);
  }

  // Email confirmation sent screen
  if (emailSent) {
    return (
      <Card variant="elevated" className="animate-fade-in text-center">
        <div className="py-4">
          
          <h2 className="text-xl text-charcoal mb-2">Check your email</h2>
          <p className="text-sm text-stone-light mb-2">
            We sent a confirmation link to <strong className="text-charcoal">{email}</strong>.
          </p>
          <p className="text-sm text-stone-light mb-6">
            Click the link in the email, then you&apos;ll be taken straight to set up your Selah experience.
          </p>
          <div className="space-y-3">
            <Button variant="ghost" onClick={() => setEmailSent(false)} fullWidth>
              Use a different email
            </Button>
            <p className="text-xs text-stone-light">
              Didn&apos;t get it? Check your spam folder or{' '}
              <button
                onClick={async () => {
                  await supabase.auth.resend({ type: 'signup', email });
                }}
                className="text-sage hover:text-sage-dark underline"
              >
                resend the email
              </button>
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="elevated" className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl text-charcoal text-center mb-2">Create your space</h2>
        <p className="text-sm text-stone-light text-center mb-4">
          Begin your daily walk with God
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

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          required
          minLength={8}
        />

        <Input
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />

        <Button type="submit" fullWidth loading={loading}>
          Create account
        </Button>

        <p className="text-sm text-stone-light text-center pt-2">
          Already have an account?{' '}
          <Link href="/login" className="text-sage hover:text-sage-dark transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </Card>
  );
}
