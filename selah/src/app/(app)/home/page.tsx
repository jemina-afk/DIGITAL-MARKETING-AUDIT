'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import AudioPlayer from '@/components/ui/AudioPlayer';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
import Disclaimer from '@/components/ui/Disclaimer';
import { FEELING_TAGS, NEED_TAGS } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import type { Profile, DailyResponse } from '@/types/database';

type Step = 'checkin' | 'loading' | 'response';

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [step, setStep] = useState<Step>('checkin');
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [freeText, setFreeText] = useState('');
  const [response, setResponse] = useState<DailyResponse | null>(null);
  const [loading, setLoading] = useState(false);
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

      // Check if already checked in today
      const today = new Date().toISOString().split('T')[0];
      const { data: existingResponse } = await supabase
        .from('daily_responses')
        .select('*')
        .eq('user_id', user.id)
        .eq('response_date', today)
        .single();

      if (existingResponse) {
        setResponse(existingResponse);
        setStep('response');
      }

      await trackEvent('app_opened');
    }
    load();
  }, [supabase]);

  function toggleTag(value: string, list: string[], setter: (v: string[]) => void) {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  async function handleCheckin() {
    if (selectedFeelings.length === 0) return;
    setLoading(true);
    setStep('loading');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];

    // Save check-in
    const { data: checkin } = await supabase
      .from('daily_checkins')
      .upsert({
        user_id: user.id,
        feeling_tags: selectedFeelings,
        need_tags: selectedNeeds,
        free_text: freeText || null,
        checked_in_at: today,
      }, { onConflict: 'user_id,checked_in_at' })
      .select()
      .single();

    await trackEvent('checkin_completed', {
      feelings: selectedFeelings,
      needs: selectedNeeds,
    });

    // Generate response via API
    const res = await fetch('/api/daily-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        feelings: selectedFeelings,
        needs: selectedNeeds,
        freeText,
        profile: {
          firstName: profile?.first_name,
          struggle: profile?.top_struggle,
          season: profile?.season_of_life,
          length: profile?.devotional_length,
          format: profile?.preferred_format,
        },
        checkinId: checkin?.id,
      }),
    });

    const responseData = await res.json();
    setResponse(responseData);
    setStep('response');
    setLoading(false);

    // Update habit
    await supabase.from('habits').upsert({
      user_id: user.id,
      habit_date: today,
      read_scripture: true,
      prayed: true,
    }, { onConflict: 'user_id,habit_date' });
  }

  const greeting = profile?.first_name
    ? `Good ${getTimeOfDay()}, ${profile.first_name}`
    : `Good ${getTimeOfDay()}`;

  if (step === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <div className="w-12 h-12 rounded-full border-2 border-sage border-t-transparent animate-spin mb-6" />
        <p className="text-stone text-sm">Preparing something just for you...</p>
      </div>
    );
  }

  if (step === 'response' && response) {
    return (
      <div className="animate-slide-up">
        <AppHeader greeting={greeting} title="Your word for today" />

        <div className="space-y-4">
          {/* Audio player — shown for listen/both preference */}
          {(profile?.preferred_format === 'listen' || profile?.preferred_format === 'both') && (
            <AudioPlayer
              reflection={response.reflection}
              verse={response.bible_verse}
              verseReference={response.bible_reference}
              prayer={response.prayer}
            />
          )}

          {/* Reflection */}
          <Card variant="elevated">
            <p className="text-sm text-charcoal leading-relaxed whitespace-pre-line">
              {response.reflection}
            </p>
          </Card>

          {/* Scripture */}
          <Card variant="soft">
            <blockquote className="text-center">
              <p className="text-charcoal italic leading-relaxed mb-3">
                &ldquo;{response.bible_verse}&rdquo;
              </p>
              <cite className="text-sm text-sage-dark not-italic font-medium">
                {response.bible_reference}
              </cite>
            </blockquote>
          </Card>

          {/* Prayer */}
          <Card>
            <h3 className="text-sm font-medium text-sage-dark mb-2">A prayer for you</h3>
            <p className="text-sm text-charcoal-light leading-relaxed italic">
              {response.prayer}
            </p>
          </Card>

          {/* Faith action */}
          <Card className="border-sage/20 bg-sage/5">
            <h3 className="text-sm font-medium text-sage-dark mb-2">Your step today</h3>
            <p className="text-sm text-charcoal leading-relaxed">
              {response.faith_action}
            </p>
          </Card>

          <Disclaimer className="mt-6 text-center" />

          <Button
            variant="ghost"
            fullWidth
            onClick={() => {
              setStep('checkin');
              setSelectedFeelings([]);
              setSelectedNeeds([]);
              setFreeText('');
              setResponse(null);
            }}
            className="mt-2"
          >
            Start fresh check-in
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader greeting={greeting} title="How are you today?" />

      <div className="space-y-6">
        {/* Feelings */}
        <Card>
          <h3 className="text-sm font-medium text-charcoal mb-3">
            I&apos;m feeling...
          </h3>
          <div className="flex flex-wrap gap-2">
            {FEELING_TAGS.map((tag) => (
              <Tag
                key={tag.value}
                label={tag.label}
                emoji={tag.emoji}
                selected={selectedFeelings.includes(tag.value)}
                onClick={() => toggleTag(tag.value, selectedFeelings, setSelectedFeelings)}
                size="sm"
              />
            ))}
          </div>
        </Card>

        {/* Needs */}
        <Card>
          <h3 className="text-sm font-medium text-charcoal mb-3">
            What I need from God today...
          </h3>
          <div className="flex flex-wrap gap-2">
            {NEED_TAGS.map((tag) => (
              <Tag
                key={tag.value}
                label={tag.label}
                emoji={tag.emoji}
                selected={selectedNeeds.includes(tag.value)}
                onClick={() => toggleTag(tag.value, selectedNeeds, setSelectedNeeds)}
                size="sm"
              />
            ))}
          </div>
        </Card>

        {/* Free text */}
        <Card>
          <TextArea
            label="Anything else on your heart? (optional)"
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder="Share whatever is on your mind..."
            rows={3}
          />
        </Card>

        <Button
          onClick={handleCheckin}
          fullWidth
          size="lg"
          loading={loading}
          disabled={selectedFeelings.length === 0}
        >
          Receive my word for today
        </Button>
      </div>
    </div>
  );
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}
