'use client';

import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';
import Link from 'next/link';

const STUDIES = [
  {
    id: 'women-of-bible',
    title: 'Women of the Bible',
    desc: 'Discover the untold stories of women who changed history - Hagar, Ruth, Esther, Mary, and more. Their struggles mirror ours more than you think.',
    weeks: 4,
    gradient: 'from-[#E8B4D4] to-[#C8A8E8]',
    topics: ['Identity', 'Courage', 'Faith', 'Purpose'],
  },
  {
    id: 'psalms-honest',
    title: 'The Psalms: Honest Prayers',
    desc: 'A deep dive into the most raw, emotional book of the Bible. Learn to pray like David - with anger, tears, joy, and everything in between.',
    weeks: 3,
    gradient: 'from-[#C8B6FF] to-[#B8D0EB]',
    topics: ['Prayer', 'Honesty', 'Worship', 'Lament'],
  },
  {
    id: 'jesus-worry',
    title: 'What Jesus Said About Worry',
    desc: 'Jesus talked about worry more than you might think. This study walks through every time He addressed fear, anxiety, and the future.',
    weeks: 3,
    gradient: 'from-[#B8D0EB] to-[#A8E6CF]',
    topics: ['Anxiety', 'Trust', 'Peace', 'Surrender'],
  },
  {
    id: 'sermon-mount',
    title: 'The Sermon on the Mount',
    desc: 'The most famous sermon ever preached, broken down for real life. Blessings, prayer, money, worry, relationships - Jesus covered it all in one sitting.',
    weeks: 4,
    gradient: 'from-[#F0D6EA] to-[#FFE8D0]',
    topics: ['Character', 'Prayer', 'Trust', 'Relationships'],
    comingSoon: true,
  },
];

export default function StudiesPage() {
  return (
    <div className="animate-fade-in">
      <AppHeader title="Selah Studies" subtitle="Go deeper with guided Bible studies" />

      <p className="text-xs text-stone-light mb-5">Multi-week studies that take you deeper than a daily devotional. Each week includes context, verse-by-verse reading, application, and reflection.</p>

      <div className="space-y-4">
        {STUDIES.map((study) => (
          <div key={study.id}>
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${study.gradient} p-5`}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/15" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
              <div className="relative">
                {study.comingSoon && (
                  <span className="text-[10px] bg-white/30 text-charcoal px-2 py-0.5 rounded-full font-medium mb-2 inline-block">Coming soon</span>
                )}
                <h3 className="text-base font-medium text-charcoal mb-1">{study.title}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed mb-3">{study.desc}</p>
                <div className="flex items-center gap-3 text-xs text-charcoal/50">
                  <span>{study.weeks} weeks</span>
                  <span>-</span>
                  <span>{study.topics.join(' / ')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
