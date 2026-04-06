'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import type { JournalEntry, Profile } from '@/types/database';
import { FREE_JOURNAL_LIMIT } from '@/lib/constants';

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setProfile(profileData);

      const { data } = await supabase
        .from('journal_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      setEntries(data || []);
      setLoading(false);
    }
    load();
  }, [supabase]);

  const isPremium = profile?.subscription_tier === 'premium';
  const isAtLimit = !isPremium && entries.length >= FREE_JOURNAL_LIMIT;

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Journal" subtitle="Your sacred space to process and grow" />
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
      <AppHeader title="Journal" subtitle="Your sacred space to process and grow" />

      <div className="space-y-4">
        {isAtLimit ? (
          <Card className="border-warm/30 bg-warm/5">
            <p className="text-sm text-charcoal mb-3">
              You&apos;ve reached the free journal limit. Upgrade to keep writing.
            </p>
            <Link href="/subscribe">
              <Button variant="primary" size="sm">Unlock unlimited journaling</Button>
            </Link>
          </Card>
        ) : (
          <Link href="/journal/new">
            <Button fullWidth size="lg">
              New journal entry
            </Button>
          </Link>
        )}

        {entries.length === 0 ? (
          <Card variant="soft" className="text-center py-8">
            <p className="text-stone-light text-sm mb-2">No entries yet</p>
            <p className="text-xs text-stone-light">
              Start writing — this is your safe space with God.
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <Link key={entry.id} href={`/journal/${entry.id}`}>
                <Card className="hover:border-sage/30 transition-colors cursor-pointer mb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal truncate">
                        {entry.title || formatEntryType(entry.entry_type)}
                      </p>
                      <p className="text-xs text-stone-light mt-1 line-clamp-2">
                        {entry.content.slice(0, 120)}
                        {entry.content.length > 120 ? '...' : ''}
                      </p>
                    </div>
                    <p className="text-xs text-stone-light whitespace-nowrap">
                      {formatDate(entry.created_at)}
                    </p>
                  </div>
                  {(entry.mood_tags.length > 0 || entry.topic_tags.length > 0) && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {entry.mood_tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-lavender-light text-charcoal-light px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {entry.topic_tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-sky-light text-charcoal-light px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatEntryType(type: string) {
  const map: Record<string, string> = {
    free_write: 'Free write',
    prompted: 'Guided reflection',
    prayer: 'Prayer',
    gratitude: 'Gratitude',
  };
  return map[type] || 'Journal entry';
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
