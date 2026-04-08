'use client';

import { useRef, useState } from 'react';

interface ShareCardProps {
  verse: string;
  reference: string;
  reflection?: string;
}

const CARD_STYLES = [
  { bg: 'from-sage/20 via-cream to-sage/10', text: 'text-charcoal', accent: 'text-sage-dark' },
  { bg: 'from-lavender/20 via-cream to-blush/10', text: 'text-charcoal', accent: 'text-lavender' },
  { bg: 'from-charcoal via-charcoal-light to-charcoal', text: 'text-cream', accent: 'text-sage-light' },
  { bg: 'from-blush/20 via-cream to-warm/10', text: 'text-charcoal', accent: 'text-blush-dark' },
  { bg: 'from-sky/20 via-cream to-sage/10', text: 'text-charcoal', accent: 'text-sky' },
];

export default function ShareCard({ verse, reference, reflection }: ShareCardProps) {
  const [styleIndex, setStyleIndex] = useState(0);
  const [shared, setShared] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const style = CARD_STYLES[styleIndex];

  function cycleStyle() {
    setStyleIndex((prev) => (prev + 1) % CARD_STYLES.length);
  }

  async function handleShare() {
    const shareText = `"${verse}"\n— ${reference}\n\nvia Selah`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }

  return (
    <div className="space-y-3">
      {/* The card */}
      <div
        ref={cardRef}
        onClick={cycleStyle}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${style.bg} p-8 cursor-pointer transition-all duration-500`}
      >
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-5xl opacity-10 font-serif">&ldquo;</div>
        <div className="absolute bottom-4 right-4 text-5xl opacity-10 font-serif">&rdquo;</div>

        <div className="relative text-center py-4">
          <p className={`${style.text} italic leading-[1.8] text-[15px] mb-4`}>
            {verse}
          </p>
          <p className={`${style.accent} text-sm font-medium tracking-wide`}>
            — {reference}
          </p>
          <p className={`${style.text} opacity-30 text-[10px] mt-6 tracking-widest uppercase`}>
            Selah
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={cycleStyle}
          className="flex-1 text-xs text-stone-light py-2.5 px-4 rounded-xl border border-cream-dark hover:border-stone-light transition-colors"
        >
          Change style
        </button>
        <button
          onClick={handleShare}
          className="flex-1 text-xs text-white bg-sage py-2.5 px-4 rounded-xl hover:bg-sage-dark transition-colors"
        >
          {shared ? 'Copied!' : 'Share verse'}
        </button>
      </div>
    </div>
  );
}
