'use client';

import { useState, useRef } from 'react';

interface Slide {
  id: string;
  label: string;
  accentColor?: string;
  content: React.ReactNode;
}

interface ContentCarouselProps {
  slides: Slide[];
}

// Split long text into pages of roughly this many characters
const CHARS_PER_PAGE = 600;

function splitTextIntoPages(text: string): string[] {
  if (text.length <= CHARS_PER_PAGE) return [text];

  const pages: string[] = [];
  const paragraphs = text.split('\n\n');
  let currentPage = '';

  for (const para of paragraphs) {
    if (currentPage.length + para.length > CHARS_PER_PAGE && currentPage.length > 0) {
      pages.push(currentPage.trim());
      currentPage = para;
    } else {
      currentPage += (currentPage ? '\n\n' : '') + para;
    }
  }
  if (currentPage.trim()) pages.push(currentPage.trim());

  // If still too long (single paragraph), split by sentences
  return pages.flatMap(page => {
    if (page.length <= CHARS_PER_PAGE * 1.3) return [page];
    const sentences = page.split(/(?<=[.!?])\s+/);
    const subPages: string[] = [];
    let current = '';
    for (const s of sentences) {
      if (current.length + s.length > CHARS_PER_PAGE && current.length > 0) {
        subPages.push(current.trim());
        current = s;
      } else {
        current += (current ? ' ' : '') + s;
      }
    }
    if (current.trim()) subPages.push(current.trim());
    return subPages;
  });
}

export default function ContentCarousel({ slides }: ContentCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subPage, setSubPage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentSlide = slides[activeIndex];

  // Check if current slide content is a text node that needs splitting
  // We detect this by checking if the content is a <p> with long text
  const reflectionSlide = slides.find(s => s.id === 'reflection');
  let reflectionPages: string[] = [];
  let isReflectionPaginated = false;

  if (reflectionSlide && activeIndex === slides.findIndex(s => s.id === 'reflection')) {
    // Extract text from the reflection content if possible
    const textContent = extractTextFromReactNode(reflectionSlide.content);
    if (textContent && textContent.length > CHARS_PER_PAGE) {
      reflectionPages = splitTextIntoPages(textContent);
      isReflectionPaginated = reflectionPages.length > 1;
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) < threshold) return;

    if (diff > 0) {
      // Swipe left - next
      if (isReflectionPaginated && subPage < reflectionPages.length - 1) {
        setSubPage(subPage + 1);
      } else if (activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
        setSubPage(0);
      }
    } else {
      // Swipe right - prev
      if (isReflectionPaginated && subPage > 0) {
        setSubPage(subPage - 1);
      } else if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
        setSubPage(0);
      }
    }
  }

  function goToSlide(index: number) {
    setActiveIndex(index);
    setSubPage(0);
  }

  // Total page indicators including sub-pages
  const totalDots = slides.reduce((acc, s, i) => {
    if (s.id === 'reflection' && reflectionPages.length > 1) {
      return acc + reflectionPages.length;
    }
    return acc + 1;
  }, 0);

  // Current absolute position in dots
  let currentDotIndex = 0;
  for (let i = 0; i < activeIndex; i++) {
    if (slides[i].id === 'reflection' && reflectionPages.length > 1) {
      currentDotIndex += reflectionPages.length;
    } else {
      currentDotIndex += 1;
    }
  }
  if (isReflectionPaginated) {
    currentDotIndex += subPage;
  }

  // Next hint text
  let nextHint = '';
  if (isReflectionPaginated && subPage < reflectionPages.length - 1) {
    nextHint = `Continue reading (${subPage + 1}/${reflectionPages.length})`;
  } else if (activeIndex < slides.length - 1) {
    nextHint = `Swipe for ${slides[activeIndex + 1]?.label}`;
  }

  return (
    <div>
      {/* Tab pills */}
      <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-3 mb-1">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(i)}
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

      {/* Active slide - height adapts to content */}
      <div
        className="touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={`${activeIndex}-${subPage}`}
          className="animate-fade-in rounded-2xl bg-white/80 border border-lavender-light/50 shadow-[0_2px_16px_rgba(184,168,216,0.08)] p-5 sm:p-6"
        >
          {/* Accent bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className={`w-1 h-5 rounded-full ${currentSlide.accentColor || 'bg-sage'}`} />
              <p className="text-xs tracking-widest text-stone uppercase">
                {currentSlide.label}
                {isReflectionPaginated && ` (${subPage + 1}/${reflectionPages.length})`}
              </p>
            </div>
            {/* Page counter for multi-page slides */}
            {isReflectionPaginated && (
              <p className="text-[10px] text-stone-light">
                {subPage + 1} of {reflectionPages.length}
              </p>
            )}
          </div>

          {/* Content - show paginated reflection or normal content */}
          {isReflectionPaginated ? (
            <p className="text-[15px] text-charcoal leading-[1.8] whitespace-pre-line">
              {reflectionPages[subPage]}
            </p>
          ) : (
            currentSlide.content
          )}
        </div>
      </div>

      {/* Dot indicators + swipe hint */}
      <div className="flex flex-col items-center gap-1.5 mt-3">
        <div className="flex gap-1.5">
          {Array.from({ length: totalDots }).map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-full ${
                i === currentDotIndex
                  ? 'w-6 h-1.5 bg-sage'
                  : 'w-1.5 h-1.5 bg-stone-light/30'
              }`}
            />
          ))}
        </div>
        {nextHint && (
          <button
            onClick={() => {
              if (isReflectionPaginated && subPage < reflectionPages.length - 1) {
                setSubPage(subPage + 1);
              } else if (activeIndex < slides.length - 1) {
                goToSlide(activeIndex + 1);
              }
            }}
            className="flex items-center gap-1 text-[10px] text-stone-light hover:text-stone transition-colors"
          >
            {nextHint}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Helper to extract text content from a React node (for pagination check)
function extractTextFromReactNode(node: React.ReactNode): string | null {
  if (typeof node === 'string') return node;
  if (!node || typeof node !== 'object') return null;

  // Check if it's a React element with children
  const el = node as React.ReactElement<{ children?: React.ReactNode }>;
  if (el.props?.children) {
    if (typeof el.props.children === 'string') return el.props.children;
    if (Array.isArray(el.props.children)) {
      return el.props.children
        .map((c: React.ReactNode) => extractTextFromReactNode(c))
        .filter(Boolean)
        .join('');
    }
    return extractTextFromReactNode(el.props.children);
  }
  return null;
}
