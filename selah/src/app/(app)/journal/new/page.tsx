'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
import Input from '@/components/ui/Input';
import Tag from '@/components/ui/Tag';
import { MOOD_TAGS, TOPIC_TAGS } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import type { EntryType, JournalPrompt } from '@/types/database';

const PROMPTS_FALLBACK = [
  'What is God teaching you in this season?',
  'Write a letter to God about what you\'re carrying today.',
  'What are you grateful for, even in the hard things?',
  'Where have you seen God\'s faithfulness this week?',
  'What truth do you need to speak over yourself today?',
  'What fear do you need to surrender to God right now?',
  'How has God\'s grace surprised you recently?',
  'What does rest look like for your soul today?',
];

export default function NewJournalPage() {
  const [entryType, setEntryType] = useState<EntryType>('free_write');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [moodTags, setMoodTags] = useState<string[]>([]);
  const [topicTags, setTopicTags] = useState<string[]>([]);
  const [prompts, setPrompts] = useState<JournalPrompt[]>([]);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadPrompts() {
      const { data } = await supabase
        .from('journal_prompts')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');

      if (data && data.length > 0) {
        setPrompts(data);
      }
    }
    loadPrompts();
  }, [supabase]);

  const displayPrompts = prompts.length > 0
    ? prompts.map((p) => p.prompt_text)
    : PROMPTS_FALLBACK;

  function toggleTag(value: string, list: string[], setter: (v: string[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  async function handleSave() {
    if (!content.trim()) return;
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('journal_entries').insert({
      user_id: user.id,
      title: title || null,
      content,
      entry_type: entryType,
      prompt_text: selectedPrompt || null,
      mood_tags: moodTags,
      topic_tags: topicTags,
      is_saved_prayer: entryType === 'prayer',
    });

    // Update habit
    const today = new Date().toISOString().split('T')[0];
    await supabase.from('habits').upsert({
      user_id: user.id,
      habit_date: today,
      journaled: true,
    }, { onConflict: 'user_id,habit_date' });

    await trackEvent('journal_entry_created', { type: entryType });
    if (selectedPrompt) {
      await trackEvent('journal_prompt_used');
    }

    router.push('/journal');
    router.refresh();
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="New entry" />

      <div className="space-y-4">
        {/* Entry type selector */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {([
            { value: 'free_write', label: 'Free write' },
            { value: 'prompted', label: 'Guided' },
            { value: 'prayer', label: 'Prayer' },
            { value: 'gratitude', label: 'Gratitude' },
          ] as const).map((type) => (
            <Tag
              key={type.value}
              label={type.label}
              selected={entryType === type.value}
              onClick={() => setEntryType(type.value)}
              size="sm"
            />
          ))}
        </div>

        {/* Prompt selection - collapsible dropdown */}
        {entryType === 'prompted' && !selectedPrompt && (
          <Card variant="soft" padding="sm">
            <p className="text-xs font-medium text-charcoal-light mb-2">Choose a prompt to get started</p>
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) setSelectedPrompt(e.target.value);
              }}
              className="w-full text-sm text-charcoal bg-white border-2 border-cream-dark rounded-xl px-4 py-3 focus:outline-none focus:border-sage appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238B7E74' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="">Select a prompt...</option>
              {displayPrompts.map((prompt, i) => (
                <option key={i} value={prompt}>{prompt}</option>
              ))}
            </select>
          </Card>
        )}

        {selectedPrompt && entryType === 'prompted' && (
          <Card variant="soft" padding="sm">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm text-sage-dark italic flex-1">{selectedPrompt}</p>
              <button
                onClick={() => setSelectedPrompt('')}
                className="text-xs text-stone-light hover:text-stone flex-shrink-0 mt-0.5"
              >
                Change
              </button>
            </div>
          </Card>
        )}

        {/* Title */}
        <Input
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content */}
        <TextArea
          placeholder={
            entryType === 'prayer'
              ? 'Dear God...'
              : entryType === 'gratitude'
              ? 'I\'m grateful for...'
              : 'What\'s on your heart today?'
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="min-h-[200px]"
        />

        {/* Mood tags */}
        <div>
          <p className="text-xs font-medium text-charcoal-light mb-2">How are you feeling?</p>
          <div className="flex flex-wrap gap-1.5">
            {MOOD_TAGS.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                selected={moodTags.includes(tag)}
                onClick={() => toggleTag(tag, moodTags, setMoodTags)}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Topic tags */}
        <div>
          <p className="text-xs font-medium text-charcoal-light mb-2">Topics</p>
          <div className="flex flex-wrap gap-1.5">
            {TOPIC_TAGS.slice(0, 12).map((tag) => (
              <Tag
                key={tag}
                label={tag}
                selected={topicTags.includes(tag)}
                onClick={() => toggleTag(tag, topicTags, setTopicTags)}
                size="sm"
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="ghost" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            fullWidth
            loading={saving}
            disabled={!content.trim()}
          >
            Save entry
          </Button>
        </div>
      </div>
    </div>
  );
}
