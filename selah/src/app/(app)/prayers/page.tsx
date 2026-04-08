'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import type { JournalEntry, DailyResponse } from '@/types/database';

export default function PrayersPage() {
  const [savedPrayers, setSavedPrayers] = useState<JournalEntry[]>([]);
  const [dailyPrayers, setDailyPrayers] = useState<DailyResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'received' | 'written'>('received');
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: journal }, { data: responses }] = await Promise.all([
        supabase
          .from('journal_entries')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_saved_prayer', true)
          .order('created_at', { ascending: false }),
        supabase
          .from('daily_responses')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(30),
      ]);

      setSavedPrayers(journal || []);
      setDailyPrayers(responses || []);
      setLoading(false);
    }
    load();
  }, [supabase]);

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="My Prayers" subtitle="Your sacred conversation with God" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
              <div className="h-4 bg-cream-dark rounded w-3/4 mb-2" />
              <div className="h-3 bg-cream-dark rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="My Prayers" subtitle="Your sacred conversation with God" />

      {/* Tabs */}
      <div className="flex gap-1 bg-cream-dark/50 rounded-xl p-1 mb-6">
        <button
          onClick={() => setActiveTab('received')}
          className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all
            ${activeTab === 'received'
              ? 'bg-white text-charcoal shadow-sm'
              : 'text-stone-light hover:text-stone'
            }`}
        >
          Prayers for you
        </button>
        <button
          onClick={() => setActiveTab('written')}
          className={`flex-1 text-sm py-2.5 rounded-lg font-medium transition-all
            ${activeTab === 'written'
              ? 'bg-white text-charcoal shadow-sm'
              : 'text-stone-light hover:text-stone'
            }`}
        >
          Your prayers
        </button>
      </div>

      {activeTab === 'received' ? (
        <div className="space-y-4">
          {dailyPrayers.length === 0 ? (
            <Card variant="soft" className="text-center py-8">
              <p className="text-3xl mb-3">🙏</p>
              <p className="text-sm text-stone-light">No prayers yet. Complete a daily check-in to receive your first personalised prayer.</p>
            </Card>
          ) : (
            <>
              <p className="text-xs text-stone-light">Prayers written for you from your daily devotionals.</p>
              {dailyPrayers.map((resp) => (
                <Card key={resp.id} className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 bg-blush rounded-full" />
                    <p className="text-xs text-stone-light">
                      {new Date(resp.response_date).toLocaleDateString('en-US', {
                        weekday: 'long', month: 'long', day: 'numeric',
                      })}
                    </p>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed italic">
                    {resp.prayer}
                  </p>
                  <div className="mt-3 pt-3 border-t border-cream-dark">
                    <p className="text-xs text-sage-dark">
                      {resp.bible_reference}
                    </p>
                  </div>
                </Card>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {savedPrayers.length === 0 ? (
            <Card variant="soft" className="text-center py-8">
              <p className="text-3xl mb-3">✍️</p>
              <p className="text-sm text-stone-light mb-3">No saved prayers yet.</p>
              <p className="text-xs text-stone-light">When you write a prayer in your journal, it will appear here.</p>
              <a href="/journal/new">
                <Button variant="primary" size="sm" className="mt-4">Write a prayer</Button>
              </a>
            </Card>
          ) : (
            <>
              <p className="text-xs text-stone-light">Prayers you&apos;ve written in your journal.</p>
              {savedPrayers.map((entry) => (
                <Card key={entry.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-5 bg-lavender rounded-full" />
                    <p className="text-xs text-stone-light">
                      {new Date(entry.created_at).toLocaleDateString('en-US', {
                        weekday: 'long', month: 'long', day: 'numeric',
                      })}
                    </p>
                  </div>
                  {entry.title && (
                    <p className="text-sm font-medium text-charcoal mb-2">{entry.title}</p>
                  )}
                  <p className="text-sm text-charcoal-light leading-relaxed italic whitespace-pre-line">
                    {entry.content}
                  </p>
                </Card>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
