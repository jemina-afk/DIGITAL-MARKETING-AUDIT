'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

export default function SubscribePage() {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubscribe() {
    setLoading(true);
    await trackEvent('paywall_viewed');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan, userId: user.id, email: user.email }),
    });

    const { url } = await res.json();

    if (url) {
      await trackEvent('trial_started', { plan });
      window.location.href = url;
    } else {
      setLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <AppHeader
        title="Unlock your full journey"
        subtitle="Go deeper with premium features"
      />

      <div className="space-y-6">
        {/* Benefits */}
        <Card variant="soft">
          <h3 className="text-sm font-medium text-charcoal mb-4">Premium includes</h3>
          <ul className="space-y-3">
            {[
              'Unlimited journaling with prompts',
              'All 7+ devotional pathways',
              'Deeper personalised daily reflections',
              'Saved prayers collection',
              'Priority access to new content',
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-charcoal-light">
                <svg className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </Card>

        {/* Plan selector */}
        <div className="space-y-3">
          <button
            onClick={() => setPlan('yearly')}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all relative
              ${plan === 'yearly'
                ? 'border-sage bg-sage/5'
                : 'border-cream-dark bg-white hover:border-stone-light'
              }`}
          >
            <span className="absolute -top-2.5 right-4 bg-warm text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full">
              Save 33%
            </span>
            <p className="text-sm font-medium text-charcoal">Yearly</p>
            <p className="text-xs text-stone-light mt-0.5">$79.99/year ($6.67/month)</p>
          </button>

          <button
            onClick={() => setPlan('monthly')}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all
              ${plan === 'monthly'
                ? 'border-sage bg-sage/5'
                : 'border-cream-dark bg-white hover:border-stone-light'
              }`}
          >
            <p className="text-sm font-medium text-charcoal">Monthly</p>
            <p className="text-xs text-stone-light mt-0.5">$9.99/month</p>
          </button>
        </div>

        <Button onClick={handleSubscribe} fullWidth size="lg" loading={loading}>
          Start 7-day free trial
        </Button>

        <p className="text-xs text-stone-light text-center leading-relaxed">
          Cancel anytime. You won&apos;t be charged during your free trial.
          After the trial, your selected plan will begin.
        </p>

        <Button variant="ghost" onClick={() => router.back()} fullWidth>
          Maybe later
        </Button>
      </div>
    </div>
  );
}
