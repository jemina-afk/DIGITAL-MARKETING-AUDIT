'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import { PathwayIcon } from '@/components/ui/Icons';
import { FREE_PATHWAY_LIMIT } from '@/lib/constants';
import type { Pathway, UserPathwayProgress, Profile } from '@/types/database';

export default function PathwaysPage() {
  const [pathways, setPathways] = useState<Pathway[]>([]);
  const [progress, setProgress] = useState<UserPathwayProgress[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: pathwayData }, { data: progressData }, { data: profileData }] =
        await Promise.all([
          supabase.from('pathways').select('*').order('sort_order'),
          supabase.from('user_pathway_progress').select('*').eq('user_id', user.id),
          supabase.from('profiles').select('*').eq('id', user.id).single(),
        ]);

      setPathways(pathwayData || []);
      setProgress(progressData || []);
      setProfile(profileData);
      setLoading(false);
    }
    load();
  }, [supabase]);

  const isPremium = profile?.subscription_tier === 'premium';

  function getProgressForPathway(pathwayId: string) {
    return progress.find((p) => p.pathway_id === pathwayId);
  }

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Pathways" subtitle="Guided devotional journeys" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
              <div className="h-5 bg-cream-dark rounded w-1/2 mb-3" />
              <div className="h-3 bg-cream-dark rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const freePathways = pathways.filter((p) => p.is_free);
  const premiumPathways = pathways.filter((p) => !p.is_free);

  return (
    <div className="animate-fade-in">
      <AppHeader title="Pathways" subtitle="7-day guided devotional journeys for your season" />

      <div className="space-y-4">
        {/* Active pathways */}
        {progress.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-charcoal-light">Continue your journey</h3>
            {progress
              .filter((p) => !p.completed_at)
              .map((prog) => {
                const pathway = pathways.find((p) => p.id === prog.pathway_id);
                if (!pathway) return null;
                return (
                  <Link key={prog.id} href={`/pathways/${pathway.id}`}>
                    <Card className="hover:border-sage/30 transition-colors cursor-pointer mb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-sage/10"><PathwayIcon name={pathway.cover_emoji} className="text-sage" size={18} /></span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-charcoal">{pathway.title}</p>
                          <p className="text-xs text-stone-light">
                            Day {prog.current_day} of {pathway.total_days}
                          </p>
                        </div>
                      </div>
                      <ProgressBar
                        value={prog.completed_days.length}
                        max={pathway.total_days}
                      />
                    </Card>
                  </Link>
                );
              })}
          </div>
        )}

        {/* Free pathways */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-charcoal-light">Free pathways</h3>
          {freePathways.map((pathway) => (
            <PathwayCard
              key={pathway.id}
              pathway={pathway}
              progress={getProgressForPathway(pathway.id)}
              locked={false}
            />
          ))}
        </div>

        {/* Premium pathways */}
        {premiumPathways.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-charcoal-light">
              Premium pathways
              {!isPremium && (
                <span className="text-xs text-warm ml-2">
                  <Link href="/subscribe" className="underline">Upgrade to unlock</Link>
                </span>
              )}
            </h3>
            {premiumPathways.map((pathway) => (
              <PathwayCard
                key={pathway.id}
                pathway={pathway}
                progress={getProgressForPathway(pathway.id)}
                locked={!isPremium}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PathwayCard({
  pathway,
  progress,
  locked,
}: {
  pathway: Pathway;
  progress?: UserPathwayProgress;
  locked: boolean;
}) {
  return (
    <Link href={locked ? '/subscribe' : `/pathways/${pathway.id}`}>
      <Card className={`hover:border-sage/30 transition-colors cursor-pointer mb-3 ${locked ? 'opacity-75' : ''}`}>
        <div className="flex items-start gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-sage/10 flex-shrink-0"><PathwayIcon name={pathway.cover_emoji} className="text-sage" size={20} /></span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-charcoal">{pathway.title}</p>
              {locked && (
                <span className="text-xs bg-warm-light text-warm px-2 py-0.5 rounded-full">
                  Premium
                </span>
              )}
            </div>
            <p className="text-xs text-stone-light mt-1 line-clamp-2">
              {pathway.description}
            </p>
            <p className="text-xs text-stone-light mt-2">
              {pathway.total_days} days
              {progress && ` · ${progress.completed_days.length} completed`}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
