'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';

interface PremiumGateProps {
  children: React.ReactNode;
  feature: string;
  description: string;
}

const COMPARISON = [
  { label: 'Daily check-in', free: true, premium: true },
  { label: 'Personalised daily devotional', free: true, premium: true },
  { label: 'Habit tracker with streaks', free: true, premium: true },
  { label: 'Pathways', free: '3 free', premium: 'All 7' },
  { label: 'Journal entries', free: '10 total', premium: 'Unlimited' },
  { label: 'Ask Selah (AI guidance)', free: false, premium: true },
  { label: 'Scripture memory system', free: false, premium: true },
  { label: 'Verse packs (curated collections)', free: false, premium: true },
  { label: 'Worship playlists', free: false, premium: true },
  { label: 'Selah Studies (deep Bible dives)', free: false, premium: true },
  { label: 'Evening bedtime prayers', free: false, premium: true },
  { label: 'Mood insights & graphs', free: false, premium: true },
  { label: 'Saved prayers collection', free: false, premium: true },
  { label: 'Shareable verse cards', free: false, premium: true },
];

function Check({ yes }: { yes: boolean }) {
  if (yes) {
    return (
      <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-stone-light/50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PremiumGate({ children, feature, description }: PremiumGateProps) {
  const [tier, setTier] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setTier('free'); setLoading(false); return; }

      const { data } = await supabase
        .from('profiles')
        .select('subscription_tier')
        .eq('id', user.id)
        .single();

      setTier(data?.subscription_tier || 'free');
      setLoading(false);
    }
    check();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="w-8 h-8 rounded-full border-2 border-sage border-t-transparent animate-spin" />
      </div>
    );
  }

  if (tier === 'premium') {
    return <>{children}</>;
  }

  return (
    <div className="animate-fade-in pb-8">
      {/* Header */}
      <div className="text-center pt-8 pb-6 px-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sage/20 to-lavender/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
        </div>
        <p className="text-xs tracking-widest text-sage uppercase mb-2">Premium feature</p>
        <h2 className="text-xl text-charcoal mb-2">{feature}</h2>
        <p className="text-sm text-stone leading-relaxed max-w-sm mx-auto">{description}</p>
      </div>

      {/* Comparison table */}
      <div className="rounded-2xl bg-white/80 border border-lavender-light/50 shadow-[0_2px_16px_rgba(184,168,216,0.08)] overflow-hidden mb-5">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_72px_72px] items-center gap-2 px-4 py-3 bg-cream-dark/40 border-b border-lavender-light/30">
          <p className="text-[10px] font-medium text-stone tracking-widest uppercase">Compare</p>
          <p className="text-[10px] font-medium text-stone-light text-center tracking-widest uppercase">Free</p>
          <div className="text-center">
            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-sage to-sage-dark text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
              Premium
            </div>
          </div>
        </div>

        {/* Rows */}
        {COMPARISON.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_72px_72px] items-center gap-2 px-4 py-2.5 ${
              i !== COMPARISON.length - 1 ? 'border-b border-lavender-light/20' : ''
            }`}
          >
            <p className="text-[13px] text-charcoal">{row.label}</p>
            <div className="flex justify-center">
              {typeof row.free === 'boolean' ? (
                <Check yes={row.free} />
              ) : (
                <span className="text-[11px] text-stone-light">{row.free}</span>
              )}
            </div>
            <div className="flex justify-center">
              {typeof row.premium === 'boolean' ? (
                <Check yes={row.premium} />
              ) : (
                <span className="text-[11px] text-sage-dark font-medium">{row.premium}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="text-center mb-4 px-4">
        <p className="text-sm text-charcoal mb-1">
          <span className="font-medium">$9.99/month</span> or{' '}
          <span className="font-medium">$79.99/year</span>
          <span className="text-stone-light"> (save 33%)</span>
        </p>
        <p className="text-xs text-stone-light">Less than a coffee a week.</p>
      </div>

      {/* CTA */}
      <div className="px-4 space-y-2">
        <a href="/subscribe" className="block">
          <Button fullWidth size="lg">Start your 7-day free trial</Button>
        </a>
        <p className="text-xs text-stone-light text-center">
          Try everything free for 7 days. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
