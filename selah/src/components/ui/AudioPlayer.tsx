'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface AudioPlayerProps {
  reflection: string;
  verse: string;
  verseReference: string;
  prayer: string;
}

export default function AudioPlayer({ reflection, verse, verseReference, prayer }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionsRef = useRef<{ label: string; text: string }[]>([]);
  const currentSectionIndex = useRef(0);
  const startTimeRef = useRef(0);

  // Build the script to read
  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);

    sectionsRef.current = [
      { label: 'Reflection', text: reflection },
      { label: 'Scripture', text: `${verse}. ${verseReference}.` },
      { label: 'Prayer', text: prayer },
    ];
  }, [reflection, verse, verseReference, prayer]);

  const totalLength = reflection.length + verse.length + verseReference.length + prayer.length;
  const estimatedDuration = Math.ceil(totalLength / 15); // ~15 chars per second at slow pace

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
    setCurrentSection('');
    if (intervalRef.current) clearInterval(intervalRef.current);
    currentSectionIndex.current = 0;
  }, []);

  const speakSection = useCallback((index: number) => {
    if (index >= sectionsRef.current.length) {
      setIsPlaying(false);
      setProgress(100);
      setCurrentSection('');
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const section = sectionsRef.current[index];
    setCurrentSection(section.label);

    const utterance = new SpeechSynthesisUtterance(section.text);
    utterance.rate = 0.85; // Slightly slower for devotional tone
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to find a natural-sounding female voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Samantha') || // macOS
      v.name.includes('Karen') ||    // macOS AU
      v.name.includes('Moira') ||    // macOS IE
      v.name.includes('Tessa') ||    // macOS ZA
      (v.lang.startsWith('en') && v.name.toLowerCase().includes('female'))
    ) || voices.find(v => v.lang.startsWith('en-'));

    if (preferred) utterance.voice = preferred;

    utterance.onend = () => {
      currentSectionIndex.current = index + 1;
      // Small pause between sections
      setTimeout(() => speakSection(index + 1), 800);
    };

    utterance.onerror = () => {
      stop();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [stop]);

  function play() {
    if (!isSupported) return;

    // Load voices if not loaded
    window.speechSynthesis.getVoices();

    setIsPlaying(true);
    startTimeRef.current = Date.now();
    currentSectionIndex.current = 0;

    // Progress tracker
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const pct = Math.min((elapsed / estimatedDuration) * 100, 99);
      setProgress(pct);
    }, 200);

    speakSection(0);
  }

  function togglePlay() {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <div className="bg-white rounded-2xl border border-lavender/30 p-4">
      <div className="flex items-center gap-4">
        {/* Play/Stop button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0 hover:bg-sage-dark transition-colors active:scale-95"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-charcoal">
            {isPlaying ? 'Listening' : 'Listen to today\u2019s reflection'}
          </p>
          <p className="text-xs text-stone-light mt-0.5">
            {isPlaying && currentSection
              ? currentSection
              : `~${Math.ceil(estimatedDuration / 60)} min · Reflection, scripture & prayer`}
          </p>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-cream-dark rounded-full mt-2.5 overflow-hidden">
            <div
              className="h-full bg-sage rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
