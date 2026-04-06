'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Tag from '@/components/ui/Tag';
import ProgressBar from '@/components/ui/ProgressBar';
import { trackEvent } from '@/lib/analytics';
import {
  AGE_RANGES,
  SEASON_OPTIONS,
  STRUGGLE_OPTIONS,
} from '@/lib/constants';
import type { AgeRange, SeasonOfLife, Struggle, DevotionalLength, PreferredFormat } from '@/types/database';

const TOTAL_STEPS = 6;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [ageRange, setAgeRange] = useState<AgeRange | ''>('');
  const [season, setSeason] = useState<SeasonOfLife | ''>('');
  const [struggle, setStruggle] = useState<Struggle | ''>('');
  const [devotionalLength, setDevotionalLength] = useState<DevotionalLength>('medium');
  const [preferredFormat, setPreferredFormat] = useState<PreferredFormat>('read');
  const [prayerGoals, setPrayerGoals] = useState<string[]>([]);
  const [denomination, setDenomination] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const prayerGoalOptions = [
    'Pray daily', 'Pray with scripture', 'Pray for others',
    'Listen to God', 'Pray through anxiety', 'Develop a prayer habit',
  ];

  async function handleComplete() {
    setLoading(true);
    await trackEvent('onboarding_started');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('profiles').upsert({
      id: user.id,
      first_name: firstName,
      age_range: ageRange || null,
      season_of_life: season || null,
      top_struggle: struggle || null,
      devotional_length: devotionalLength,
      preferred_format: preferredFormat,
      prayer_goals: prayerGoals,
      denomination: denomination || null,
      onboarding_completed: true,
    });

    await trackEvent('onboarding_completed');
    router.push('/home');
    router.refresh();
  }

  function next() {
    if (step < TOTAL_STEPS) setStep(step + 1);
  }
  function back() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center px-6 py-8">
      <div className="w-full max-w-sm">
        <ProgressBar value={step} max={TOTAL_STEPS} className="mb-8" />

        <div className="animate-fade-in" key={step}>
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Welcome to Selah</h2>
                <p className="text-sm text-stone-light">
                  Let&apos;s personalise your experience. What should we call you?
                </p>
              </div>
              <Input
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
              />
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-3">Your age range</p>
                <div className="flex flex-wrap gap-2">
                  {AGE_RANGES.map((range) => (
                    <Tag
                      key={range}
                      label={range}
                      selected={ageRange === range}
                      onClick={() => setAgeRange(range)}
                      size="sm"
                    />
                  ))}
                </div>
              </div>
              <Button onClick={next} fullWidth disabled={!firstName}>
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Your season</h2>
                <p className="text-sm text-stone-light">
                  What season of life are you in right now?
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {SEASON_OPTIONS.map((opt) => (
                  <Tag
                    key={opt.value}
                    label={opt.label}
                    selected={season === opt.value}
                    onClick={() => setSeason(opt.value as SeasonOfLife)}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={back}>Back</Button>
                <Button onClick={next} fullWidth disabled={!season}>Continue</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Your biggest challenge</h2>
                <p className="text-sm text-stone-light">
                  What feels most pressing in your heart right now?
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {STRUGGLE_OPTIONS.map((opt) => (
                  <Tag
                    key={opt.value}
                    label={opt.label}
                    selected={struggle === opt.value}
                    onClick={() => setStruggle(opt.value as Struggle)}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={back}>Back</Button>
                <Button onClick={next} fullWidth disabled={!struggle}>Continue</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Your preferences</h2>
                <p className="text-sm text-stone-light">
                  How long do you want your daily devotional to be?
                </p>
              </div>
              <div className="space-y-3">
                {([
                  { value: 'short', label: '2-3 minutes', desc: 'Quick and focused' },
                  { value: 'medium', label: '5-7 minutes', desc: 'A gentle pause' },
                  { value: 'long', label: '10-15 minutes', desc: 'A deeper dive' },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDevotionalLength(opt.value)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all
                      ${devotionalLength === opt.value
                        ? 'border-sage bg-sage/5'
                        : 'border-cream-dark bg-white hover:border-stone-light'
                      }`}
                  >
                    <p className="text-sm font-medium text-charcoal">{opt.label}</p>
                    <p className="text-xs text-stone-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal-light mb-3">Format preference</p>
                <div className="flex gap-2">
                  {([
                    { value: 'read', label: 'Read' },
                    { value: 'listen', label: 'Listen' },
                    { value: 'both', label: 'Both' },
                  ] as const).map((opt) => (
                    <Tag
                      key={opt.value}
                      label={opt.label}
                      selected={preferredFormat === opt.value}
                      onClick={() => setPreferredFormat(opt.value)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={back}>Back</Button>
                <Button onClick={next} fullWidth>Continue</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Prayer goals</h2>
                <p className="text-sm text-stone-light">
                  What would you like to grow in? Select all that apply.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {prayerGoalOptions.map((goal) => (
                  <Tag
                    key={goal}
                    label={goal}
                    selected={prayerGoals.includes(goal)}
                    onClick={() =>
                      setPrayerGoals((prev) =>
                        prev.includes(goal)
                          ? prev.filter((g) => g !== goal)
                          : [...prev, goal]
                      )
                    }
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={back}>Back</Button>
                <Button onClick={next} fullWidth>Continue</Button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-charcoal mb-2">Almost there</h2>
                <p className="text-sm text-stone-light">
                  One last thing — is there a church tradition you identify with? (Optional)
                </p>
              </div>
              <Input
                label="Denomination or tradition"
                value={denomination}
                onChange={(e) => setDenomination(e.target.value)}
                placeholder="e.g. Non-denominational, Baptist, Catholic..."
              />
              <div className="bg-cream-dark/50 rounded-xl p-4 text-xs text-stone leading-relaxed">
                Selah provides devotional content rooted in broadly orthodox Christian scripture.
                We respect all traditions and aim to bless, not divide.
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={back}>Back</Button>
                <Button onClick={handleComplete} fullWidth loading={loading}>
                  Start my journey
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
