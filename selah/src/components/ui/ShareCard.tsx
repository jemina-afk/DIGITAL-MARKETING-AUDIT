'use client';

import { useState } from 'react';

interface ShareCardProps {
  verse: string;
  reference: string;
}

const CARD_STYLES = [
  {
    bg: 'bg-gradient-to-br from-sage/15 via-cream to-lavender/10',
    border: 'border-sage/15',
    text: 'text-charcoal',
    accent: 'text-sage-dark',
    quoteMark: 'text-sage/15',
    brand: 'text-sage/25',
  },
  {
    bg: 'bg-gradient-to-br from-lavender/15 via-cream to-blush/10',
    border: 'border-lavender/15',
    text: 'text-charcoal',
    accent: 'text-lavender',
    quoteMark: 'text-lavender/15',
    brand: 'text-lavender/25',
  },
  {
    bg: 'bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal',
    border: 'border-charcoal',
    text: 'text-cream',
    accent: 'text-sage-light',
    quoteMark: 'text-white/8',
    brand: 'text-white/15',
  },
  {
    bg: 'bg-gradient-to-br from-blush/15 via-cream to-warm/10',
    border: 'border-blush/15',
    text: 'text-charcoal',
    accent: 'text-blush-dark',
    quoteMark: 'text-blush/15',
    brand: 'text-blush/25',
  },
  {
    bg: 'bg-gradient-to-br from-sky/15 via-cream to-sage/10',
    border: 'border-sky/15',
    text: 'text-charcoal',
    accent: 'text-sky',
    quoteMark: 'text-sky/15',
    brand: 'text-sky/25',
  },
];

export default function ShareCard({ verse, reference }: ShareCardProps) {
  const [styleIndex, setStyleIndex] = useState(0);
  const [shared, setShared] = useState(false);
  const [tapped, setTapped] = useState(false);
  const style = CARD_STYLES[styleIndex];

  function cycleStyle() {
    setStyleIndex((prev) => (prev + 1) % CARD_STYLES.length);
    setTapped(true);
    setTimeout(() => setTapped(false), 200);
  }

  async function handleShare() {
    const shareText = `"${verse}"\n— ${reference}\n\nvia Selah`;
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        setShared(true);
      } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(shareText);
      setShared(true);
    }
    setTimeout(() => setShared(false), 2500);
  }

  return (
    <div className="space-y-2.5">
      {/* The card */}
      <div
        onClick={cycleStyle}
        className={`relative overflow-hidden rounded-2xl ${style.bg} border ${style.border} p-8 pb-6 cursor-pointer transition-all duration-500 ${tapped ? 'scale-[0.98]' : ''}`}
      >
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />

        {/* Quote marks */}
        <div className={`absolute top-3 left-5 text-7xl ${style.quoteMark} font-serif leading-none select-none`}>&ldquo;</div>
        <div className={`absolute bottom-8 right-5 text-7xl ${style.quoteMark} font-serif leading-none select-none`}>&rdquo;</div>

        {/* Content */}
        <div className="relative text-center px-2 pt-6 pb-2">
          <p className={`${style.text} italic leading-[1.9] text-[15px] mb-5`}>
            {verse}
          </p>
          <p className={`${style.accent} text-sm font-medium tracking-wide`}>
            — {reference}
          </p>
        </div>

        {/* Selah branding */}
        <p className={`${style.brand} text-[9px] text-center mt-4 tracking-[0.25em] uppercase select-none`}>
          Selah
        </p>
      </div>

      {/* Actions — minimal, elegant */}
      <div className="flex items-center justify-between px-1">
        <button
          onClick={cycleStyle}
          className="flex items-center gap-1.5 text-xs text-stone-light hover:text-stone transition-colors py-1"
        >
          <span className="flex gap-0.5">
            {CARD_STYLES.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === styleIndex ? 'bg-sage scale-125' : 'bg-stone-light/40'}`}
              />
            ))}
          </span>
          <span className="ml-1">Tap card to style</span>
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-xs font-medium text-sage hover:text-sage-dark transition-colors py-1"
        >
          {shared ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              Share
            </>
          )}
        </button>
      </div>
    </div>
  );
}
