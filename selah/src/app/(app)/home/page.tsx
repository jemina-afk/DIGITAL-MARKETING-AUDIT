'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import AppHeader from '@/components/layout/AppHeader';
import AudioPlayer from '@/components/ui/AudioPlayer';
import ShareCard from '@/components/ui/ShareCard';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import MoodCard from '@/components/ui/MoodCard';
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
import Disclaimer from '@/components/ui/Disclaimer';
import { FEELING_TAGS, NEED_TAGS } from '@/lib/constants';
import { trackEvent } from '@/lib/analytics';
import type { Profile, DailyResponse } from '@/types/database';

type Step = 'checkin' | 'feelings' | 'needs' | 'heart' | 'loading' | 'response';

const SEASON_GREETINGS: Record<string, string> = {
  student: 'Between classes and deadlines, God has a word for you.',
  early_career: 'Before the day pulls you in every direction - pause here.',
  new_relationship: 'In this exciting, uncertain season of love - He is steady.',
  engaged: 'As you prepare for a new chapter, He prepares your heart.',
  newly_married: 'In the beautiful adjustment of building a life together.',
  new_mom: 'In these tender, exhausting, miraculous days - you are not alone.',
  single_season: 'In this season of learning who you are apart from anyone else.',
  career_transition: 'Between what was and what\'s next, He holds both.',
  healing: 'Healing isn\'t linear, but God meets you at every turn.',
  searching: 'Even in the searching, you are already found.',
};

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [step, setStep] = useState<Step>('checkin');
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [freeText, setFreeText] = useState('');
  const [response, setResponse] = useState<DailyResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
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

    // Animated loading messages
    const messages = [
      'Opening God\'s word for you...',
      'Finding a verse that speaks to your heart...',
      'Preparing a reflection just for you...',
      'Writing a prayer with your name on it...',
    ];
    let i = 0;
    setLoadingMessage(messages[0]);
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setLoadingMessage(messages[i]);
    }, 2000);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { clearInterval(interval); return; }

    const today = new Date().toISOString().split('T')[0];

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
      hasFreeText: !!freeText,
    });

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

    clearInterval(interval);
    const responseData = await res.json();
    setResponse(responseData);
    setStep('response');
    setLoading(false);

    await supabase.from('habits').upsert({
      user_id: user.id,
      habit_date: today,
      read_scripture: true,
      prayed: true,
    }, { onConflict: 'user_id,habit_date' });
  }

  const firstName = profile?.first_name || 'friend';
  const greeting = `Good ${getTimeOfDay()}, ${firstName}`;
  const seasonNote = profile?.season_of_life
    ? SEASON_GREETINGS[profile.season_of_life]
    : undefined;

  // ===== LOADING STATE =====
  if (step === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-in px-8">
        {/* Animated breathing circle */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-sage/10 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-sage border-t-transparent animate-spin" />
          </div>
        </div>
        <p className="text-charcoal text-center text-sm font-medium animate-fade-in" key={loadingMessage}>
          {loadingMessage}
        </p>
        <p className="text-stone-light text-xs mt-2">This is just for you, {firstName}.</p>
      </div>
    );
  }

  // ===== RESPONSE STATE =====
  if (step === 'response' && response) {
    return (
      <div className="animate-slide-up">
        {/* Premium header card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/10 via-cream to-lavender/10 p-6 mb-6 border border-sage/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-lavender/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <p className="text-xs tracking-widest text-sage uppercase mb-2">Your word for today</p>
            <h1 className="text-2xl text-charcoal leading-tight">{greeting}</h1>
            {seasonNote && (
              <p className="text-sm text-stone mt-2 italic">{seasonNote}</p>
            )}
          </div>
        </div>

        <div className="space-y-5">
          {/* Audio player */}
          {(profile?.preferred_format === 'listen' || profile?.preferred_format === 'both') && (
            <AudioPlayer
              reflection={response.reflection}
              verse={response.bible_verse}
              verseReference={response.bible_reference}
              prayer={response.prayer}
            />
          )}

          {/* Reflection - premium card */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-sage rounded-full" />
              <h3 className="text-xs tracking-widest text-sage uppercase">Reflection</h3>
            </div>
            <p className="text-[15px] text-charcoal leading-[1.8] whitespace-pre-line">
              {response.reflection}
            </p>
          </Card>

          {/* Scripture - shareable for premium, beautiful display for free */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-warm rounded-full" />
                <h3 className="text-xs tracking-widest text-stone uppercase">Scripture</h3>
              </div>
            </div>
            {profile?.subscription_tier === 'premium' ? (
              <ShareCard
                verse={response.bible_verse}
                reference={response.bible_reference}
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/15 via-cream to-lavender/10 border border-sage/15 p-8 pb-6">
                <div className="absolute top-3 left-5 text-7xl text-sage/15 font-serif leading-none select-none">&ldquo;</div>
                <div className="relative text-center pt-6 pb-2">
                  <p className="text-charcoal italic leading-[1.9] text-[15px] mb-5">
                    {response.bible_verse}
                  </p>
                  <p className="text-sm text-sage-dark font-medium tracking-wide">
                    - {response.bible_reference}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sage/10 text-center">
                  <a href="/subscribe" className="text-xs text-sage hover:text-sage-dark transition-colors">
                    Share beautiful verse cards with Premium
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Prayer - warm card */}
          <Card padding="lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-blush rounded-full" />
              <h3 className="text-xs tracking-widest text-blush-dark uppercase">A prayer for you</h3>
            </div>
            <p className="text-[15px] text-charcoal-light leading-[1.8] italic">
              {response.prayer}
            </p>
          </Card>

          {/* Faith action - standout card */}
          <div className="rounded-2xl bg-sage/5 border border-sage/15 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xs tracking-widest text-sage-dark uppercase">Your step today</h3>
            </div>
            <p className="text-[15px] text-charcoal leading-[1.7]">
              {response.faith_action}
            </p>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-3">
            <a href="/journal/new" className="rounded-xl bg-lavender/5 border border-lavender/15 p-4 text-center hover:border-lavender/30 transition-colors">
              <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-lavender/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-lavender" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" /><path d="M8 7h8M8 11h5" />
                </svg>
              </div>
              <p className="text-xs font-medium text-charcoal">Journal this</p>
            </a>
            <a href="/evening" className="rounded-xl bg-charcoal/5 border border-charcoal/10 p-4 text-center hover:border-charcoal/20 transition-colors">
              <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-charcoal/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-charcoal-light" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
              <p className="text-xs font-medium text-charcoal">Evening prayer</p>
            </a>
          </div>

          {/* Evening prayer teaser - shows after 6pm for all users */}
          {new Date().getHours() >= 18 && profile?.subscription_tier !== 'premium' && (
            <a href="/subscribe" className="block">
              <div className="rounded-2xl bg-gradient-to-r from-charcoal to-charcoal-light p-5 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cream/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                </div>
                <p className="text-sm text-cream font-medium mb-1">Wind down with God tonight</p>
                <p className="text-xs text-cream/50">Guided evening prayers - part of Premium</p>
              </div>
            </a>
          )}

          {/* Suggested pathway based on struggle */}
          {profile?.top_struggle && (
            <div className="rounded-2xl bg-lavender/5 border border-lavender/15 p-5">
              <p className="text-xs text-stone mb-2">Recommended for you</p>
              <a href="/pathways" className="text-sm text-charcoal font-medium hover:text-sage transition-colors">
                Explore pathways for {formatStruggle(profile.top_struggle)} &rarr;
              </a>
            </div>
          )}

          <Disclaimer className="mt-4 text-center" />

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

  // ===== CHECK-IN STATE (multi-step) =====
  return (
    <div className="animate-fade-in">
      {/* Greeting header */}
      <div className="pt-6 pb-2 px-1">
        <p className="text-sm text-stone mb-1">{greeting}</p>
        <h1 className="text-2xl text-charcoal">How are you today?</h1>
        {seasonNote && (
          <p className="text-xs text-stone-light mt-2 italic">{seasonNote}</p>
        )}
      </div>

      <div className="space-y-6 mt-4">
        {/* Step 1: Feelings - gradient mood cards */}
        <div className="animate-fade-in">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-medium text-sage">1</span>
              <h3 className="text-sm font-medium text-charcoal">Your mood</h3>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {FEELING_TAGS.map((tag) => (
                <MoodCard
                  key={tag.value}
                  label={tag.label}
                  value={tag.value}
                  selected={selectedFeelings.includes(tag.value)}
                  onClick={() => toggleTag(tag.value, selectedFeelings, setSelectedFeelings)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Needs - slides in after feelings selected */}
        {selectedFeelings.length > 0 && (
          <div className="animate-slide-up">
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-medium text-sage">2</span>
                <h3 className="text-sm font-medium text-charcoal">What I need from God today...</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {NEED_TAGS.map((tag) => (
                  <Tag
                    key={tag.value}
                    label={tag.label}
                    selected={selectedNeeds.includes(tag.value)}
                    onClick={() => toggleTag(tag.value, selectedNeeds, setSelectedNeeds)}
                    size="sm"
                  />
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Step 3: Free text - slides in after needs selected */}
        {selectedNeeds.length > 0 && (
          <div className="animate-slide-up">
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-medium text-sage">3</span>
                <h3 className="text-sm font-medium text-charcoal">What&apos;s on your heart?</h3>
              </div>
              <TextArea
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                placeholder={getFreeTextPlaceholder(profile?.season_of_life, profile?.top_struggle)}
                rows={4}
              />
              <p className="text-xs text-stone-light mt-2">
                Share as much or as little as you want. Your words help us personalise your devotional.
              </p>
            </Card>
          </div>
        )}

        {/* Submit button */}
        {selectedFeelings.length > 0 && (
          <div className="animate-slide-up">
            <Button
              onClick={handleCheckin}
              fullWidth
              size="lg"
              loading={loading}
            >
              {freeText
                ? 'Receive my personalised word'
                : 'Receive my word for today'}
            </Button>
          </div>
        )}
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

function formatStruggle(struggle: string): string {
  const map: Record<string, string> = {
    anxiety: 'anxiety & peace',
    identity: 'identity in Christ',
    waiting: 'waiting well',
    heartbreak: 'healing & heartbreak',
    confidence: 'confidence & self-worth',
    discipline: 'discipline with grace',
    calling: 'career & calling',
    loneliness: 'connection & community',
    comparison: 'identity & self-worth',
    burnout: 'rest & renewal',
  };
  return map[struggle] || struggle.replace('_', ' ');
}

function getFreeTextPlaceholder(season?: string | null, struggle?: string | null): string {
  if (season === 'new_mom') return 'The baby kept me up all night... I\'m struggling with... I need God to...';
  if (season === 'student') return 'Exams are stressing me out... I\'m worried about... I wish God would...';
  if (season === 'single_season') return 'I\'m feeling lonely because... I wish... I need God to remind me...';
  if (season === 'career_transition') return 'I don\'t know what\'s next... I\'m afraid of... I need clarity on...';
  if (season === 'healing') return 'Today was hard because... I\'m processing... I need God to...';
  if (struggle === 'heartbreak') return 'My heart is heavy because... I\'m struggling to let go of...';
  if (struggle === 'anxiety') return 'I can\'t stop worrying about... My mind keeps going to...';
  if (struggle === 'identity') return 'I\'ve been feeling like I\'m not enough because...';
  return 'I\'ve been thinking about... I need God to... What\'s weighing on me is...';
}
