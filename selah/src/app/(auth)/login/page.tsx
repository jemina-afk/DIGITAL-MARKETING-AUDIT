'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { trackEvent } from '@/lib/analytics';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    await trackEvent('app_opened');

    // Check if onboarding is complete
    const { data: profile } = await supabase
      .from('profiles')
      .select('onboarding_completed')
      .single();

    if (profile && !profile.onboarding_completed) {
      router.push('/onboarding');
    } else {
      router.push('/home');
    }
    router.refresh();
  }

  return (
    <Card variant="elevated" className="animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl text-charcoal text-center mb-2">Welcome back</h2>

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
          placeholder="Your password"
          required
        />

        <Button type="submit" fullWidth loading={loading}>
          Sign in
        </Button>

        <div className="text-center space-y-2 pt-2">
          <Link href="/reset-password" className="text-sm text-sage hover:text-sage-dark transition-colors">
            Forgot your password?
          </Link>
          <p className="text-sm text-stone-light">
            New here?{' '}
            <Link href="/signup" className="text-sage hover:text-sage-dark transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </Card>
  );
}
