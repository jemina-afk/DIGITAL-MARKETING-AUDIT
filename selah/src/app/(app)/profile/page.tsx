'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Disclaimer from '@/components/ui/Disclaimer';
import type { Profile } from '@/types/database';

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Profile" />
        <div className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
          <div className="h-5 bg-cream-dark rounded w-1/3 mb-4" />
          <div className="h-3 bg-cream-dark rounded w-1/2" />
        </div>
      </div>
    );
  }

  const seasonLabels: Record<string, string> = {
    student: 'Student life',
    early_career: 'Early career',
    new_relationship: 'New relationship',
    engaged: 'Engaged',
    newly_married: 'Newly married',
    new_mom: 'New mom',
    single_season: 'Single season',
    career_transition: 'Career transition',
    healing: 'Healing season',
    searching: 'Searching & growing',
  };

  return (
    <div className="animate-fade-in">
      <AppHeader title="Profile" />

      <div className="space-y-4">
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center">
              <span className="text-2xl text-sage">
                {profile?.first_name?.[0]?.toUpperCase() || '✨'}
              </span>
            </div>
            <div>
              <p className="text-lg text-charcoal">{profile?.first_name || 'Friend'}</p>
              <p className="text-xs text-stone-light">
                {profile?.season_of_life ? seasonLabels[profile.season_of_life] : 'Your journey'}
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            {profile?.age_range && (
              <ProfileRow label="Age range" value={profile.age_range} />
            )}
            {profile?.top_struggle && (
              <ProfileRow label="Focus area" value={profile.top_struggle.replace('_', ' ')} />
            )}
            {profile?.devotional_length && (
              <ProfileRow label="Devotional length" value={profile.devotional_length} />
            )}
            {profile?.denomination && (
              <ProfileRow label="Tradition" value={profile.denomination} />
            )}
          </div>
        </Card>

        {/* Subscription */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal">
                {profile?.subscription_tier === 'premium' ? 'Premium' : 'Free plan'}
              </p>
              <p className="text-xs text-stone-light">
                {profile?.subscription_tier === 'premium'
                  ? 'Full access to all features'
                  : 'Limited access'}
              </p>
            </div>
            {profile?.subscription_tier !== 'premium' && (
              <Link href="/subscribe">
                <Button variant="primary" size="sm">Upgrade</Button>
              </Link>
            )}
          </div>
        </Card>

        <Button variant="outline" onClick={handleSignOut} fullWidth>
          Sign out
        </Button>

        <Disclaimer className="text-center mt-6" />
      </div>
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1.5 border-b border-cream-dark last:border-0">
      <span className="text-stone-light">{label}</span>
      <span className="text-charcoal capitalize">{value}</span>
    </div>
  );
}
