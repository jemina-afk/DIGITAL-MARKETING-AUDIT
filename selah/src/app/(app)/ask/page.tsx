'use client';

import PremiumGate from '@/components/ui/PremiumGate';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AppHeader from '@/components/layout/AppHeader';
import Disclaimer from '@/components/ui/Disclaimer';

const WISDOM_DATABASE: Record<string, { verses: { text: string; ref: string }[]; reflection: string; prayer: string }> = {
  forgive: {
    verses: [
      { text: 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.', ref: 'Colossians 3:13 (NIV)' },
      { text: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.', ref: 'Ephesians 4:32 (NIV)' },
      { text: 'For if you forgive other people when they sin against you, your heavenly Father will also forgive you.', ref: 'Matthew 6:14 (NIV)' },
    ],
    reflection: 'Forgiveness is not saying what happened was okay. It is refusing to let the person who hurt you take up permanent residence in your heart. It is a process, not a moment. You may need to forgive the same person for the same thing many times before the sting fades. That is normal. God does not ask you to forget or to trust again blindly. He asks you to release - so the bitterness does not consume you. Start where you are. Even saying "I want to want to forgive" is a beginning.',
    prayer: 'God, this is hard. I do not want to carry bitterness, but I also cannot pretend the hurt did not happen. Help me begin the process of releasing this person to You. Not because they deserve it, but because I deserve freedom. Heal what forgiveness alone cannot reach. Amen.',
  },
  anxiety: {
    verses: [
      { text: 'Cast all your anxiety on him because he cares for you.', ref: '1 Peter 5:7 (NIV)' },
      { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6 (NIV)' },
      { text: 'When anxiety was great within me, your consolation brought me joy.', ref: 'Psalm 94:19 (NIV)' },
    ],
    reflection: 'Anxiety is not a character flaw. It is your mind trying to protect you from uncertainty - but it was never meant to carry the weight alone. God does not shame you for worrying. He invites you to bring every anxious thought to Him - not polished, not tidy, just honest. The peace He offers does not depend on your circumstances changing. It depends on His presence being near. And He is always near.',
    prayer: 'Lord, my mind will not stop. The thoughts circle and I cannot make them quiet on my own. I bring every worry to You right now - the ones I can name and the ones I cannot. Trade my anxiety for Your peace. Not the world\'s version of peace, but Yours - the kind that does not make sense but holds everything together. Amen.',
  },
  lonely: {
    verses: [
      { text: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you.', ref: 'Deuteronomy 31:8 (NIV)' },
      { text: 'Turn to me and be gracious to me, for I am lonely and afflicted.', ref: 'Psalm 25:16 (NIV)' },
      { text: 'God sets the lonely in families.', ref: 'Psalm 68:6 (NIV)' },
    ],
    reflection: 'Loneliness is not a sign that something is wrong with you. It is a sign that you were built for connection - and right now, that need is unmet. God does not dismiss your ache. He created you for relationship, and He promises His presence even when human presence feels scarce. Being alone in a room is not the same as being alone in the universe. He is with you right now.',
    prayer: 'God, I feel alone. Not just physically, but in my soul. Like no one truly sees me or knows what I carry. But You do. Draw close in a way I can feel. Send connection through unexpected places. Remind me that belonging to You means I am never truly orphaned. Amen.',
  },
  purpose: {
    verses: [
      { text: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', ref: 'Ephesians 2:10 (NIV)' },
      { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', ref: 'Jeremiah 29:11 (NIV)' },
      { text: 'Your word is a lamp for my feet, a light on my path.', ref: 'Psalm 119:105 (NIV)' },
    ],
    reflection: 'Purpose is not usually a single dramatic revelation. It is discovered in faithfulness - in showing up to the next thing in front of you with intention. God rarely shows the whole road. He lights the next step. If you are breathing, you have purpose. If you are searching, that search itself is purposeful. Trust the process. Trust the God who started something in you and has no intention of abandoning it halfway.',
    prayer: 'God, I do not know what I am supposed to be doing with my life. The uncertainty feels heavy. But I trust that You are not confused, even when I am. Show me the next step - just the next one. I do not need the whole map. I just need to know You are walking with me. Amen.',
  },
  heartbreak: {
    verses: [
      { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', ref: 'Psalm 34:18 (NIV)' },
      { text: 'He heals the brokenhearted and binds up their wounds.', ref: 'Psalm 147:3 (NIV)' },
      { text: 'Weeping may stay for the night, but rejoicing comes in the morning.', ref: 'Psalm 30:5 (NIV)' },
    ],
    reflection: 'Heartbreak is one of the most physical forms of emotional pain. It affects your sleep, your appetite, your ability to think clearly. God does not rush you past it. He sits in it with you. Healing is not linear - some days will feel lighter and some will feel like day one again. That is normal. Give yourself permission to grieve at your own pace. The God who binds wounds is gentle with fresh ones.',
    prayer: 'Lord, my heart is broken and I do not know how to fix it. I am not going to pretend I am okay. Hold me in this pain. Do not let me harden from it. Heal what is broken, slowly and gently, in Your time. And remind me that this chapter is not the end of my story. Amen.',
  },
  identity: {
    verses: [
      { text: 'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.', ref: 'Psalm 139:14 (NIV)' },
      { text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', ref: '1 John 3:1 (NIV)' },
      { text: 'Before I formed you in the womb I knew you, before you were born I set you apart.', ref: 'Jeremiah 1:5 (NIV)' },
    ],
    reflection: 'The world defines you by what you do, how you look, who loves you, and what you achieve. God defines you by what He decided about you before you existed. You are not an afterthought. You are not a mistake dressed up as a person. You are intentionally, specifically, lovingly made. The parts you criticise? He designed them. The story you wish was different? He is writing something with it that you cannot see yet.',
    prayer: 'God, I have been listening to voices that are not Yours - voices that say I am not enough, not worthy, not lovable. Today I choose to listen to what You say instead. You say I am Yours. You say I am wonderfully made. Help me believe it deeper than my doubts. Amen.',
  },
  waiting: {
    verses: [
      { text: 'Wait for the Lord; be strong and take heart and wait for the Lord.', ref: 'Psalm 27:14 (NIV)' },
      { text: 'But those who hope in the Lord will renew their strength.', ref: 'Isaiah 40:31 (NIV)' },
      { text: 'Be still before the Lord and wait patiently for him.', ref: 'Psalm 37:7 (NIV)' },
    ],
    reflection: 'Waiting is not nothing happening. It is God working in ways you cannot see. The hardest part of waiting is the silence - the feeling that your prayers hit the ceiling. But God is not slow. He is intentional. Every person in the Bible who received a promise from God had to wait for it. Abraham waited 25 years. Joseph waited 13 years. The waiting was not wasted time. It was preparation time.',
    prayer: 'Lord, I am tired of waiting. I do not understand Your timing and I am struggling to trust it. But I choose to believe that You are not slow - You are purposeful. Strengthen me while I wait. Do not let the waiting make me bitter. Let it make me ready. Amen.',
  },
  default: {
    verses: [
      { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', ref: 'Proverbs 3:5-6 (NIV)' },
      { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.', ref: 'Lamentations 3:22-23 (ESV)' },
      { text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', ref: 'Joshua 1:9 (NIV)' },
    ],
    reflection: 'Whatever you are carrying today, God is not distant from it. He is not waiting for you to figure it out before He shows up. He meets you in the middle - in the confusion, the pain, the uncertainty, the ordinary. You do not need perfect words or perfect faith. You just need to come as you are. That has always been enough for Him.',
    prayer: 'God, I come to You today with everything I am carrying - the things I can name and the things I cannot. Meet me here. Speak to what I need to hear. Guide my next step. I trust You, even when I do not understand. Amen.',
  },
};

const KEYWORD_MAP: Record<string, string> = {
  forgive: 'forgive', forgiveness: 'forgive', forgiving: 'forgive', bitter: 'forgive', resentment: 'forgive', grudge: 'forgive',
  anxious: 'anxiety', anxiety: 'anxiety', worry: 'anxiety', worried: 'anxiety', panic: 'anxiety', scared: 'anxiety', fear: 'anxiety', afraid: 'anxiety', stress: 'anxiety', stressed: 'anxiety', overwhelm: 'anxiety',
  lonely: 'lonely', alone: 'lonely', loneliness: 'lonely', isolated: 'lonely', nobody: 'lonely', unseen: 'lonely', invisible: 'lonely',
  purpose: 'purpose', calling: 'purpose', career: 'purpose', direction: 'purpose', lost: 'purpose', confused: 'purpose', future: 'purpose', meaning: 'purpose', job: 'purpose', work: 'purpose',
  heartbreak: 'heartbreak', breakup: 'heartbreak', heartbroken: 'heartbreak', grief: 'heartbreak', loss: 'heartbreak', death: 'heartbreak', divorce: 'heartbreak', miss: 'heartbreak', mourning: 'heartbreak',
  identity: 'identity', worth: 'identity', enough: 'identity', comparison: 'identity', confidence: 'identity', insecure: 'identity', ugly: 'identity', failure: 'identity', shame: 'identity',
  wait: 'waiting', waiting: 'waiting', patience: 'waiting', timing: 'waiting', unanswered: 'waiting', silent: 'waiting',
};

function detectTopic(question: string): string {
  const lower = question.toLowerCase();
  for (const [keyword, topic] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(keyword)) return topic;
  }
  return 'default';
}

const SUGGESTED_QUESTIONS = [
  'How do I forgive someone who hurt me?',
  'I cannot stop worrying about the future',
  'Why does God feel so far away?',
  'I do not know what my purpose is',
  'How do I heal from a breakup?',
  'I feel like I am not enough',
  'How do I wait on God when it is taking so long?',
  'I feel so alone right now',
];

export default function AskSelahPageWrapper() {
  return (
    <PremiumGate feature="Ask Selah" description="AI-powered scripture guidance that speaks directly to your question. Every answer is uniquely generated with relevant verses, a reflection, and a prayer.">
      <AskSelahContent />
    </PremiumGate>
  );
}

function AskSelahContent() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<typeof WISDOM_DATABASE.default | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAsk(q?: string) {
    const text = q || question;
    if (!text.trim()) return;
    setLoading(true);
    setQuestion(text);

    try {
      // Try AI-powered response first
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });

      const data = await res.json();

      if (data.verses && data.reflection && data.prayer) {
        // AI response succeeded
        setResponse({
          verses: data.verses.map((v: { text: string; ref: string }) => ({ text: v.text, ref: v.ref })),
          reflection: data.reflection,
          prayer: data.prayer,
        });
        setLoading(false);
        return;
      }
    } catch {
      // AI failed, fall through to template
    }

    // Fallback to template matching
    const topic = detectTopic(text);
    setResponse(WISDOM_DATABASE[topic] || WISDOM_DATABASE.default);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
        <div className="w-12 h-12 rounded-full border-2 border-sage border-t-transparent animate-spin mb-4" />
        <p className="text-sm text-stone">Searching God's word for you...</p>
      </div>
    );
  }

  if (response) {
    return (
      <div className="animate-slide-up">
        <AppHeader title="Selah says" />

        <Card variant="soft" padding="sm" className="mb-4">
          <p className="text-sm text-charcoal-light italic">&ldquo;{question}&rdquo;</p>
        </Card>

        <div className="space-y-4">
          {/* Verses */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-warm rounded-full" />
              <p className="text-xs tracking-widest text-stone uppercase">Scripture for you</p>
            </div>
            <div className="space-y-4">
              {response.verses.map((v, i) => (
                <div key={i} className={i > 0 ? 'pt-3 border-t border-cream-dark/50' : ''}>
                  <p className="text-sm text-charcoal italic leading-relaxed">&ldquo;{v.text}&rdquo;</p>
                  <p className="text-xs text-sage-dark mt-1.5 font-medium">{v.ref}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Reflection */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-sage rounded-full" />
              <p className="text-xs tracking-widest text-stone uppercase">Reflection</p>
            </div>
            <p className="text-[15px] text-charcoal leading-[1.8]">{response.reflection}</p>
          </Card>

          {/* Prayer */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-blush rounded-full" />
              <p className="text-xs tracking-widest text-stone uppercase">A prayer</p>
            </div>
            <p className="text-[15px] text-charcoal-light italic leading-[1.8]">{response.prayer}</p>
          </Card>

          <Disclaimer className="text-center" />

          <Button variant="ghost" fullWidth onClick={() => { setResponse(null); setQuestion(''); }}>
            Ask something else
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <AppHeader title="Ask Selah" subtitle="What is on your heart today?" />

      <div className="space-y-5">
        {/* Input */}
        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="How do I forgive someone who hurt me?"
            rows={3}
            className="w-full px-4 py-3 rounded-2xl border-2 border-cream-dark bg-white text-charcoal placeholder:text-stone-light text-sm resize-none focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/10 transition-all"
          />
          <Button
            onClick={() => handleAsk()}
            size="sm"
            className="absolute bottom-3 right-3"
            disabled={!question.trim()}
          >
            Ask
          </Button>
        </div>

        {/* Suggested questions */}
        <div>
          <p className="text-xs text-stone-light mb-3">Or try one of these</p>
          <div className="space-y-2">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleAsk(q)}
                className="w-full text-left text-sm text-charcoal-light p-3.5 rounded-xl bg-white/80 border border-lavender-light/50 hover:border-sage/30 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <Disclaimer />
      </div>
    </div>
  );
}
