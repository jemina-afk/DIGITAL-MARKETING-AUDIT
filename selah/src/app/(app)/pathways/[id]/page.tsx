'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import Disclaimer from '@/components/ui/Disclaimer';
import AudioPlayer from '@/components/ui/AudioPlayer';
import { trackEvent } from '@/lib/analytics';
import type { Pathway, PathwayDay, UserPathwayProgress } from '@/types/database';

export default function PathwayDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [pathway, setPathway] = useState<Pathway | null>(null);
  const [days, setDays] = useState<PathwayDay[]>([]);
  const [progress, setProgress] = useState<UserPathwayProgress | null>(null);
  const [activeDay, setActiveDay] = useState<PathwayDay | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: pathwayData }, { data: daysData }, { data: progressData }] =
        await Promise.all([
          supabase.from('pathways').select('*').eq('id', id).single(),
          supabase.from('pathway_days').select('*').eq('pathway_id', id).order('day_number'),
          supabase
            .from('user_pathway_progress')
            .select('*')
            .eq('user_id', user.id)
            .eq('pathway_id', id)
            .single(),
        ]);

      setPathway(pathwayData);
      setDays(daysData || []);
      setProgress(progressData);

      if (daysData && daysData.length > 0) {
        const currentDay = progressData?.current_day || 1;
        setActiveDay(daysData.find((d: PathwayDay) => d.day_number === currentDay) || daysData[0]);
      }

      setLoading(false);
    }
    load();
  }, [id, supabase]);

  async function handleStart() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from('user_pathway_progress')
      .upsert({
        user_id: user.id,
        pathway_id: id,
        current_day: 1,
        completed_days: [],
      }, { onConflict: 'user_id,pathway_id' })
      .select()
      .single();

    setProgress(data);
    await trackEvent('pathway_started', { pathway_id: id, pathway_title: pathway?.title });
  }

  async function handleCompleteDay() {
    if (!progress || !activeDay) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const newCompletedDays = [...new Set([...progress.completed_days, activeDay.day_number])];
    const isPathwayComplete = newCompletedDays.length === (pathway?.total_days || 7);
    const nextDay = Math.min(activeDay.day_number + 1, pathway?.total_days || 7);

    const { data } = await supabase
      .from('user_pathway_progress')
      .update({
        completed_days: newCompletedDays,
        current_day: nextDay,
        completed_at: isPathwayComplete ? new Date().toISOString() : null,
      })
      .eq('id', progress.id)
      .select()
      .single();

    setProgress(data);

    // Update habit
    const today = new Date().toISOString().split('T')[0];
    await supabase.from('habits').upsert({
      user_id: user.id,
      habit_date: today,
      completed_pathway_day: true,
      read_scripture: true,
    }, { onConflict: 'user_id,habit_date' });

    await trackEvent('pathway_day_completed', {
      pathway_id: id,
      day: activeDay.day_number,
    });

    if (isPathwayComplete) {
      await trackEvent('pathway_completed', { pathway_id: id });
    }

    // Move to next day
    if (!isPathwayComplete) {
      const nextDayContent = days.find((d) => d.day_number === nextDay);
      if (nextDayContent) setActiveDay(nextDayContent);
    }
  }

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Loading..." />
        <div className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
          <div className="h-5 bg-cream-dark rounded w-1/2 mb-4" />
          <div className="h-3 bg-cream-dark rounded w-full mb-2" />
          <div className="h-3 bg-cream-dark rounded w-3/4" />
        </div>
      </div>
    );
  }

  if (!pathway) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Pathway not found" />
        <Button variant="ghost" onClick={() => router.push('/pathways')}>
          Back to pathways
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader
        title={`${pathway.cover_emoji} ${pathway.title}`}
        subtitle={pathway.description}
      />

      {/* Progress */}
      {progress && (
        <div className="mb-6">
          <ProgressBar
            value={progress.completed_days.length}
            max={pathway.total_days}
            className="mb-2"
          />
          <p className="text-xs text-stone-light text-center">
            {progress.completed_days.length} of {pathway.total_days} days completed
          </p>
        </div>
      )}

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
        {days.map((day) => {
          const isCompleted = progress?.completed_days.includes(day.day_number);
          const isActive = activeDay?.day_number === day.day_number;
          return (
            <button
              key={day.id}
              onClick={() => setActiveDay(day)}
              className={`flex-shrink-0 w-10 h-10 rounded-full text-sm font-medium transition-all
                ${isActive
                  ? 'bg-sage text-white'
                  : isCompleted
                  ? 'bg-sage/20 text-sage-dark'
                  : 'bg-cream-dark text-stone-light'
                }`}
            >
              {day.day_number}
            </button>
          );
        })}
      </div>

      {/* Day content */}
      {activeDay && (
        <div className="space-y-4">
          <Card>
            <h3 className="text-lg text-charcoal mb-1">{activeDay.theme}</h3>
            <p className="text-xs text-stone-light">Day {activeDay.day_number}</p>
          </Card>

          {/* Audio player for pathway day */}
          <AudioPlayer
            reflection={activeDay.reflection}
            verse={activeDay.scripture_text}
            verseReference={activeDay.scripture_reference}
            prayer={activeDay.prayer_prompt}
          />

          <Card variant="soft">
            <blockquote className="text-center">
              <p className="text-charcoal italic leading-relaxed mb-3">
                &ldquo;{activeDay.scripture_text}&rdquo;
              </p>
              <cite className="text-sm text-sage-dark not-italic font-medium">
                {activeDay.scripture_reference}
              </cite>
            </blockquote>
          </Card>

          <Card>
            <h4 className="text-sm font-medium text-charcoal mb-2">Reflection</h4>
            <p className="text-sm text-charcoal-light leading-relaxed">
              {activeDay.reflection}
            </p>
          </Card>

          <Card className="border-lavender/30 bg-lavender/5">
            <h4 className="text-sm font-medium text-charcoal mb-2">Journal prompt</h4>
            <p className="text-sm text-charcoal-light italic">
              {activeDay.journal_prompt}
            </p>
          </Card>

          <Card className="border-blush/30 bg-blush/5">
            <h4 className="text-sm font-medium text-charcoal mb-2">Prayer</h4>
            <p className="text-sm text-charcoal-light italic leading-relaxed">
              {activeDay.prayer_prompt}
            </p>
          </Card>

          {!progress ? (
            <Button onClick={handleStart} fullWidth size="lg">
              Start this pathway
            </Button>
          ) : progress.completed_days.includes(activeDay.day_number) ? (
            <div className="text-center py-3">
              <p className="text-sm text-sage">Day completed</p>
            </div>
          ) : (
            <Button onClick={handleCompleteDay} fullWidth size="lg">
              Complete day {activeDay.day_number}
            </Button>
          )}

          {progress?.completed_at && (
            <Card className="text-center border-sage/30 bg-sage/5">
              <p className="text-sage-dark font-medium">Pathway completed!</p>
              <p className="text-xs text-stone-light mt-1">
                Well done. May the seeds planted here continue to grow.
              </p>
            </Card>
          )}

          <Disclaimer className="mt-4 text-center" />
        </div>
      )}

      <Button variant="ghost" onClick={() => router.push('/pathways')} className="mt-4">
        Back to pathways
      </Button>
    </div>
  );
}
