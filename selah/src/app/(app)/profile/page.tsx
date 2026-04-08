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

        {/* Quick links */}
        <div className="grid grid-cols-3 gap-3">
          <a href="/prayers" className="rounded-xl bg-blush/5 border border-blush/15 p-4 text-center hover:border-blush/30 transition-colors">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-blush/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-blush-dark" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11c0-1.5.5-3 2-4s3-1 4-1 2.5 0 4 1 2 2.5 2 4" /><path d="M7 11v7a2 2 0 004 0v-2a2 2 0 014 0v2a2 2 0 004 0v-7" />
              </svg>
            </div>
            <p className="text-xs font-medium text-charcoal">Prayers</p>
          </a>
          <a href="/insights" className="rounded-xl bg-sage/5 border border-sage/15 p-4 text-center hover:border-sage/30 transition-colors">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-sage/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" />
              </svg>
            </div>
            <p className="text-xs font-medium text-charcoal">Insights</p>
          </a>
          <a href="/evening" className="rounded-xl bg-charcoal/5 border border-charcoal/10 p-4 text-center hover:border-charcoal/20 transition-colors">
            <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-charcoal/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-charcoal-light" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </div>
            <p className="text-xs font-medium text-charcoal">Evening</p>
          </a>
        </div>

        {/* Subscription */}
        {profile?.subscription_tier === 'premium' ? (
          <Card className="border-sage/20 bg-sage/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Selah Premium</p>
                <p className="text-xs text-stone-light">Full access to all features</p>
              </div>
            </div>
            <p className="text-xs text-sage-dark">Thank you for going deeper with Selah.</p>
          </Card>
        ) : (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/10 via-cream to-lavender/10 border border-sage/15 p-5">
            <div className="absolute top-0 right-0 w-20 h-20 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-sm font-medium text-charcoal mb-1">Go deeper with Premium</p>
              <ul className="space-y-1 mb-4">
                <li className="text-xs text-stone-light">All 7 pathways and evening prayers</li>
                <li className="text-xs text-stone-light">Unlimited journaling and saved prayers</li>
                <li className="text-xs text-stone-light">Mood insights and shareable verse cards</li>
              </ul>
              <p className="text-[10px] text-stone mb-3">Less than a coffee a week. 7-day free trial.</p>
              <Link href="/subscribe">
                <Button size="sm" fullWidth>Start your free trial</Button>
              </Link>
            </div>
          </div>
        )}

        {/* Dev/testing toggle - remove before production */}
        <Card variant="soft" padding="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-stone">Testing mode</p>
              <p className="text-[10px] text-stone-light">Toggle premium to preview all content</p>
            </div>
            <button
              onClick={async () => {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) return;
                const newTier = profile?.subscription_tier === 'premium' ? 'free' : 'premium';
                await supabase.from('profiles').update({ subscription_tier: newTier }).eq('id', user.id);
                setProfile(profile ? { ...profile, subscription_tier: newTier } : null);
              }}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                profile?.subscription_tier === 'premium' ? 'bg-sage' : 'bg-stone-light'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                profile?.subscription_tier === 'premium' ? 'translate-x-5' : ''
              }`} />
            </button>
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
