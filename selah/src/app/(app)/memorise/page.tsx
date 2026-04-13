'use client';

import PremiumGate from '@/components/ui/PremiumGate';

import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const MEMORY_VERSES = [
  { text: 'Cast all your anxiety on him because he cares for you.', ref: '1 Peter 5:7', difficulty: 'easy' },
  { text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', ref: 'Psalm 139:14', difficulty: 'medium' },
  { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', ref: 'Proverbs 3:5-6', difficulty: 'medium' },
  { text: 'Be still, and know that I am God.', ref: 'Psalm 46:10', difficulty: 'easy' },
  { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', ref: 'Psalm 34:18', difficulty: 'easy' },
  { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', ref: 'Jeremiah 29:11', difficulty: 'medium' },
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6', difficulty: 'hard' },
  { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.', ref: 'Lamentations 3:22-23', difficulty: 'medium' },
];

function hideWords(text: string, hidePercent: number): { display: string; blanks: number } {
  const words = text.split(' ');
  const totalToHide = Math.floor(words.length * hidePercent);
  const indices = new Set<number>();
  while (indices.size < totalToHide) {
    indices.add(Math.floor(Math.random() * words.length));
  }
  const display = words.map((w, i) => indices.has(i) ? '_'.repeat(Math.max(w.replace(/[.,;!?]/g, '').length, 3)) : w).join(' ');
  return { display, blanks: totalToHide };
}

export default function MemoriseWrapper() {
  return (
    <PremiumGate feature="Scripture Memory" description="Learn verses by heart with our progressive memory system. Read, fill gaps, then recite from memory.">
      <MemoriseContent />
    </PremiumGate>
  );
}

function MemoriseContent() {
  const [selectedVerse, setSelectedVerse] = useState<typeof MEMORY_VERSES[0] | null>(null);
  const [level, setLevel] = useState(0); // 0=full, 1=25%, 2=50%, 3=75%, 4=test
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  const levels = [
    { label: 'Read it', hidePercent: 0, desc: 'Read the full verse slowly' },
    { label: 'Fill gaps', hidePercent: 0.25, desc: '25% of words hidden' },
    { label: 'Half hidden', hidePercent: 0.5, desc: '50% of words hidden' },
    { label: 'Almost there', hidePercent: 0.75, desc: '75% of words hidden' },
    { label: 'From memory', hidePercent: 1, desc: 'Type the whole verse' },
  ];

  function checkAnswer() {
    if (!selectedVerse) return;
    const clean = (s: string) => s.toLowerCase().replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim();
    const similarity = clean(userInput) === clean(selectedVerse.text) ? 1 :
      clean(userInput).length > clean(selectedVerse.text).length * 0.8 ? 0.8 : 0;
    setResult(similarity >= 0.8 ? 'correct' : 'wrong');
  }

  if (selectedVerse) {
    const currentLevel = levels[level];
    const hidden = hideWords(selectedVerse.text, currentLevel.hidePercent);

    return (
      <div className="animate-fade-in">
        <AppHeader title="Memorise" subtitle={selectedVerse.ref} />

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {levels.map((l, i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i <= level ? 'bg-sage' : 'bg-cream-dark'}`} />
          ))}
        </div>

        <div className="space-y-4">
          <Card variant="elevated" padding="lg">
            <p className="text-xs text-stone-light mb-1">{currentLevel.desc}</p>
            <h3 className="text-sm font-medium text-charcoal mb-4">Level {level + 1}: {currentLevel.label}</h3>

            {level < 4 ? (
              <p className="text-lg text-charcoal leading-[1.8] font-serif">
                {currentLevel.hidePercent === 0 ? selectedVerse.text : hidden.display}
              </p>
            ) : (
              <div>
                <textarea
                  value={userInput}
                  onChange={(e) => { setUserInput(e.target.value); setResult(null); }}
                  placeholder="Type the verse from memory..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark bg-white text-charcoal text-sm resize-none focus:outline-none focus:border-sage"
                />
                {result === 'correct' && (
                  <p className="text-sm text-sage mt-2 font-medium">You got it! This verse is in your heart now.</p>
                )}
                {result === 'wrong' && (
                  <div className="mt-2">
                    <p className="text-sm text-blush-dark mb-2">Not quite. Here is the verse:</p>
                    <p className="text-sm text-charcoal-light italic">{selectedVerse.text}</p>
                  </div>
                )}
              </div>
            )}

            <p className="text-sm text-sage-dark mt-4 font-medium">{selectedVerse.ref}</p>
          </Card>

          <div className="flex gap-3">
            {level > 0 && (
              <Button variant="ghost" onClick={() => { setLevel(level - 1); setResult(null); setUserInput(''); }}>
                Back
              </Button>
            )}
            {level < 4 ? (
              <Button fullWidth onClick={() => setLevel(level + 1)}>
                Next level
              </Button>
            ) : !result ? (
              <Button fullWidth onClick={checkAnswer}>
                Check my answer
              </Button>
            ) : (
              <Button fullWidth onClick={() => { setSelectedVerse(null); setLevel(0); setUserInput(''); setResult(null); }}>
                Choose another verse
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="Memorise" subtitle="Hide God's word in your heart" />

      <p className="text-xs text-stone-light mb-4">Choose a verse. We will help you learn it step by step - from reading to reciting from memory.</p>

      <div className="space-y-3">
        {MEMORY_VERSES.map((verse) => (
          <button key={verse.ref} onClick={() => setSelectedVerse(verse)} className="w-full text-left">
            <Card className="hover:border-sage/30 transition-colors cursor-pointer">
              <p className="text-sm text-charcoal italic leading-relaxed mb-2">&ldquo;{verse.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-sage-dark font-medium">{verse.ref}</p>
                <span className="text-[10px] text-stone-light bg-cream-dark px-2 py-0.5 rounded-full">{verse.difficulty}</span>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
