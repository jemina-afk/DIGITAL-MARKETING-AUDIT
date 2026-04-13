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
import ContentCarousel from '@/components/ui/ContentCarousel';
import { trackEvent } from '@/lib/analytics';
import type { Pathway, PathwayDay, UserPathwayProgress } from '@/types/database';

export default function PathwayDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [pathway, setPathway] = useState<Pathway | null>(null);
  const [days, setDays] = useState<PathwayDay[]>([]);
  const [progress, setProgress] = useState<UserPathwayProgress | null>(null);
  const [activeDay, setActiveDay] = useState<PathwayDay | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCompletion, setShowCompletion] = useState<'day' | 'pathway' | null>(null);
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
      setShowCompletion('pathway');
    } else {
      setShowCompletion('day');
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

  // ===== DAY COMPLETION SCREEN =====
  if (showCompletion === 'day' && activeDay) {
    const completedCount = progress?.completed_days.length || 0;
    const totalDays = pathway.total_days;
    const nextDayNum = Math.min(activeDay.day_number + 1, totalDays);
    const nextDayContent = days.find((d) => d.day_number === nextDayNum);

    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 animate-scale-in">
        <div className="text-center max-w-sm">
          {/* Animated circle with checkmark */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <svg className="w-20 h-20" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream-dark" />
              <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-sage"
                strokeDasharray={`${(completedCount / totalDays) * 226} 226`}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          <h2 className="text-xl text-charcoal mb-2">Day {activeDay.day_number} complete</h2>
          <p className="text-sm text-stone leading-relaxed mb-2">
            {completedCount} of {totalDays} days done
          </p>
          <p className="text-xs text-stone-light leading-relaxed mb-8">
            {completedCount <= 2
              ? 'You\'re building something beautiful. Keep going.'
              : completedCount <= 5
              ? 'You\'re over halfway there. God is doing something in you.'
              : 'Almost there. What a journey this has been.'}
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => {
                setShowCompletion(null);
                if (nextDayContent) setActiveDay(nextDayContent);
              }}
              fullWidth
              size="lg"
            >
              Continue to Day {nextDayNum}
            </Button>
            <div className="flex gap-3">
              <a href="/journal/new" className="flex-1">
                <Button variant="outline" fullWidth>Journal this</Button>
              </a>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowCompletion(null);
                  router.push('/pathways');
                }}
                className="flex-1"
              >
                Done for today
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== PATHWAY COMPLETION SCREEN =====
  if (showCompletion === 'pathway') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 animate-scale-in">
        <div className="text-center max-w-sm">
          {/* Full circle with star */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <svg className="w-24 h-24" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="42" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-sage" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            </div>
          </div>

          <p className="text-xs tracking-widest text-sage uppercase mb-3">Pathway complete</p>
          <h2 className="text-2xl text-charcoal mb-3">{pathway.title}</h2>
          <p className="text-sm text-stone leading-relaxed mb-8">
            You finished all {pathway.total_days} days. The seeds planted here will continue to grow
            long after this pathway ends. Well done.
          </p>

          <div className="space-y-3">
            <Button onClick={() => router.push('/pathways')} fullWidth size="lg">
              Explore more pathways
            </Button>
            <a href="/journal/new">
              <Button variant="outline" fullWidth>Reflect in your journal</Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader
        title={pathway.title}
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
        <div className="space-y-3">
          {/* Day header */}
          <div className="text-center py-1">
            <p className="text-xs text-stone-light mb-1">Day {activeDay.day_number}</p>
            <h3 className="text-lg text-charcoal">{activeDay.theme}</h3>
          </div>

          {/* Audio player */}
          <AudioPlayer
            reflection={activeDay.reflection}
            verse={activeDay.scripture_text}
            verseReference={activeDay.scripture_reference}
            prayer={activeDay.prayer_prompt}
          />

          {/* Carousel content - swipe through sections */}
          <ContentCarousel
            slides={[
              {
                id: 'scripture',
                label: 'Scripture',
                accentColor: 'bg-warm',
                content: (
                  <blockquote className="text-center py-2">
                    <p className="text-charcoal italic leading-[1.8] text-[15px] mb-4">
                      &ldquo;{activeDay.scripture_text}&rdquo;
                    </p>
                    <cite className="text-sm text-sage-dark not-italic font-medium tracking-wide">
                      - {activeDay.scripture_reference}
                    </cite>
                  </blockquote>
                ),
              },
              {
                id: 'reflection',
                label: 'Reflection',
                accentColor: 'bg-sage',
                content: (
                  <p className="text-[15px] text-charcoal leading-[1.8] whitespace-pre-line">
                    {activeDay.reflection}
                  </p>
                ),
              },
              {
                id: 'prayer',
                label: 'Prayer',
                accentColor: 'bg-blush',
                content: (
                  <p className="text-[15px] text-charcoal-light italic leading-[1.8]">
                    {activeDay.prayer_prompt}
                  </p>
                ),
              },
              {
                id: 'journal',
                label: 'Journal',
                accentColor: 'bg-lavender',
                content: (
                  <div>
                    <p className="text-[15px] text-charcoal-light italic leading-[1.7] mb-4">
                      {activeDay.journal_prompt}
                    </p>
                    <a href="/journal/new" className="inline-flex items-center gap-1.5 text-sm text-sage font-medium hover:text-sage-dark transition-colors bg-sage/5 px-4 py-2.5 rounded-xl">
                      Open journal to write
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </a>
                  </div>
                ),
              },
            ]}
          />

          {/* Complete / Start button */}
          {!progress ? (
            <Button onClick={handleStart} fullWidth size="lg">
              Start this pathway
            </Button>
          ) : progress.completed_days.includes(activeDay.day_number) ? (
            <div className="text-center py-1">
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
