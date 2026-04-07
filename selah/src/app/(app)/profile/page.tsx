'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import Disclaimer from '@/components/ui/Disclaimer';
import {
  SEASON_OPTIONS,
  STRUGGLE_OPTIONS,
} from '@/lib/constants';
import type { Profile, SeasonOfLife, Struggle, DevotionalLength, PreferredFormat } from '@/types/database';

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Editable fields
  const [season, setSeason] = useState<SeasonOfLife | ''>('');
  const [struggle, setStruggle] = useState<Struggle | ''>('');
  const [devotionalLength, setDevotionalLength] = useState<DevotionalLength>('medium');
  const [preferredFormat, setPreferredFormat] = useState<PreferredFormat>('read');

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
      if (data) {
        setSeason(data.season_of_life || '');
        setStruggle(data.top_struggle || '');
        setDevotionalLength(data.devotional_length || 'medium');
        setPreferredFormat(data.preferred_format || 'read');
      }
      setLoading(false);
    }
    load();
  }, [supabase]);

  async function handleSave() {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('profiles').update({
      season_of_life: season || null,
      top_struggle: struggle || null,
      devotional_length: devotionalLength,
      preferred_format: preferredFormat,
    }).eq('id', user.id);

    // Update local state
    if (profile) {
      setProfile({
        ...profile,
        season_of_life: season || null,
        top_struggle: struggle || null,
        devotional_length: devotionalLength,
        preferred_format: preferredFormat,
      });
    }

    setSaving(false);
    setEditing(false);
  }

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

  const lengthLabels: Record<string, string> = {
    short: '2-3 min (quick)',
    medium: '5-7 min (gentle pause)',
    long: '10-15 min (deeper dive)',
  };

  const formatLabels: Record<string, string> = {
    read: 'Read',
    listen: 'Listen',
    both: 'Both',
  };

  return (
    <div className="animate-fade-in">
      <AppHeader title="Profile" />

      <div className="space-y-4">
        {/* Profile header */}
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

          {!editing ? (
            <>
              <div className="space-y-3 text-sm">
                {profile?.age_range && (
                  <ProfileRow label="Age range" value={profile.age_range} />
                )}
                {profile?.season_of_life && (
                  <ProfileRow label="Season" value={seasonLabels[profile.season_of_life] || profile.season_of_life} />
                )}
                {profile?.top_struggle && (
                  <ProfileRow label="Focus area" value={
                    STRUGGLE_OPTIONS.find(s => s.value === profile.top_struggle)?.label || profile.top_struggle
                  } />
                )}
                {profile?.devotional_length && (
                  <ProfileRow label="Devotional length" value={lengthLabels[profile.devotional_length] || profile.devotional_length} />
                )}
                {profile?.preferred_format && (
                  <ProfileRow label="Format" value={formatLabels[profile.preferred_format] || profile.preferred_format} />
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={() => setEditing(true)} className="mt-4">
                Edit preferences
              </Button>
            </>
          ) : (
            <div className="space-y-5 mt-4">
              {/* Season of life */}
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-2">Current season of life</p>
                <div className="flex flex-wrap gap-2">
                  {SEASON_OPTIONS.map((opt) => (
                    <Tag
                      key={opt.value}
                      label={opt.label}
                      selected={season === opt.value}
                      onClick={() => setSeason(opt.value as SeasonOfLife)}
                      size="sm"
                    />
                  ))}
                </div>
              </div>

              {/* Top struggle */}
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-2">What feels most pressing right now?</p>
                <div className="flex flex-wrap gap-2">
                  {STRUGGLE_OPTIONS.map((opt) => (
                    <Tag
                      key={opt.value}
                      label={opt.label}
                      selected={struggle === opt.value}
                      onClick={() => setStruggle(opt.value as Struggle)}
                      size="sm"
                    />
                  ))}
                </div>
              </div>

              {/* Devotional length */}
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-2">Devotional length</p>
                <div className="space-y-2">
                  {([
                    { value: 'short', label: '2-3 minutes', desc: 'Quick and focused' },
                    { value: 'medium', label: '5-7 minutes', desc: 'A gentle pause' },
                    { value: 'long', label: '10-15 minutes', desc: 'A deeper dive' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setDevotionalLength(opt.value)}
                      className={`w-full text-left p-3 rounded-xl border-2 transition-all
                        ${devotionalLength === opt.value
                          ? 'border-sage bg-sage/5'
                          : 'border-cream-dark bg-white hover:border-stone-light'
                        }`}
                    >
                      <p className="text-sm font-medium text-charcoal">{opt.label}</p>
                      <p className="text-xs text-stone-light">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Format preference */}
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-2">Format preference</p>
                <div className="flex gap-2">
                  {([
                    { value: 'read', label: 'Read' },
                    { value: 'listen', label: 'Listen' },
                    { value: 'both', label: 'Both' },
                  ] as const).map((opt) => (
                    <Tag
                      key={opt.value}
                      label={opt.label}
                      selected={preferredFormat === opt.value}
                      onClick={() => setPreferredFormat(opt.value)}
                      size="sm"
                    />
                  ))}
                </div>
                {(preferredFormat === 'listen' || preferredFormat === 'both') && (
                  <p className="text-xs text-warm mt-2">
                    Audio is coming soon. You&apos;ll get text for now, with audio when it launches.
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="ghost" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} fullWidth loading={saving}>
                  Save changes
                </Button>
              </div>
            </div>
          )}
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
      <span className="text-charcoal">{value}</span>
    </div>
  );
}
