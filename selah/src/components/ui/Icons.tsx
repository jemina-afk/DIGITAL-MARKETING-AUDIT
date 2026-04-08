// Premium SVG icon set for Selah
// Hand-tuned with consistent stroke width, rounded caps, and warm aesthetics

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

function svgWrap(children: React.ReactNode, { className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// ===== MOOD / FEELING ICONS =====

export function IconPeaceful(props: IconProps) {
  return svgWrap(<><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></>, props);
}

export function IconAnxious(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M8 15h8M9 9h.01M15 9h.01" /></>, props);
}

export function IconGrateful(props: IconProps) {
  return svgWrap(<><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></>, props);
}

export function IconWeary(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M8 15s1.5-1 4-1 4 1 4 1M9.5 9.5l-1-1m6 1l1-1" /></>, props);
}

export function IconHopeful(props: IconProps) {
  return svgWrap(<><path d="M12 2v4m0 0a4 4 0 014 4v1a4 4 0 01-8 0v-1a4 4 0 014-4z" /><path d="M4.93 10.93l2.83 2.83M19.07 10.93l-2.83 2.83M12 18v4m-4-2h8" /></>, props);
}

export function IconLonely(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M9 10h.01M15 10h.01M12 17v-1" /></>, props);
}

export function IconJoyful(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /><path d="M12 2a3 3 0 00-1.46 5.62" opacity="0.5" /></>, props);
}

export function IconOverwhelmed(props: IconProps) {
  return svgWrap(<><path d="M2 12c2-3 4-6 10-6s8 3 10 6c-2 3-4 6-10 6s-8-3-10-6z" /><circle cx="12" cy="12" r="3" /></>, props);
}

export function IconRestless(props: IconProps) {
  return svgWrap(<><path d="M17.7 7.7a7.5 7.5 0 10.6 10.6" /><path d="M21 12h-4M17 8l-2.5 2.5M17 16l-2.5-2.5" /></>, props);
}

export function IconConfident(props: IconProps) {
  return svgWrap(<><path d="M6.5 6.5l11 11M6.5 17.5l11-11" /><circle cx="12" cy="12" r="10" /></>, props);
}

export function IconHurt(props: IconProps) {
  return svgWrap(<><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" /><path d="M15 8l-6 8" /></>, props);
}

export function IconSurrendered(props: IconProps) {
  return svgWrap(<><path d="M7 11c0-1.5.5-3 2-4s3-1 4-1 2.5 0 4 1 2 2.5 2 4" /><path d="M7 11v7a2 2 0 004 0v-2a2 2 0 014 0v2a2 2 0 004 0v-7" /></>, props);
}

// ===== NEED ICONS =====

export function IconComfort(props: IconProps) {
  return svgWrap(<><path d="M17 11h1a3 3 0 010 6h-1M7 11H6a3 3 0 000 6h1M7 11V7a5 5 0 0110 0v4M7 11h10" /></>, props);
}

export function IconCourage(props: IconProps) {
  return svgWrap(<><path d="M12 22V8M5 12l7-7 7 7" /></>, props);
}

export function IconClarity(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>, props);
}

export function IconPeace(props: IconProps) {
  return svgWrap(<><path d="M18 16l-4-4 4-4M6 8l4 4-4 4" opacity="0.4" /><path d="M12 2v20" /></>, props);
}

export function IconStrength(props: IconProps) {
  return svgWrap(<><path d="M6 12h12M12 6v12M2 12l4-4m0 8l-4-4M22 12l-4-4m0 8l4-4" /></>, props);
}

export function IconHope(props: IconProps) {
  return svgWrap(<><path d="M12 22c-4-3-8-6-8-10a4 4 0 018 0 4 4 0 018 0c0 4-4 7-8 10z" /><path d="M12 8v6m0 0l-2-2m2 2l2-2" /></>, props);
}

export function IconRest(props: IconProps) {
  return svgWrap(<><path d="M2 12h4l3-9 6 18 3-9h4" opacity="0.3" /><path d="M3 20h18M5 20v-4a7 7 0 0114 0v4" /></>, props);
}

export function IconDirection(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" /></>, props);
}

export function IconHealing(props: IconProps) {
  return svgWrap(<><path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" opacity="0.3" /><path d="M12 11v6m-3-3h6" /></>, props);
}

export function IconJoy(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /></>, props);
}

export function IconPatience(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>, props);
}

export function IconIdentity(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 10-16 0" /></>, props);
}

// ===== FEATURE / UI ICONS =====

export function IconPray(props: IconProps) {
  return svgWrap(<><path d="M7 11c0-1.5.5-3 2-4s3-1 4-1 2.5 0 4 1 2 2.5 2 4" /><path d="M7 11v7a2 2 0 004 0v-2a2 2 0 014 0v2a2 2 0 004 0v-7" /></>, props);
}

export function IconJournal(props: IconProps) {
  return svgWrap(<><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" /><path d="M8 7h8M8 11h5" /></>, props);
}

export function IconScripture(props: IconProps) {
  return svgWrap(<><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1z" /><path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1z" /></>, props);
}

export function IconPathway(props: IconProps) {
  return svgWrap(<><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M6 9v1a6 6 0 006 6h1" /><path d="M18 15v-1a6 6 0 00-6-6h-1" /></>, props);
}

export function IconHabit(props: IconProps) {
  return svgWrap(<><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>, props);
}

export function IconSunrise(props: IconProps) {
  return svgWrap(<><path d="M12 2v4M4.93 4.93l2.83 2.83M20 12h-4M4 12H0M6.34 17.66l-1.41 1.41M19.07 4.93l-2.83 2.83" /><path d="M17 18a5 5 0 00-10 0" /><path d="M2 22h20" /></>, props);
}

export function IconMoon(props: IconProps) {
  return svgWrap(<><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></>, props);
}

export function IconInsights(props: IconProps) {
  return svgWrap(<><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" /></>, props);
}

export function IconDove(props: IconProps) {
  return svgWrap(<><path d="M12 22c-1-2-4-4-4-7a4 4 0 018 0c0 3-3 5-4 7z" /><path d="M9 12c-2-1-4-3-4-6 3 0 5 2 6 4" /><path d="M15 12c2-1 4-3 4-6-3 0-5 2-6 4" /></>, props);
}

export function IconCrown(props: IconProps) {
  return svgWrap(<><path d="M2 8l4 12h12l4-12-5 4-5-7-5 7z" /><path d="M6 20h12" /></>, props);
}

export function IconSeedling(props: IconProps) {
  return svgWrap(<><path d="M12 22V12" /><path d="M12 12c-3-4-8-3-9-1 0 3 4 5 9 1z" /><path d="M12 12c3-4 8-3 9-1 0 3-4 5-9 1z" /></>, props);
}

export function IconCompass(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="12" r="10" /><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" /></>, props);
}

export function IconHourglass(props: IconProps) {
  return svgWrap(<><path d="M5 4h14M5 20h14M7 4v3a5 5 0 005 5 5 5 0 005-5V4M7 20v-3a5 5 0 015-5 5 5 0 015 5v3" /></>, props);
}

export function IconHeart(props: IconProps) {
  return svgWrap(<><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" /></>, props);
}

export function IconShield(props: IconProps) {
  return svgWrap(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>, props);
}

export function IconMirror(props: IconProps) {
  return svgWrap(<><circle cx="12" cy="10" r="7" /><path d="M12 17v5M8 22h8" /></>, props);
}

export function IconStar(props: IconProps) {
  return svgWrap(<><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></>, props);
}

export function IconMail(props: IconProps) {
  return svgWrap(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></>, props);
}

export function IconPlus(props: IconProps) {
  return svgWrap(<><path d="M12 5v14M5 12h14" /></>, props);
}

export function IconCheck(props: IconProps) {
  return svgWrap(<><path d="M20 6L9 17l-5-5" /></>, props);
}

export function IconShare(props: IconProps) {
  return svgWrap(<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" /></>, props);
}

// ===== PATHWAY ICON MAPPER =====
const PATHWAY_ICON_MAP: Record<string, (props: IconProps) => React.JSX.Element> = {
  dove: IconDove,
  mirror: IconMirror,
  hourglass: IconHourglass,
  heart: IconHeart,
  crown: IconCrown,
  seedling: IconSeedling,
  compass: IconCompass,
  pathway: IconPathway,
  star: IconStar,
  shield: IconShield,
};

export function PathwayIcon({ name, className, size }: { name: string; className?: string; size?: number }) {
  const Icon = PATHWAY_ICON_MAP[name];
  if (Icon) return <Icon className={className} size={size} />;
  return <IconStar className={className} size={size} />;
}
