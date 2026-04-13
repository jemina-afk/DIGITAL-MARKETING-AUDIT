'use client';

import { useState } from 'react';
import AppHeader from '@/components/layout/AppHeader';
import Card from '@/components/ui/Card';

const VERSE_PACKS = [
  {
    id: 'anxiety',
    title: '20 Verses for Anxiety',
    desc: 'When your mind will not stop racing',
    gradient: 'from-[#C8B6FF] to-[#B8D0EB]',
    verses: [
      { text: 'Cast all your anxiety on him because he cares for you.', ref: '1 Peter 5:7' },
      { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6' },
      { text: 'When anxiety was great within me, your consolation brought me joy.', ref: 'Psalm 94:19' },
      { text: 'God is our refuge and strength, an ever-present help in trouble.', ref: 'Psalm 46:1' },
      { text: 'I sought the Lord, and he answered me; he delivered me from all my fears.', ref: 'Psalm 34:4' },
      { text: 'Peace I leave with you; my peace I give you.', ref: 'John 14:27' },
      { text: 'Be still, and know that I am God.', ref: 'Psalm 46:10' },
      { text: 'The Lord is my light and my salvation - whom shall I fear?', ref: 'Psalm 27:1' },
      { text: 'So do not fear, for I am with you; do not be dismayed, for I am your God.', ref: 'Isaiah 41:10' },
      { text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.', ref: 'Isaiah 26:3' },
    ],
  },
  {
    id: 'identity',
    title: '15 Verses for When You Feel Unseen',
    desc: 'Reminders of who God says you are',
    gradient: 'from-[#E8B4D4] to-[#C8A8E8]',
    verses: [
      { text: 'I praise you because I am fearfully and wonderfully made.', ref: 'Psalm 139:14' },
      { text: 'See what great love the Father has lavished on us, that we should be called children of God!', ref: '1 John 3:1' },
      { text: 'Before I formed you in the womb I knew you.', ref: 'Jeremiah 1:5' },
      { text: 'You are a chosen people, a royal priesthood, God\'s special possession.', ref: '1 Peter 2:9' },
      { text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you.', ref: 'Zephaniah 3:17' },
      { text: 'My grace is sufficient for you, for my power is made perfect in weakness.', ref: '2 Corinthians 12:9' },
      { text: 'For we are God\'s handiwork, created in Christ Jesus to do good works.', ref: 'Ephesians 2:10' },
      { text: 'She is clothed with strength and dignity; she can laugh at the days to come.', ref: 'Proverbs 31:25' },
    ],
  },
  {
    id: 'strength',
    title: '12 Verses for Hard Days',
    desc: 'When you need strength to keep going',
    gradient: 'from-[#B8D0EB] to-[#A8E6CF]',
    verses: [
      { text: 'He gives strength to the weary and increases the power of the weak.', ref: 'Isaiah 40:29' },
      { text: 'I can do all this through him who gives me strength.', ref: 'Philippians 4:13' },
      { text: 'The Lord is my strength and my shield; my heart trusts in him, and he helps me.', ref: 'Psalm 28:7' },
      { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', ref: 'Matthew 11:28' },
      { text: 'But those who hope in the Lord will renew their strength.', ref: 'Isaiah 40:31' },
      { text: 'The Lord himself goes before you and will be with you; he will never leave you.', ref: 'Deuteronomy 31:8' },
    ],
  },
  {
    id: 'newmom',
    title: '10 Verses for New Moms',
    desc: 'For the beautiful, exhausting, sacred days',
    gradient: 'from-[#F0D6EA] to-[#FFE8D0]',
    verses: [
      { text: 'She is clothed with strength and dignity; she can laugh at the days to come.', ref: 'Proverbs 31:25' },
      { text: 'He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart.', ref: 'Isaiah 40:11' },
      { text: 'My grace is sufficient for you, for my power is made perfect in weakness.', ref: '2 Corinthians 12:9' },
      { text: 'The Lord your God is with you, the Mighty Warrior who saves. He will quiet you with his love.', ref: 'Zephaniah 3:17' },
      { text: 'Even youths grow tired and weary. But those who hope in the Lord will renew their strength.', ref: 'Isaiah 40:30-31' },
    ],
  },
];

export default function VersePacksPage() {
  const [selectedPack, setSelectedPack] = useState<typeof VERSE_PACKS[0] | null>(null);

  if (selectedPack) {
    return (
      <div className="animate-fade-in">
        <AppHeader title={selectedPack.title} subtitle={selectedPack.desc} />
        <div className="space-y-3">
          {selectedPack.verses.map((v, i) => (
            <Card key={i}>
              <p className="text-sm text-charcoal italic leading-relaxed">&ldquo;{v.text}&rdquo;</p>
              <p className="text-xs text-sage-dark mt-2 font-medium">{v.ref}</p>
            </Card>
          ))}
          <button onClick={() => setSelectedPack(null)} className="text-sm text-stone-light hover:text-stone text-center w-full py-3">
            Back to verse packs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="Verse Packs" subtitle="Curated scripture collections for your season" />
      <div className="space-y-3">
        {VERSE_PACKS.map((pack) => (
          <button key={pack.id} onClick={() => setSelectedPack(pack)} className="w-full text-left">
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${pack.gradient} p-5`}>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/15" />
              <h3 className="text-sm font-medium text-charcoal mb-1">{pack.title}</h3>
              <p className="text-xs text-charcoal/60">{pack.desc}</p>
              <p className="text-xs text-charcoal/40 mt-2">{pack.verses.length} verses</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
