'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

export default function SubscribePage() {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    trackEvent('paywall_viewed');
  }, []);

  async function handleSubscribe() {
    setLoading(true);

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
      {/* Hero header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/10 via-cream to-lavender/10 p-6 mb-6 mt-6 border border-sage/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-lavender/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative text-center">
          <p className="text-xs tracking-widest text-sage uppercase mb-3">Selah Premium</p>
          <h1 className="text-2xl text-charcoal leading-tight mb-2">Go deeper with God</h1>
          <p className="text-sm text-stone leading-relaxed">
            Your faith deserves more than a surface-level app.
            Premium gives you the space to truly grow.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Emotional benefits */}
        <div className="space-y-3">
          {[
            {
              title: 'Journal without limits',
              desc: 'Process every prayer, every breakthrough, every hard day. No cap on entries, no cap on growth.',
            },
            {
              title: 'All 7 devotional pathways',
              desc: 'Healing after heartbreak. Confidence in who you are. Discipline without shame. Career and calling. Each one, 7 days deep.',
            },
            {
              title: 'Reflections that know your story',
              desc: 'Your season, your struggle, your own words - woven into devotionals that feel like they were written just for you.',
            },
            {
              title: 'Your prayer collection',
              desc: 'Every prayer written for you, saved in one place. Return to them when you need reminding of how God has spoken.',
            },
            {
              title: 'Mood insights over time',
              desc: 'See how you\'ve been feeling across 30 days. Watch your patterns. Notice your growth. Celebrate your consistency.',
            },
            {
              title: 'Evening wind-down prayers',
              desc: 'Seven themed bedtime prayers for when your mind won\'t quiet. End the day held, not haunted.',
            },
            {
              title: 'Shareable verse cards',
              desc: 'Beautiful scripture cards in 5 styles. Share your daily verse and let your faith encourage someone else.',
            },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">{b.title}</p>
                <p className="text-xs text-stone-light leading-relaxed mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <Card variant="soft" className="text-center">
          <p className="text-sm text-charcoal italic leading-relaxed">
            &ldquo;This app feels like it was made for me. The daily reflections meet me exactly where I am.&rdquo;
          </p>
          <p className="text-xs text-stone-light mt-2">- Early Selah member</p>
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
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-charcoal">Yearly</p>
                  <span className="bg-sage/10 text-sage-dark text-[10px] font-medium px-2 py-0.5 rounded-full">Best value</span>
                </div>
                <p className="text-xs text-stone-light mt-0.5">$79.99/year - that's $6.67/month</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${plan === 'yearly' ? 'border-sage bg-sage' : 'border-stone-light'}`}>
                {plan === 'yearly' && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
              </div>
            </div>
          </button>

          <button
            onClick={() => setPlan('monthly')}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all relative
              ${plan === 'monthly'
                ? 'border-sage bg-sage/5'
                : 'border-cream-dark bg-white hover:border-stone-light'
              }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-charcoal">Monthly</p>
                  <span className="bg-cream-dark text-stone text-[10px] font-medium px-2 py-0.5 rounded-full">Most flexible</span>
                </div>
                <p className="text-xs text-stone-light mt-0.5">$9.99/month</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${plan === 'monthly' ? 'border-sage bg-sage' : 'border-stone-light'}`}>
                {plan === 'monthly' && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
              </div>
            </div>
          </button>
        </div>

        {/* Price anchoring */}
        <p className="text-xs text-stone text-center">
          Less than a coffee a week. Your soul is worth the investment.
        </p>

        <Button onClick={handleSubscribe} fullWidth size="lg" loading={loading}>
          Start your 7-day free trial
        </Button>

        <p className="text-xs text-stone-light text-center leading-relaxed">
          Try everything free for 7 days. Cancel anytime - no questions asked.
          {plan === 'yearly'
            ? ' After your trial, $79.99/year.'
            : ' After your trial, $9.99/month.'}
        </p>

        <Button variant="ghost" onClick={() => router.back()} fullWidth>
          Maybe later
        </Button>
      </div>
    </div>
  );
}
