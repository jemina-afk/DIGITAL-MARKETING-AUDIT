'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import { trackEvent } from '@/lib/analytics';
import type { Habit } from '@/types/database';

const HABIT_ITEMS = [
  { key: 'prayed' as const, label: 'Prayed', emoji: '🙏' },
  { key: 'journaled' as const, label: 'Journaled', emoji: '📝' },
  { key: 'read_scripture' as const, label: 'Read scripture', emoji: '📖' },
  { key: 'completed_pathway_day' as const, label: 'Pathway day', emoji: '🗺️' },
];

export default function HabitsPage() {
  const [todayHabit, setTodayHabit] = useState<Habit | null>(null);
  const [weekHabits, setWeekHabits] = useState<Habit[]>([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const today = new Date().toISOString().split('T')[0];

      // Get today's habits
      const { data: todayData } = await supabase
        .from('habits')
        .select('*')
        .eq('user_id', user.id)
        .eq('habit_date', today)
        .single();

      setTodayHabit(todayData);

      // Get last 30 days for streak calc
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: recentHabits } = await supabase
        .from('habits')
        .select('*')
        .eq('user_id', user.id)
        .gte('habit_date', thirtyDaysAgo.toISOString().split('T')[0])
        .order('habit_date', { ascending: false });

      if (recentHabits) {
        setWeekHabits(recentHabits.slice(0, 7));
        setStreak(calculateStreak(recentHabits));
      }

      setLoading(false);
    }
    load();
  }, [supabase]);

  async function toggleHabit(key: keyof Pick<Habit, 'prayed' | 'journaled' | 'read_scripture' | 'completed_pathway_day'>) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    const newValue = !(todayHabit?.[key] ?? false);

    const { data } = await supabase
      .from('habits')
      .upsert({
        user_id: user.id,
        habit_date: today,
        ...todayHabit,
        [key]: newValue,
      }, { onConflict: 'user_id,habit_date' })
      .select()
      .single();

    setTodayHabit(data);
    await trackEvent('habit_logged', { habit: key, value: newValue });
  }

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Faith habits" subtitle="Small steps, steady growth" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-cream-dark animate-pulse">
              <div className="h-4 bg-cream-dark rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="Faith habits" subtitle="Small steps, steady growth" />

      <div className="space-y-6">
        {/* Streak - gentle encouragement */}
        {streak > 0 && (
          <Card variant="soft" className="text-center">
            <p className="text-3xl mb-1">{streak >= 7 ? '🌟' : '🌱'}</p>
            <p className="text-lg text-charcoal">{streak} day streak</p>
            <p className="text-xs text-stone-light mt-1">
              {streak >= 7
                ? 'Your consistency is beautiful. Keep going.'
                : 'Every day with God matters. You\'re showing up.'}
            </p>
          </Card>
        )}

        {/* Today's habits */}
        <div>
          <h3 className="text-sm font-medium text-charcoal-light mb-3">Today</h3>
          <div className="space-y-2">
            {HABIT_ITEMS.map(({ key, label, emoji }) => {
              const isComplete = todayHabit?.[key] ?? false;
              return (
                <button
                  key={key}
                  onClick={() => toggleHabit(key)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all
                    ${isComplete
                      ? 'border-sage/30 bg-sage/5'
                      : 'border-cream-dark bg-white hover:border-stone-light'
                    }`}
                >
                  <span className="text-xl">{emoji}</span>
                  <span className={`flex-1 text-left text-sm ${isComplete ? 'text-sage-dark' : 'text-charcoal'}`}>
                    {label}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                    ${isComplete
                      ? 'border-sage bg-sage'
                      : 'border-stone-light'
                    }`}
                  >
                    {isComplete && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Week view */}
        <div>
          <h3 className="text-sm font-medium text-charcoal-light mb-3">This week</h3>
          <Card>
            <div className="flex justify-between">
              {getLast7Days().map((date) => {
                const habit = weekHabits.find((h) => h.habit_date === date);
                const completedCount = habit
                  ? [habit.prayed, habit.journaled, habit.read_scripture, habit.completed_pathway_day].filter(Boolean).length
                  : 0;
                const isToday = date === new Date().toISOString().split('T')[0];

                return (
                  <div key={date} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-stone-light">
                      {new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'narrow' })}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                        ${isToday ? 'ring-2 ring-sage/30' : ''}
                        ${completedCount >= 3
                          ? 'bg-sage text-white'
                          : completedCount >= 1
                          ? 'bg-sage/20 text-sage-dark'
                          : 'bg-cream-dark text-stone-light'
                        }`}
                    >
                      {completedCount > 0 ? completedCount : '·'}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Gentle note */}
        <p className="text-xs text-stone-light text-center leading-relaxed px-4">
          Grace over perfection. Missing a day doesn&apos;t erase your growth.
          God meets you where you are.
        </p>
      </div>
    </div>
  );
}

function calculateStreak(habits: Habit[]): number {
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < habits.length; i++) {
    const expectedDate = new Date(today);
    expectedDate.setDate(expectedDate.getDate() - i);
    const expected = expectedDate.toISOString().split('T')[0];

    const habit = habits.find((h) => h.habit_date === expected);
    if (habit && (habit.prayed || habit.journaled || habit.read_scripture || habit.completed_pathway_day)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

function getLast7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push(date.toISOString().split('T')[0]);
  }
  return days;
}
