'use client';

import { useState, useRef, useEffect } from 'react';

interface Slide {
  id: string;
  label: string;
  accentColor?: string;
  content: React.ReactNode;
}

interface ContentCarouselProps {
  slides: Slide[];
}

export default function ContentCarousel({ slides }: ContentCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Snap to slide on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    function handleScroll() {
      if (isScrollingRef.current) return;
      const scrollLeft = container!.scrollLeft;
      const slideWidth = container!.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < slides.length) {
        setActiveIndex(newIndex);
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex, slides.length]);

  function scrollToSlide(index: number) {
    if (!scrollRef.current) return;
    isScrollingRef.current = true;
    const slideWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
    setActiveIndex(index);
    setTimeout(() => { isScrollingRef.current = false; }, 500);
  }

  return (
    <div>
      {/* Tab pills */}
      <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-3 mb-1">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(i)}
            className={`flex-shrink-0 text-xs px-3.5 py-2 rounded-full border transition-all duration-200
              ${i === activeIndex
                ? 'bg-sage/10 border-sage text-sage-dark font-medium'
                : 'border-cream-dark text-stone-light hover:border-stone-light'
              }`}
          >
            {slide.label}
          </button>
        ))}
      </div>

      {/* Scrollable slides */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-5"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full px-5 snap-center"
          >
            <div className={`rounded-2xl bg-white border shadow-[0_1px_3px_rgba(139,126,116,0.04)] p-5 sm:p-6 ${
              i === activeIndex ? 'border-sage/20' : 'border-cream-dark/80'
            } transition-colors`}>
              {/* Accent bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-1 h-5 rounded-full ${slide.accentColor || 'bg-sage'}`} />
                <p className="text-xs tracking-widest text-stone uppercase">{slide.label}</p>
              </div>
              {slide.content}
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators + swipe hint */}
      <div className="flex flex-col items-center gap-1.5 mt-3">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? 'w-6 h-1.5 bg-sage'
                  : 'w-1.5 h-1.5 bg-stone-light/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {activeIndex < slides.length - 1 && (
          <button
            onClick={() => scrollToSlide(activeIndex + 1)}
            className="flex items-center gap-1 text-[10px] text-stone-light hover:text-stone transition-colors"
          >
            Swipe for {slides[activeIndex + 1]?.label}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}
