'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AudioPlayer from '@/components/ui/AudioPlayer';
import { trackEvent } from '@/lib/analytics';

const EVENING_PRAYERS = [
  {
    title: 'Releasing the Day',
    prayer: 'Lord, I lay this day at Your feet — the moments I\'m proud of and the ones I\'m not. I release every conversation I\'m replaying, every task I didn\'t finish, every worry I\'m carrying into the night. You were sovereign over today, and You are sovereign over tonight. I don\'t need to solve anything before I sleep. I just need to rest in You.',
    verse: 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.',
    reference: 'Psalm 4:8 (NIV)',
    theme: 'surrender',
  },
  {
    title: 'When Your Mind Won\'t Quiet',
    prayer: 'God, my mind is still racing. Thoughts I can\'t stop. Worries I can\'t shake. I need You to do what I cannot — quiet the noise. Place Your peace like a blanket over my thoughts. One by one, I hand each worry to You. I don\'t need answers tonight. I just need Your presence to be louder than my anxiety.',
    verse: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
    reference: 'Isaiah 26:3 (NIV)',
    theme: 'anxiety',
  },
  {
    title: 'Gratitude Before Sleep',
    prayer: 'Father, before my eyes close, I want to thank You. For the breath in my lungs. For the grace that carried me through today. For the small mercies I almost missed. For the people You placed in my path. For Your patience with me. I go to sleep held by a God who never stops giving. Thank You.',
    verse: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights.',
    reference: 'James 1:17 (NIV)',
    theme: 'gratitude',
  },
  {
    title: 'When Tomorrow Feels Heavy',
    prayer: 'Lord, tomorrow already feels heavy and it hasn\'t even started. I\'m dreading what\'s ahead. But You have already been to tomorrow. You\'ve already prepared grace for it. Help me trust that the same God who was faithful today will be faithful at sunrise. I choose to sleep in peace, because tomorrow belongs to You.',
    verse: 'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',
    reference: 'Matthew 6:34 (NIV)',
    theme: 'trust',
  },
  {
    title: 'Protection Over the Night',
    prayer: 'God, I ask for Your protection tonight — not just physical safety, but peace of mind. Guard my dreams. Guard my thoughts. Guard my heart from the fears that creep in when the lights go out. Surround me with Your presence. Let me wake renewed, not depleted. Watch over me and those I love as we sleep.',
    verse: 'He who watches over Israel will neither slumber nor sleep.',
    reference: 'Psalm 121:4 (NIV)',
    theme: 'protection',
  },
  {
    title: 'Forgiving Myself for Today',
    prayer: 'Lord, I wasn\'t my best today. I said things I regret. I didn\'t do the things I planned. I fell short of who I want to be. But You don\'t hold a scorecard over my pillow. Your mercies are new every morning — which means tonight I can let go. I forgive myself because You already have. Help me rest without replaying my failures.',
    verse: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.',
    reference: 'Lamentations 3:22-23 (ESV)',
    theme: 'grace',
  },
  {
    title: 'When Loneliness Hits at Night',
    prayer: 'God, nights are the hardest. The quiet amplifies the loneliness. The empty space beside me, the silence in the house — it all feels louder in the dark. But You promise You are near to the lonely. Fill this room with Your presence. Remind me that being alone in a room is not the same as being alone in the universe. You are here.',
    verse: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you.',
    reference: 'Deuteronomy 31:8 (NIV)',
    theme: 'loneliness',
  },
];

export default function EveningPage() {
  const [selectedPrayer, setSelectedPrayer] = useState<typeof EVENING_PRAYERS[0] | null>(null);
  const [completed, setCompleted] = useState(false);
  const supabase = createClient();

  async function handleComplete() {
    setCompleted(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    await supabase.from('habits').upsert({
      user_id: user.id,
      habit_date: today,
      prayed: true,
    }, { onConflict: 'user_id,habit_date' });

    await trackEvent('habit_logged', { habit: 'evening_prayer' });
  }

  if (completed && selectedPrayer) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="text-center max-w-sm">
          <p className="text-4xl mb-4">🌙</p>
          <h2 className="text-xl text-charcoal mb-3">Goodnight</h2>
          <p className="text-sm text-stone leading-relaxed mb-6">
            You are held tonight. God neither slumbers nor sleeps — so you can.
          </p>
          <p className="text-xs text-stone-light italic mb-8">
            &ldquo;{selectedPrayer.verse}&rdquo;
            <br />
            <span className="text-sage-dark not-italic">— {selectedPrayer.reference}</span>
          </p>
          <Button variant="ghost" onClick={() => { setSelectedPrayer(null); setCompleted(false); }}>
            Back to evening prayers
          </Button>
        </div>
      </div>
    );
  }

  if (selectedPrayer) {
    return (
      <div className="animate-slide-up">
        {/* Dark mode header for evening feel */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal p-6 mb-6">
          <div className="absolute top-2 right-4 text-2xl opacity-30">🌙</div>
          <p className="text-xs tracking-widest text-sage-light/70 uppercase mb-2">Evening prayer</p>
          <h1 className="text-xl text-cream">{selectedPrayer.title}</h1>
        </div>

        <div className="space-y-5">
          {/* Audio */}
          <AudioPlayer
            reflection=""
            verse={selectedPrayer.verse}
            verseReference={selectedPrayer.reference}
            prayer={selectedPrayer.prayer}
          />

          {/* Prayer */}
          <Card padding="lg">
            <p className="text-[15px] text-charcoal-light leading-[1.9] italic">
              {selectedPrayer.prayer}
            </p>
          </Card>

          {/* Verse */}
          <div className="rounded-2xl bg-charcoal/5 p-6 text-center">
            <p className="text-charcoal italic leading-relaxed mb-3">
              &ldquo;{selectedPrayer.verse}&rdquo;
            </p>
            <cite className="text-sm text-sage-dark not-italic font-medium">
              — {selectedPrayer.reference}
            </cite>
          </div>

          <Button onClick={handleComplete} fullWidth size="lg">
            Amen — ready to rest
          </Button>

          <Button variant="ghost" fullWidth onClick={() => setSelectedPrayer(null)}>
            Choose a different prayer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal p-6 mb-6 mt-6">
        <div className="absolute top-3 right-6 text-3xl opacity-20">🌙</div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-lavender/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <p className="text-xs tracking-widest text-sage-light/70 uppercase mb-2">Wind down</p>
          <h1 className="text-2xl text-cream">Evening prayers</h1>
          <p className="text-sm text-cream/60 mt-2">Choose what your heart needs tonight.</p>
        </div>
      </div>

      <div className="space-y-3">
        {EVENING_PRAYERS.map((prayer, i) => (
          <button
            key={i}
            onClick={() => setSelectedPrayer(prayer)}
            className="w-full text-left"
          >
            <Card className="hover:border-lavender/30 transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">
                    {prayer.theme === 'anxiety' ? '🌊' : prayer.theme === 'gratitude' ? '✨' : prayer.theme === 'loneliness' ? '💜' : prayer.theme === 'grace' ? '🤍' : prayer.theme === 'trust' ? '🌅' : prayer.theme === 'protection' ? '🛡️' : '🕊️'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">{prayer.title}</p>
                  <p className="text-xs text-stone-light mt-1 line-clamp-2">{prayer.prayer.slice(0, 90)}...</p>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
