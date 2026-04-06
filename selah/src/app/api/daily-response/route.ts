import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// Curated scripture-response pairs for different emotional states
// In production, this could be powered by a more sophisticated matching engine or AI API
const RESPONSE_DATABASE: Record<string, {
  reflections: string[];
  verses: { text: string; reference: string }[];
  prayers: string[];
  actions: string[];
}> = {
  anxious: {
    reflections: [
      'Anxiety often whispers that we need to hold everything together. But Scripture reminds us that the God who holds the stars in place is the same God holding you right now. You don\'t have to carry this alone.',
      'When worry grips your heart, remember — God already knows the outcome. He isn\'t surprised by what surprises you. Your role today isn\'t to figure it all out. It\'s simply to trust the One who already has.',
      'The weight you\'re carrying today isn\'t meant for your shoulders alone. God invites you to lay it down — not because it doesn\'t matter, but because He is big enough to carry it for you.',
    ],
    verses: [
      { text: 'Cast all your anxiety on him because he cares for you.', reference: '1 Peter 5:7 (NIV)' },
      { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', reference: 'Philippians 4:6-7 (NIV)' },
      { text: 'When anxiety was great within me, your consolation brought me joy.', reference: 'Psalm 94:19 (NIV)' },
    ],
    prayers: [
      'Lord, I bring you the anxious thoughts that have been circling in my mind. I don\'t fully understand my own worry, but You do. Meet me here. Quiet the noise. Remind me that You are near, and You are good. I choose to trust You today, even when my feelings don\'t catch up. Amen.',
      'Father, my heart feels heavy with worry. I release control of what I cannot change. Fill me with Your peace — the kind that doesn\'t make sense but holds everything together. I trust You with today. Amen.',
    ],
    actions: [
      'Write down three things that are worrying you. Next to each one, write: "God, I trust you with this." Then close your journal and take three deep breaths.',
      'Take a five-minute walk outside. With each step, silently pray: "You are with me." Let nature remind you of God\'s faithfulness.',
      'Send a voice note or text to someone you trust saying how you really feel today. Let someone carry this with you.',
    ],
  },
  overwhelmed: {
    reflections: [
      'When everything feels like too much, God doesn\'t ask you to power through. He asks you to pause. To breathe. To let Him lead. You weren\'t designed to carry it all — you were designed to walk with the One who can.',
      'Feeling overwhelmed isn\'t a sign of weakness — it\'s a sign you\'re carrying more than you were meant to carry alone. God sees every responsibility, every pressure, every expectation. And He says: come to Me.',
    ],
    verses: [
      { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', reference: 'Matthew 11:28 (NIV)' },
      { text: 'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.', reference: 'Psalm 23:1-3 (NIV)' },
    ],
    prayers: [
      'Jesus, I\'m overwhelmed. I don\'t even know where to start today. But You do. Order my steps. Quiet my mind. Show me the one thing I need to do next — and give me grace for the rest. Amen.',
    ],
    actions: [
      'Choose one thing from your to-do list that can wait. Cross it off for today. Give yourself permission to do less and be more present.',
      'Set a timer for 10 minutes. Sit in silence with no phone, no agenda. Just breathe and let God be near.',
    ],
  },
  grateful: {
    reflections: [
      'A grateful heart is fertile ground for faith. When you pause to notice what God has already done, it becomes easier to trust Him with what\'s still to come. Gratitude doesn\'t ignore the hard — it chooses to see God in the middle of it.',
      'The fact that you\'re feeling grateful today is itself a gift. Gratitude rewires the soul. Let this feeling deepen as you trace God\'s hand through your story.',
    ],
    verses: [
      { text: 'Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.', reference: '1 Thessalonians 5:18 (NIV)' },
      { text: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights.', reference: 'James 1:17 (NIV)' },
    ],
    prayers: [
      'Father, thank You. For the big things I see and the quiet ones I almost miss. Open my eyes even wider to Your goodness today. Let gratitude overflow from my heart into every conversation and moment. Amen.',
    ],
    actions: [
      'Text someone today and tell them one specific thing you\'re grateful for about them. Let your gratitude bless someone else.',
      'Write a list of 5 "small mercies" you noticed this week — things that could have gone unnoticed but were quietly good.',
    ],
  },
  lonely: {
    reflections: [
      'Loneliness can feel like silence — but God is never silent when it comes to you. Even when no one else sees what you\'re going through, He is intimately aware of every tear, every quiet ache, every moment you feel unseen.',
      'Being lonely doesn\'t mean you are alone. God promises He will never leave you nor forsake you. Today, let that truth sit deeper than the feeling.',
    ],
    verses: [
      { text: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.', reference: 'Deuteronomy 31:8 (NIV)' },
      { text: 'Turn to me and be gracious to me, for I am lonely and afflicted.', reference: 'Psalm 25:16 (NIV)' },
    ],
    prayers: [
      'Lord, I feel alone today. I know in my head that You are near, but my heart needs to feel it. Draw close. Send comfort through unexpected places. Remind me that I belong to You, and I am never truly alone. Amen.',
    ],
    actions: [
      'Reach out to one person today — even a small message. Connection doesn\'t have to be deep to be real. Start small.',
      'Write a letter to God as if He were sitting across from you. Tell Him everything.',
    ],
  },
  peaceful: {
    reflections: [
      'Peace is a rare gift — and the fact that you\'re experiencing it today is worth noticing. Let this be an anchor. When harder days come, you can return to this moment and remember: God is faithful to give peace.',
      'This peace you feel isn\'t just the absence of trouble. It\'s the presence of God. Savour it. Rest in it. Let it strengthen you.',
    ],
    verses: [
      { text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', reference: 'John 14:27 (NIV)' },
      { text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.', reference: 'Isaiah 26:3 (NIV)' },
    ],
    prayers: [
      'Thank You, Lord, for this peace. It\'s a gift I don\'t take lightly. Guard my heart in this place. Let this peace spill over into every part of my day and into the lives of those around me. Amen.',
    ],
    actions: [
      'Journal about what has contributed to this feeling of peace. What rhythms, choices, or surrenders have brought you here?',
      'Share this peace with someone. Pray for a friend who is going through a hard season.',
    ],
  },
  hopeful: {
    reflections: [
      'Hope isn\'t wishful thinking — it\'s anchored in a God who has proven Himself faithful again and again. When you feel hopeful, it\'s because your spirit is catching a glimpse of what God is doing behind the scenes.',
    ],
    verses: [
      { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', reference: 'Jeremiah 29:11 (NIV)' },
      { text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.', reference: 'Romans 15:13 (NIV)' },
    ],
    prayers: [
      'God, thank You for planting hope in my heart. Water it. Grow it. Help me hold onto this expectation even when circumstances try to steal it. I believe You are working. Amen.',
    ],
    actions: [
      'Write down one thing you\'re hoping for. Place it somewhere you\'ll see it daily as a reminder to keep believing.',
    ],
  },
  weary: {
    reflections: [
      'Weariness isn\'t failure — it\'s a signal that you\'ve been carrying something heavy. God doesn\'t condemn your tiredness. He draws near to the weary and offers rest that no amount of sleep can give.',
    ],
    verses: [
      { text: 'He gives strength to the weary and increases the power of the weak.', reference: 'Isaiah 40:29 (NIV)' },
      { text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', reference: 'Galatians 6:9 (NIV)' },
    ],
    prayers: [
      'Lord, I\'m tired — in my body, my mind, and my spirit. I don\'t need to understand why right now. I just need Your strength. Carry what I can\'t. Restore what feels depleted. Amen.',
    ],
    actions: [
      'Give yourself permission to rest without guilt today. Cancel one non-essential thing. Let God fill that space.',
    ],
  },
  hurt: {
    reflections: [
      'Pain is real, and God doesn\'t dismiss it. He is close to the brokenhearted. Whatever caused this hurt — He sees it, He knows it, and He is gentle enough to hold you through it.',
    ],
    verses: [
      { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', reference: 'Psalm 34:18 (NIV)' },
      { text: 'He heals the brokenhearted and binds up their wounds.', reference: 'Psalm 147:3 (NIV)' },
    ],
    prayers: [
      'God, my heart hurts. You know why. I don\'t need to explain it — You were there. Please bring healing. Not in my timeline, but in Yours. Hold me while I wait. Amen.',
    ],
    actions: [
      'Write an honest prayer about what\'s hurting you. Don\'t censor it. God can handle your raw honesty.',
    ],
  },
  joyful: {
    reflections: [
      'Joy in the Lord is a beautiful thing. It\'s not dependent on circumstances — it flows from a deep well of knowing you are loved, held, and never forgotten. Celebrate this moment.',
    ],
    verses: [
      { text: 'The joy of the Lord is your strength.', reference: 'Nehemiah 8:10 (NIV)' },
      { text: 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.', reference: 'Psalm 16:11 (NIV)' },
    ],
    prayers: [
      'Lord, thank You for this joy! Let it be contagious. Let it overflow into every part of my life today. I praise You — for who You are and for what You\'ve done. Amen.',
    ],
    actions: [
      'Worship freely today. Put on a song that makes your heart sing and let yourself fully enjoy God\'s presence.',
    ],
  },
  default: {
    reflections: [
      'Wherever you find yourself today, God is already there. He doesn\'t wait for you to have the right words or the right feelings. He simply asks you to come as you are.',
      'Today is a new invitation to walk with God — not perfectly, but honestly. He meets you in the mess, the mundane, and the miraculous alike.',
    ],
    verses: [
      { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', reference: 'Proverbs 3:5-6 (NIV)' },
      { text: 'Be still, and know that I am God.', reference: 'Psalm 46:10 (NIV)' },
      { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', reference: 'Lamentations 3:22-23 (ESV)' },
    ],
    prayers: [
      'God, I come to You today just as I am. I don\'t have the perfect prayer. But I know You hear me. Guide my steps, guard my heart, and remind me of Your love in the ordinary moments. Amen.',
    ],
    actions: [
      'Pause three times today to take a deep breath and whisper: "God, I trust You." Let those moments be small altars of faith.',
      'Read today\'s verse one more time, slowly. Write it somewhere you\'ll see it throughout the day.',
    ],
  },
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateResponse(feelings: string[], needs: string[], profile: {
  firstName?: string;
  struggle?: string;
  season?: string;
  length?: string;
}) {
  // Find the best matching emotional category
  const primaryFeeling = feelings[0] || 'default';
  const data = RESPONSE_DATABASE[primaryFeeling] || RESPONSE_DATABASE.default;

  const reflection = pickRandom(data.reflections);
  const verse = pickRandom(data.verses);
  const prayer = pickRandom(data.prayers);
  const action = pickRandom(data.actions);

  return {
    reflection,
    bible_verse: verse.text,
    bible_reference: verse.reference,
    prayer,
    faith_action: action,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { feelings, needs, freeText, profile: userProfile, checkinId } = body;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const responseContent = generateResponse(feelings, needs, userProfile);
    const today = new Date().toISOString().split('T')[0];

    // Save to database
    const { data: saved } = await supabase
      .from('daily_responses')
      .upsert({
        user_id: user.id,
        checkin_id: checkinId,
        ...responseContent,
        response_date: today,
      })
      .select()
      .single();

    return Response.json(saved || responseContent);
  } catch (error) {
    console.error('Daily response error:', error);
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
