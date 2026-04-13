'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface PremiumGateProps {
  children: React.ReactNode;
  feature: string; // e.g. "Ask Selah", "Scripture Memory"
  description: string;
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

  // Premium upsell screen
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 animate-fade-in">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-sage/20 to-lavender/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
        </div>

        <h2 className="text-xl text-charcoal mb-2">{feature}</h2>
        <p className="text-sm text-stone leading-relaxed mb-6">{description}</p>

        <Card variant="soft" padding="sm" className="mb-6 text-left">
          <p className="text-xs font-medium text-charcoal mb-2">Premium includes</p>
          <ul className="space-y-1.5 text-xs text-stone-light">
            <li>- Ask Selah - AI-powered scripture guidance</li>
            <li>- Scripture memory system</li>
            <li>- Curated verse packs</li>
            <li>- Worship playlists</li>
            <li>- Selah Studies - deep Bible dives</li>
            <li>- Evening prayers and mood insights</li>
            <li>- All 7 devotional pathways</li>
            <li>- Unlimited journaling</li>
          </ul>
        </Card>

        <a href="/subscribe">
          <Button fullWidth size="lg">Start your 7-day free trial</Button>
        </a>
        <p className="text-xs text-stone-light mt-3">Try everything free for 7 days. Cancel anytime.</p>
      </div>
    </div>
  );
}
