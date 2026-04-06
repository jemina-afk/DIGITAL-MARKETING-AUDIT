'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import type { JournalEntry } from '@/types/database';

export default function JournalEntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('journal_entries')
        .select('*')
        .eq('id', id)
        .single();

      setEntry(data);
      setLoading(false);
    }
    load();
  }, [id, supabase]);

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    await supabase.from('journal_entries').delete().eq('id', id);
    router.push('/journal');
    router.refresh();
  }

  if (loading) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Loading..." />
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-6 border border-cream-dark animate-pulse">
            <div className="h-4 bg-cream-dark rounded w-3/4 mb-4" />
            <div className="h-3 bg-cream-dark rounded w-full mb-2" />
            <div className="h-3 bg-cream-dark rounded w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="animate-fade-in">
        <AppHeader title="Entry not found" />
        <Button variant="ghost" onClick={() => router.push('/journal')}>
          Back to journal
        </Button>
      </div>
    );
  }

  const entryTypeLabel: Record<string, string> = {
    free_write: 'Free write',
    prompted: 'Guided reflection',
    prayer: 'Prayer',
    gratitude: 'Gratitude',
  };

  return (
    <div className="animate-fade-in">
      <AppHeader
        title={entry.title || entryTypeLabel[entry.entry_type] || 'Journal entry'}
        subtitle={new Date(entry.created_at).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      />

      <div className="space-y-4">
        {entry.prompt_text && (
          <Card variant="soft" padding="sm">
            <p className="text-sm text-sage-dark italic">{entry.prompt_text}</p>
          </Card>
        )}

        <Card>
          <p className="text-sm text-charcoal leading-relaxed whitespace-pre-wrap">
            {entry.content}
          </p>
        </Card>

        {(entry.mood_tags.length > 0 || entry.topic_tags.length > 0) && (
          <div className="flex flex-wrap gap-1.5">
            {entry.mood_tags.map((tag) => (
              <span key={tag} className="text-xs bg-lavender-light text-charcoal-light px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
            {entry.topic_tags.map((tag) => (
              <span key={tag} className="text-xs bg-sky-light text-charcoal-light px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button variant="ghost" onClick={() => router.push('/journal')}>
            Back
          </Button>
          <Button variant="outline" onClick={handleDelete} className="text-red-400 border-red-200 hover:border-red-300 hover:text-red-500">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
