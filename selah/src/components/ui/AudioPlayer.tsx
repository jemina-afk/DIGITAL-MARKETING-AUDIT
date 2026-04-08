'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface AudioPlayerProps {
  reflection: string;
  verse: string;
  verseReference: string;
  prayer: string;
}

// Break text into sentences for more natural pacing
function splitIntoSentences(text: string): string[] {
  return text
    .replace(/\n\n/g, '. ')
    .split(/(?<=[.!?])\s+/)
    .filter(s => s.trim().length > 0);
}

export default function AudioPlayer({ reflection, verse, verseReference, prayer }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCancelledRef = useRef(false);
  const startTimeRef = useRef(0);
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  const totalLength = reflection.length + verse.length + verseReference.length + prayer.length;
  const estimatedDuration = Math.ceil(totalLength / 12); // slower pace = ~12 chars/sec

  // Build sections with natural pauses
  const sections = [
    ...(reflection ? [{ label: 'Reflection', sentences: splitIntoSentences(reflection) }] : []),
    { label: 'Scripture', sentences: [`From ${verseReference}.`, verse] },
    { label: 'Prayer', sentences: splitIntoSentences(prayer) },
  ];

  // Load voices - some browsers load them async
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    setIsSupported(true);

    function loadVoices() {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;

      // Priority list of natural-sounding voices (Mac/iOS/Chrome)
      const priorityNames = [
        'Samantha',        // macOS - warm, natural
        'Zoe (Premium)',   // macOS Premium
        'Samantha (Enhanced)', // macOS Enhanced
        'Ava (Premium)',   // macOS Premium
        'Allison',         // macOS
        'Google UK English Female',
        'Google US English',
        'Karen',           // macOS AU
        'Moira',           // macOS IE
        'Tessa',           // macOS ZA
        'Fiona',           // macOS
        'Victoria',        // macOS
      ];

      for (const name of priorityNames) {
        const found = voices.find(v => v.name.includes(name));
        if (found) { selectedVoiceRef.current = found; setVoiceReady(true); return; }
      }

      // Fallback: any English female voice
      const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'))
        || voices.find(v => v.lang.startsWith('en-'));
      if (englishVoice) selectedVoiceRef.current = englishVoice;
      setVoiceReady(true);
    }

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const stop = useCallback(() => {
    isCancelledRef.current = true;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
    setCurrentSection('');
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const speakSentence = useCallback((
    sectionIdx: number,
    sentenceIdx: number,
  ) => {
    if (isCancelledRef.current) return;
    if (sectionIdx >= sections.length) {
      setIsPlaying(false);
      setProgress(100);
      setCurrentSection('Complete');
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const section = sections[sectionIdx];
    if (sentenceIdx >= section.sentences.length) {
      // Move to next section with a longer pause
      setTimeout(() => speakSentence(sectionIdx + 1, 0), 1500);
      return;
    }

    setCurrentSection(section.label);
    const sentence = section.sentences[sentenceIdx];

    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.rate = 0.78;  // Slower - devotional, meditative pace
    utterance.pitch = 1.05; // Slightly warmer
    utterance.volume = 1.0;

    if (selectedVoiceRef.current) {
      utterance.voice = selectedVoiceRef.current;
    }

    utterance.onend = () => {
      if (isCancelledRef.current) return;
      // Natural pause between sentences (longer for prayer)
      const pause = section.label === 'Prayer' ? 600 : 400;
      setTimeout(() => speakSentence(sectionIdx, sentenceIdx + 1), pause);
    };

    utterance.onerror = () => { stop(); };

    window.speechSynthesis.speak(utterance);
  }, [sections, stop]);

  function play() {
    if (!isSupported) return;

    isCancelledRef.current = false;
    setIsPlaying(true);
    startTimeRef.current = Date.now();

    // Progress tracker
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const pct = Math.min((elapsed / estimatedDuration) * 100, 98);
      setProgress(pct);
    }, 250);

    speakSentence(0, 0);
  }

  // Cleanup
  useEffect(() => {
    return () => {
      isCancelledRef.current = true;
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!isSupported) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-charcoal to-charcoal-light p-5">
      {/* Decorative wave */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,40 C100,10 200,70 300,30 C350,15 380,45 400,35 L400,80 L0,80 Z" fill="currentColor" className="text-white" />
        </svg>
      </div>

      <div className="relative flex items-center gap-4">
        {/* Play/Stop - glowing button */}
        <button
          onClick={() => isPlaying ? stop() : play()}
          className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 active:scale-90
            ${isPlaying
              ? 'bg-white/20 hover:bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
              : 'bg-sage hover:bg-sage-dark shadow-[0_0_20px_rgba(139,168,136,0.3)]'
            }`}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
          <p className="text-sm font-medium text-cream">
            {isPlaying ? currentSection : 'Listen'}
          </p>
          <p className="text-xs text-cream/50 mt-0.5">
            {isPlaying
              ? 'Playing...'
              : `${Math.ceil(estimatedDuration / 60)} min · Reflection, scripture & prayer`}
          </p>

          {/* Progress bar */}
          <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sage to-sage-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
