'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import MoodGraph from '@/components/ui/MoodGraph';
import type { DailyCheckin, Habit, JournalEntry, Profile } from '@/types/database';

const MOOD_COLORS: Record<string, string> = {
  peaceful: 'bg-sage/60',
  grateful: 'bg-sage/40',
  hopeful: 'bg-sky/60',
  joyful: 'bg-warm/50',
  confident: 'bg-sage/70',
  surrendered: 'bg-lavender/50',
  anxious: 'bg-blush/60',
  overwhelmed: 'bg-blush/70',
  weary: 'bg-stone-light/60',
  lonely: 'bg-lavender/60',
  restless: 'bg-warm/40',
  hurt: 'bg-blush/80',
};

export default function InsightsPage() {
  const [checkins, setCheckins] = useState<DailyCheckin[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const since = thirtyDaysAgo.toISOString().split('T')[0];

      const [{ data: c }, { data: h }, { data: j }] = await Promise.all([
        supabase.from('daily_checkins').select('*').eq('user_id', user.id)
          .gte('checked_in_at', since).order('checked_in_at', { ascending: false }),
        supabase.from('habits').select('*').eq('user_id', user.id)
          .gte('habit_date', since).order('habit_date', { ascending: false }),
        supabase.from('journal_entries').select('*').eq('user_id', user.id)
          .gte('created_at', thirtyDaysAgo.toISOString()).order('created_at', { ascending: false }),
      ]);

      const { data: profileData } = await supabase
        .from('profiles').select('*').eq('id', user.id).single();
      setProfile(profileData);
      setCheckins(c || []);
      setHabits(h || []);
      setJournals(j || []);
      setLoading(false);
    }
    load();
  }, [supabase]);

  // Calculate stats
  const totalCheckins = checkins.length;
  const totalJournals = journals.length;
  const totalPrayed = habits.filter(h => h.prayed).length;
  const totalScripture = habits.filter(h => h.read_scripture).length;

  // Mood frequency
  const moodCounts: Record<string, number> = {};
  checkins.forEach(c => {
    c.feeling_tags.forEach(tag => {
      moodCounts[tag] = (moodCounts[tag] || 0) + 1;
    });
  });
  const topMoods = Object.entries(moodCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Need frequency
  const needCounts: Record<string, number> = {};
  checkins.forEach(c => {
    c.need_tags.forEach(tag => {
      needCounts[tag] = (needCounts[tag] || 0) + 1;
    });
  });
  const topNeeds = Object.entries(needCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Insights" subtitle="Your spiritual journey at a glance" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
              <div className="h-5 bg-cream-dark rounded w-1/2 mb-3" />
              <div className="h-20 bg-cream-dark rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="Insights" subtitle="Your last 30 days with God" />

      <div className="space-y-5">
        {/* Monthly summary stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard number={totalCheckins} label="Days checked in" icon="sunrise" max={30} />
          <StatCard number={totalPrayed} label="Days prayed" icon="pray" max={30} />
          <StatCard number={totalJournals} label="Journal entries" icon="journal" max={30} />
          <StatCard number={totalScripture} label="Days in scripture" icon="scripture" max={30} />
        </div>

        {/* Premium gate for detailed insights */}
        {profile?.subscription_tier !== 'premium' && (
          <Card className="text-center border-sage/20 bg-sage/5">
            <p className="text-sm font-medium text-charcoal mb-1">See your full spiritual story</p>
            <p className="text-xs text-stone-light leading-relaxed mb-4">
              Your mood patterns, most frequent needs, and 30-day journey map are part of Premium.
            </p>
            <Link href="/subscribe">
              <Button size="sm">Start your 7-day free trial</Button>
            </Link>
          </Card>
        )}

        {/* Mood graph - weekly view (premium only) */}
        {profile?.subscription_tier === 'premium' && (<>
        <div>
          <h3 className="text-sm font-medium text-charcoal mb-3">Your mood this week</h3>
          <MoodGraph checkins={checkins} />
        </div>

        {/* Top moods */}
        {topMoods.length > 0 && (
          <Card>
            <h3 className="text-sm font-medium text-charcoal mb-3">How you&apos;ve been feeling most</h3>
            <div className="space-y-2.5">
              {topMoods.map(([mood, count]) => (
                <div key={mood} className="flex items-center gap-3">
                  <span className="text-sm text-charcoal capitalize w-24">{mood}</span>
                  <div className="flex-1 h-2 bg-cream-dark rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${MOOD_COLORS[mood] || 'bg-sage/40'} transition-all duration-500`}
                      style={{ width: `${(count / totalCheckins) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-stone-light w-8 text-right">{count}x</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Top needs */}
        {topNeeds.length > 0 && (
          <Card>
            <h3 className="text-sm font-medium text-charcoal mb-3">What you&apos;ve needed most from God</h3>
            <div className="flex flex-wrap gap-2">
              {topNeeds.map(([need, count]) => (
                <span key={need} className="text-xs bg-lavender/10 text-charcoal-light px-3 py-1.5 rounded-full border border-lavender/20">
                  {need} <span className="text-stone-light ml-1">{count}x</span>
                </span>
              ))}
            </div>
          </Card>
        )}

        </>)}

        {/* Gentle encouragement */}
        <Card variant="soft" className="text-center">
          <p className="text-sm text-charcoal leading-relaxed">
            {totalCheckins >= 20
              ? 'Your consistency is remarkable. God sees every day you showed up.'
              : totalCheckins >= 10
              ? 'You\'re building a beautiful rhythm. Keep going - it\'s making a difference.'
              : totalCheckins >= 3
              ? 'Every check-in is a step closer. There\'s no perfect streak - just faithfulness.'
              : 'You\'re here, and that matters. Even one moment with God can shift everything.'}
          </p>
        </Card>
      </div>
    </div>
  );
}

const STAT_ICONS: Record<string, React.ReactNode> = {
  sunrise: <><path d="M12 2v4M4.93 4.93l2.83 2.83M20 12h-4M4 12H0M6.34 17.66l-1.41 1.41M19.07 4.93l-2.83 2.83" /><path d="M17 18a5 5 0 00-10 0" /><path d="M2 22h20" /></>,
  pray: <><path d="M7 11c0-1.5.5-3 2-4s3-1 4-1 2.5 0 4 1 2 2.5 2 4" /><path d="M7 11v7a2 2 0 004 0v-2a2 2 0 014 0v2a2 2 0 004 0v-7" /></>,
  journal: <><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" /><path d="M8 7h8M8 11h5" /></>,
  scripture: <><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1z" /><path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1z" /></>,
};

function StatCard({ number, label, icon, max }: { number: number; label: string; icon: string; max: number }) {
  const percentage = Math.min((number / max) * 100, 100);
  return (
    <div className="bg-white rounded-2xl border border-cream-dark/80 shadow-[0_1px_3px_rgba(139,126,116,0.04)] p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 rounded-full bg-sage/8 flex items-center justify-center">
          <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            {STAT_ICONS[icon]}
          </svg>
        </div>
        <span className="text-2xl font-light text-charcoal">{number}</span>
      </div>
      <p className="text-xs text-stone-light mb-2">{label}</p>
      <div className="w-full h-1 bg-cream-dark rounded-full overflow-hidden">
        <div className="h-full bg-sage/50 rounded-full transition-all duration-700" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function getLast30Days(): string[] {
  const days: string[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}
