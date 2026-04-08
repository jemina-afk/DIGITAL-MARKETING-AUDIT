'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import type { DailyCheckin, Habit, JournalEntry } from '@/types/database';

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
          <StatCard number={totalCheckins} label="Days checked in" icon="🌅" max={30} />
          <StatCard number={totalPrayed} label="Days prayed" icon="🙏" max={30} />
          <StatCard number={totalJournals} label="Journal entries" icon="📝" max={30} />
          <StatCard number={totalScripture} label="Days in scripture" icon="📖" max={30} />
        </div>

        {/* Mood map — last 30 days */}
        <Card>
          <h3 className="text-sm font-medium text-charcoal mb-4">Your mood over 30 days</h3>
          <div className="grid grid-cols-7 gap-1.5">
            {getLast30Days().map((date) => {
              const checkin = checkins.find(c => c.checked_in_at === date);
              const primaryMood = checkin?.feeling_tags[0];
              const colorClass = primaryMood ? (MOOD_COLORS[primaryMood] || 'bg-sage/30') : 'bg-cream-dark';
              const isToday = date === new Date().toISOString().split('T')[0];

              return (
                <div key={date} className="flex flex-col items-center gap-0.5">
                  <div
                    className={`w-full aspect-square rounded-lg ${colorClass} ${isToday ? 'ring-2 ring-sage/40' : ''} transition-all`}
                    title={primaryMood ? `${date}: ${primaryMood}` : date}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-3 text-[10px] text-stone-light">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-sage/60" /> Peaceful</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blush/60" /> Anxious</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-lavender/60" /> Reflective</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-cream-dark" /> No data</span>
          </div>
        </Card>

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

        {/* Gentle encouragement */}
        <Card variant="soft" className="text-center">
          <p className="text-sm text-charcoal leading-relaxed">
            {totalCheckins >= 20
              ? 'Your consistency is remarkable. God sees every day you showed up.'
              : totalCheckins >= 10
              ? 'You\'re building a beautiful rhythm. Keep going — it\'s making a difference.'
              : totalCheckins >= 3
              ? 'Every check-in is a step closer. There\'s no perfect streak — just faithfulness.'
              : 'You\'re here, and that matters. Even one moment with God can shift everything.'}
          </p>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ number, label, icon, max }: { number: number; label: string; icon: string; max: number }) {
  const percentage = Math.min((number / max) * 100, 100);
  return (
    <div className="bg-white rounded-2xl border border-cream-dark p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg">{icon}</span>
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
