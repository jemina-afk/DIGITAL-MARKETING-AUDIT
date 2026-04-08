import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// Each mood has SHORT, MEDIUM, and LONG reflections
const RESPONSE_DATABASE: Record<string, {
  reflections: { short: string[]; medium: string[]; long: string[] };
  verses: { text: string; reference: string }[];
  prayers: { short: string[]; long: string[] };
  actions: string[];
}> = {
  anxious: {
    reflections: {
      short: [
        'You were never designed to carry it all. God asks you to bring it to Him - not because it\'s trivial, but because He is strong enough to hold it.',
        'The God who holds the stars is holding you right now. You don\'t have to figure everything out today.',
      ],
      medium: [
        'Anxiety often whispers that we need to hold everything together. But Scripture reminds us that the God who holds the stars in place is the same God holding you right now. You don\'t have to carry this alone. Today is not about fixing the worry. It\'s about naming it honestly and placing it in hands that won\'t drop it.',
        'When worry grips your heart, remember - God already knows the outcome. He isn\'t surprised by what surprises you. Your role today isn\'t to figure it all out. It\'s simply to trust the One who already has. That doesn\'t mean the feelings disappear. It means you don\'t carry them alone.',
      ],
      long: [
        'Anxiety tells you that if you stop worrying, everything will fall apart. It disguises itself as responsibility, as care, as preparation. But the truth is quieter: you were never designed to carry it all. God doesn\'t ask you to hand over your concerns because they\'re trivial - He asks because they matter deeply, and He is the only one strong enough to hold them without breaking.\n\nToday is not about fixing the worry. It\'s about naming it honestly and placing it in hands that won\'t drop it. You are not failing by feeling anxious. You are human. And God meets you exactly there. He doesn\'t stand at a distance waiting for you to get it together. He draws close to the anxious heart and says: "I\'m here. Let Me carry this."',
        'When worry grips your heart, remember - God already knows the outcome. He isn\'t surprised by what surprises you. Your role today isn\'t to figure it all out. It\'s simply to trust the One who already has.\n\nThat doesn\'t mean the feelings disappear instantly. It means you have a place to put them. Prayer isn\'t a magic formula that removes anxiety - it\'s a conversation that reminds you who is actually in charge. And He is good. He is faithful. He has never once dropped something entrusted to Him. Your worries are safe in His hands - safer than they\'ve ever been in yours.',
      ],
    },
    verses: [
      { text: 'Cast all your anxiety on him because he cares for you.', reference: '1 Peter 5:7 (NIV)' },
      { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', reference: 'Philippians 4:6-7 (NIV)' },
      { text: 'When anxiety was great within me, your consolation brought me joy.', reference: 'Psalm 94:19 (NIV)' },
    ],
    prayers: {
      short: [
        'Lord, take what I cannot hold. Quiet my mind. I trust You with today. Amen.',
        'Father, I release the worry I\'ve been gripping. Your peace is enough. Amen.',
      ],
      long: [
        'Lord, I bring You every anxious thought - the ones I can name and the ones I can\'t. I don\'t fully understand my own worry, but You do. Meet me here. Quiet the noise. Remind me that You are near, and You are good. I choose to trust You today, even when my feelings don\'t catch up. Amen.',
        'Father, my heart feels heavy with worry. I release control of what I cannot change. Fill me with Your peace - the kind that doesn\'t make sense but holds everything together. I trust You with today. Not because I feel brave, but because You are faithful. Amen.',
      ],
    },
    actions: [
      'Write down three things worrying you. Next to each one, write: "God, I trust You with this." Then close your journal and take three deep breaths.',
      'Take a five-minute walk outside. With each step, silently pray: "You are with me."',
      'Send a text to someone you trust saying how you really feel today. Let someone carry this with you.',
    ],
  },
  overwhelmed: {
    reflections: {
      short: [
        'God doesn\'t ask you to power through. He asks you to pause. You weren\'t designed to carry it all alone.',
      ],
      medium: [
        'When everything feels like too much, God doesn\'t ask you to power through. He asks you to pause. To breathe. To let Him lead. You weren\'t designed to carry it all - you were designed to walk with the One who can. Today, give yourself permission to do less.',
      ],
      long: [
        'When everything feels like too much, God doesn\'t ask you to power through. He asks you to pause. To breathe. To let Him lead. You weren\'t designed to carry it all - you were designed to walk with the One who can.\n\nFeeling overwhelmed isn\'t a sign of weakness - it\'s a sign you\'re carrying more than you were meant to carry alone. God sees every responsibility, every pressure, every expectation weighing on you. And He doesn\'t say "try harder." He says "come to Me." Today, give yourself permission to do less and trust more.',
      ],
    },
    verses: [
      { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', reference: 'Matthew 11:28 (NIV)' },
      { text: 'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.', reference: 'Psalm 23:1-3 (NIV)' },
    ],
    prayers: {
      short: [
        'Jesus, order my steps today. Show me the one next thing. Amen.',
      ],
      long: [
        'Jesus, I\'m overwhelmed. I don\'t even know where to start today. But You do. Order my steps. Quiet my mind. Show me the one thing I need to do next - and give me grace for the rest. I don\'t have to do it all. I just have to follow You. Amen.',
      ],
    },
    actions: [
      'Choose one thing from your to-do list that can wait. Cross it off for today. Give yourself permission to do less.',
      'Set a timer for 10 minutes. Sit in silence with no phone, no agenda. Just breathe and let God be near.',
    ],
  },
  grateful: {
    reflections: {
      short: [
        'A grateful heart is fertile ground for faith. Let this feeling deepen as you trace God\'s hand through your story.',
      ],
      medium: [
        'A grateful heart is fertile ground for faith. When you pause to notice what God has already done, it becomes easier to trust Him with what\'s still to come. Gratitude doesn\'t ignore the hard - it chooses to see God in the middle of it. Let this moment of thankfulness be an anchor.',
      ],
      long: [
        'A grateful heart is fertile ground for faith. When you pause to notice what God has already done, it becomes easier to trust Him with what\'s still to come. Gratitude doesn\'t ignore the hard - it chooses to see God in the middle of it.\n\nThe fact that you\'re feeling grateful today is itself a gift. Not everyone can see through the fog to notice goodness. Gratitude rewires the soul - it shifts your posture from scarcity to abundance, from striving to receiving. Let this feeling deepen as you trace God\'s hand through your story. He has been faithful. He is being faithful. He will continue to be faithful.',
      ],
    },
    verses: [
      { text: 'Give thanks in all circumstances; for this is God\'s will for you in Christ Jesus.', reference: '1 Thessalonians 5:18 (NIV)' },
      { text: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights.', reference: 'James 1:17 (NIV)' },
    ],
    prayers: {
      short: [
        'Father, thank You. Open my eyes wider to Your goodness today. Amen.',
      ],
      long: [
        'Father, thank You. For the big things I can name and the quiet ones I almost missed. Open my eyes even wider to Your goodness today. Let gratitude overflow from my heart into every conversation and moment. You are so good to me. Amen.',
      ],
    },
    actions: [
      'Text someone today and tell them one specific thing you\'re grateful for about them.',
      'Write a list of 5 "small mercies" you noticed this week - things that could have gone unnoticed but were quietly good.',
    ],
  },
  lonely: {
    reflections: {
      short: [
        'Being lonely doesn\'t mean you are alone. God promises He will never leave you nor forsake you. Let that truth sit deeper than the feeling.',
      ],
      medium: [
        'Loneliness can feel like silence - but God is never silent when it comes to you. Even when no one else sees what you\'re going through, He is intimately aware of every quiet ache, every moment you feel unseen. Being lonely doesn\'t mean you are alone. God promises He will never leave you nor forsake you.',
      ],
      long: [
        'Loneliness can feel like silence - but God is never silent when it comes to you. Even when no one else sees what you\'re going through, He is intimately aware of every tear, every quiet ache, every moment you feel unseen.\n\nBeing lonely doesn\'t mean you are alone. It means your heart is longing for connection - and that longing itself is holy. God wired you for relationship. The ache you feel is not a flaw; it\'s a signal. And while human connection matters deeply, there is a companionship God offers that no person can replicate. He promises He will never leave you nor forsake you. Today, let that truth sit deeper than the feeling.',
      ],
    },
    verses: [
      { text: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.', reference: 'Deuteronomy 31:8 (NIV)' },
      { text: 'Turn to me and be gracious to me, for I am lonely and afflicted.', reference: 'Psalm 25:16 (NIV)' },
    ],
    prayers: {
      short: [
        'Lord, I feel alone today. Draw close. Remind me I belong to You. Amen.',
      ],
      long: [
        'Lord, I feel alone today. I know in my head that You are near, but my heart needs to feel it. Draw close. Send comfort through unexpected places. Remind me that I belong to You, and I am never truly alone. Meet me in the silence. Amen.',
      ],
    },
    actions: [
      'Reach out to one person today - even a small message. Connection doesn\'t have to be deep to be real.',
      'Write a letter to God as if He were sitting across from you. Tell Him everything.',
    ],
  },
  peaceful: {
    reflections: {
      short: [
        'This peace you feel isn\'t just the absence of trouble. It\'s the presence of God. Savour it.',
      ],
      medium: [
        'Peace is a rare gift - and the fact that you\'re experiencing it today is worth noticing. Let this be an anchor. When harder days come, you can return to this moment and remember: God is faithful to give peace. This peace isn\'t just the absence of trouble. It\'s the presence of God.',
      ],
      long: [
        'Peace is a rare gift - and the fact that you\'re experiencing it today is worth noticing. Let this be an anchor. When harder days come, you can return to this moment and remember: God is faithful to give peace.\n\nThis peace you feel isn\'t just the absence of trouble. It\'s the presence of God. It\'s the fruit of trust - whether you realised you were trusting or not. Something in your spirit has settled, and that is holy ground. Savour it. Rest in it. Let it strengthen you for whatever comes next. And know this: the God who gave you peace today is the same God who will meet you in the storm tomorrow.',
      ],
    },
    verses: [
      { text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', reference: 'John 14:27 (NIV)' },
      { text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.', reference: 'Isaiah 26:3 (NIV)' },
    ],
    prayers: {
      short: [
        'Thank You, Lord, for this peace. Guard it in my heart today. Amen.',
      ],
      long: [
        'Thank You, Lord, for this peace. It\'s a gift I don\'t take lightly. Guard my heart in this place. Let this peace spill over into every part of my day and into the lives of those around me. You are so good. Amen.',
      ],
    },
    actions: [
      'Journal about what contributed to this feeling of peace. What rhythms or choices brought you here?',
      'Share this peace with someone. Pray for a friend going through a hard season.',
    ],
  },
  hopeful: {
    reflections: {
      short: [
        'Hope isn\'t wishful thinking - it\'s anchored in a God who has proven Himself faithful. Your spirit is catching a glimpse of what God is doing.',
      ],
      medium: [
        'Hope isn\'t wishful thinking - it\'s anchored in a God who has proven Himself faithful again and again. When you feel hopeful, it\'s because your spirit is catching a glimpse of what God is doing behind the scenes. Hold onto this. Let it fuel your faith today.',
      ],
      long: [
        'Hope isn\'t wishful thinking - it\'s anchored in a God who has proven Himself faithful again and again. When you feel hopeful, it\'s because your spirit is catching a glimpse of what God is doing behind the scenes.\n\nHope is the quiet confidence that God is who He says He is and will do what He says He\'ll do. It doesn\'t mean you know how the story ends - it means you know the Author. And He writes redemption stories. Hold onto this feeling. Water it with prayer and gratitude. Let it fuel your faith for the days ahead when hope feels harder to find.',
      ],
    },
    verses: [
      { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', reference: 'Jeremiah 29:11 (NIV)' },
      { text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.', reference: 'Romans 15:13 (NIV)' },
    ],
    prayers: {
      short: [
        'God, thank You for planting hope in my heart. Help me hold onto it. Amen.',
      ],
      long: [
        'God, thank You for planting hope in my heart. Water it. Grow it. Help me hold onto this expectation even when circumstances try to steal it. I believe You are working - even in what I cannot yet see. Amen.',
      ],
    },
    actions: [
      'Write down one thing you\'re hoping for. Place it somewhere you\'ll see daily as a reminder to keep believing.',
    ],
  },
  weary: {
    reflections: {
      short: [
        'Weariness isn\'t failure - it\'s a signal you\'ve been carrying something heavy. God draws near to the tired and offers rest no amount of sleep can give.',
      ],
      medium: [
        'Weariness isn\'t failure - it\'s a signal that you\'ve been carrying something heavy. God doesn\'t condemn your tiredness. He draws near to the weary and offers rest that no amount of sleep can give. Today, you don\'t need to push harder. You need to receive.',
      ],
      long: [
        'Weariness isn\'t failure - it\'s a signal that you\'ve been carrying something heavy. God doesn\'t condemn your tiredness. He doesn\'t look at your exhaustion and say "try harder." He says "come to Me."\n\nThere is a rest that goes deeper than sleep - a soul-rest that comes from trusting that God is working even when you cannot. You have been faithful. You have been showing up. And now it\'s okay to let someone else - the God of the universe - carry the weight for a while. Today, you don\'t need to push harder. You need to receive.',
      ],
    },
    verses: [
      { text: 'He gives strength to the weary and increases the power of the weak.', reference: 'Isaiah 40:29 (NIV)' },
      { text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', reference: 'Galatians 6:9 (NIV)' },
    ],
    prayers: {
      short: [
        'Lord, I\'m tired. Carry what I can\'t. Restore what feels depleted. Amen.',
      ],
      long: [
        'Lord, I\'m tired - in my body, my mind, and my spirit. I don\'t need to understand why right now. I just need Your strength. Carry what I can\'t. Restore what feels depleted. Meet me in the exhaustion with a grace that doesn\'t demand more from me. Amen.',
      ],
    },
    actions: [
      'Give yourself permission to rest without guilt today. Cancel one non-essential thing.',
    ],
  },
  hurt: {
    reflections: {
      short: [
        'Pain is real, and God doesn\'t dismiss it. He is close to the brokenhearted. Whatever caused this hurt - He sees it and He is gentle enough to hold you through it.',
      ],
      medium: [
        'Pain is real, and God doesn\'t dismiss it. He is close to the brokenhearted and saves those who are crushed in spirit. Whatever caused this hurt - He sees it, He knows it, and He is gentle enough to hold you through it. You don\'t have to perform strength right now.',
      ],
      long: [
        'Pain is real, and God doesn\'t dismiss it. He doesn\'t say "get over it" or "look on the bright side." He is close to the brokenhearted and saves those who are crushed in spirit. Whatever caused this hurt - He sees it, He knows it, and He is gentle enough to hold you through it.\n\nYou don\'t have to perform strength right now. You don\'t have to have a lesson or a silver lining. Sometimes faith looks like sitting in the pain and trusting that God is sitting in it with you. He is not uncomfortable with your tears. He is not impatient with your process. He is right here.',
      ],
    },
    verses: [
      { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', reference: 'Psalm 34:18 (NIV)' },
      { text: 'He heals the brokenhearted and binds up their wounds.', reference: 'Psalm 147:3 (NIV)' },
    ],
    prayers: {
      short: [
        'God, my heart hurts. Hold me while I heal. Amen.',
      ],
      long: [
        'God, my heart hurts. You know why. I don\'t need to explain it - You were there. Please bring healing. Not in my timeline, but in Yours. Hold me while I wait. Hold me while I grieve. Hold me until I can breathe again. Amen.',
      ],
    },
    actions: [
      'Write an honest prayer about what\'s hurting you. Don\'t censor it. God can handle your raw honesty.',
    ],
  },
  joyful: {
    reflections: {
      short: [
        'Joy is a gift. It\'s not dependent on circumstances - it flows from knowing you are loved. Celebrate this moment.',
      ],
      medium: [
        'Joy in the Lord is a beautiful thing. It\'s not dependent on circumstances - it flows from a deep well of knowing you are loved, held, and never forgotten. Celebrate this moment. Let it fill you. And let it remind you of God\'s goodness.',
      ],
      long: [
        'Joy in the Lord is a beautiful thing. It\'s not dependent on circumstances - it flows from a deep well of knowing you are loved, held, and never forgotten.\n\nThis joy you feel today is not random. It is a gift from a generous God who delights in your delight. Don\'t rush past it. Don\'t qualify it. Don\'t wonder if you deserve it. You don\'t - and that\'s what makes it grace. Celebrate this moment. Let it fill you completely. And let it become a memorial stone - a moment you can return to and say "God was good to me here."',
      ],
    },
    verses: [
      { text: 'The joy of the Lord is your strength.', reference: 'Nehemiah 8:10 (NIV)' },
      { text: 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand.', reference: 'Psalm 16:11 (NIV)' },
    ],
    prayers: {
      short: [
        'Lord, thank You for this joy! Let it overflow into everything today. Amen.',
      ],
      long: [
        'Lord, thank You for this joy! Let it be contagious. Let it overflow into every part of my life today. I praise You - for who You are and for what You\'ve done. You are good, and I will celebrate You. Amen.',
      ],
    },
    actions: [
      'Put on a worship song that makes your heart sing. Let yourself fully enjoy God\'s presence.',
    ],
  },
  default: {
    reflections: {
      short: [
        'Wherever you are today, God is already there. He simply asks you to come as you are.',
      ],
      medium: [
        'Wherever you find yourself today, God is already there. He doesn\'t wait for you to have the right words or the right feelings. He simply asks you to come as you are. Today is a new invitation to walk with Him - not perfectly, but honestly.',
      ],
      long: [
        'Wherever you find yourself today, God is already there. He doesn\'t wait for you to have the right words or the right feelings. He simply asks you to come as you are.\n\nToday is a new invitation to walk with God - not perfectly, but honestly. He meets you in the mess, the mundane, and the miraculous alike. You don\'t need a dramatic encounter to make today meaningful. Sometimes the holiest moment is the quiet one - the whispered prayer, the paused breath, the decision to trust Him with one more day. That is enough. You are enough. And He is more than enough.',
      ],
    },
    verses: [
      { text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', reference: 'Proverbs 3:5-6 (NIV)' },
      { text: 'Be still, and know that I am God.', reference: 'Psalm 46:10 (NIV)' },
      { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', reference: 'Lamentations 3:22-23 (ESV)' },
    ],
    prayers: {
      short: [
        'God, guide my steps today. I trust You. Amen.',
      ],
      long: [
        'God, I come to You today just as I am. I don\'t have the perfect prayer. But I know You hear me. Guide my steps, guard my heart, and remind me of Your love in the ordinary moments. I want to walk with You today - not perfectly, but faithfully. Amen.',
      ],
    },
    actions: [
      'Pause three times today to take a deep breath and whisper: "God, I trust You."',
      'Read today\'s verse one more time, slowly. Write it somewhere you\'ll see it throughout the day.',
    ],
  },
};

// ============================================================
// SEASON-SPECIFIC CONTEXT
// ============================================================
const SEASON_CONTEXT: Record<string, { opener: string; prayerLine: string }> = {
  student: {
    opener: 'In this season of learning, growing, and figuring out who you\'re becoming',
    prayerLine: 'as she navigates school, friendships, and the uncertainty of what comes next',
  },
  early_career: {
    opener: 'As you pour yourself into building a career and finding your footing in the working world',
    prayerLine: 'as she works hard and wonders if she\'s on the right path',
  },
  new_relationship: {
    opener: 'In this season of new love, vulnerability, and learning to trust another person',
    prayerLine: 'as she opens her heart and navigates the beauty and risk of new love',
  },
  engaged: {
    opener: 'As you prepare for marriage - with all its joy, planning, and moments of overwhelm',
    prayerLine: 'as she prepares for this new chapter and all it will ask of her',
  },
  newly_married: {
    opener: 'In these early days of building a life with someone - the adjustments, the joys, the surprises',
    prayerLine: 'as she learns what it means to share a life and grow alongside another person',
  },
  new_mom: {
    opener: 'In these beautiful, exhausting, tender days of new motherhood - where sleep is scarce and love is overwhelming',
    prayerLine: 'as she gives so much of herself to this tiny life and sometimes forgets she needs care too',
  },
  single_season: {
    opener: 'In this season of singleness - which can feel like freedom and loneliness in the same breath',
    prayerLine: 'as she walks this season and trusts that her completeness is not found in another person',
  },
  career_transition: {
    opener: 'In this uncertain space between what was and what\'s next - where the ground beneath you feels unsteady',
    prayerLine: 'as she steps into the unknown and trusts You with a future she can\'t yet see',
  },
  healing: {
    opener: 'As you walk through this season of healing - some days forward, some days sideways, all days held',
    prayerLine: 'as she heals at her own pace, not the world\'s timeline',
  },
  searching: {
    opener: 'In this season of searching, questioning, and reaching for something you can\'t quite name',
    prayerLine: 'as she looks for meaning, direction, and a deeper sense of who she is in You',
  },
};

// ============================================================
// STRUGGLE-SPECIFIC ADDITIONS
// ============================================================
const STRUGGLE_VERSES: Record<string, { text: string; reference: string }[]> = {
  anxiety: [
    { text: 'Cast all your anxiety on him because he cares for you.', reference: '1 Peter 5:7 (NIV)' },
    { text: 'When anxiety was great within me, your consolation brought me joy.', reference: 'Psalm 94:19 (NIV)' },
  ],
  identity: [
    { text: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', reference: '1 John 3:1 (NIV)' },
    { text: 'I praise you because I am fearfully and wonderfully made.', reference: 'Psalm 139:14 (NIV)' },
  ],
  waiting: [
    { text: 'Wait for the Lord; be strong and take heart and wait for the Lord.', reference: 'Psalm 27:14 (NIV)' },
    { text: 'But those who hope in the Lord will renew their strength.', reference: 'Isaiah 40:31 (NIV)' },
  ],
  heartbreak: [
    { text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', reference: 'Psalm 34:18 (NIV)' },
    { text: 'He heals the brokenhearted and binds up their wounds.', reference: 'Psalm 147:3 (NIV)' },
  ],
  confidence: [
    { text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.', reference: '2 Timothy 1:7 (NIV)' },
  ],
  discipline: [
    { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning.', reference: 'Lamentations 3:22-23 (ESV)' },
  ],
  calling: [
    { text: 'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.', reference: 'Ephesians 2:10 (NIV)' },
  ],
  loneliness: [
    { text: 'The Lord himself goes before you and will be with you; he will never leave you nor forsake you.', reference: 'Deuteronomy 31:8 (NIV)' },
  ],
  comparison: [
    { text: 'Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else.', reference: 'Galatians 6:4 (NIV)' },
  ],
  burnout: [
    { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', reference: 'Matthew 11:28 (NIV)' },
  ],
};

// ============================================================
// FREE TEXT ACKNOWLEDGMENT
// ============================================================
function buildFreeTextAcknowledgment(name: string, freeText: string): string {
  const text = freeText.trim().toLowerCase();
  const nameStr = name || 'friend';

  // Detect themes in what they wrote
  if (text.match(/mom|baby|child|kid|parent|sleep|tired|exhaust/)) {
    return `${nameStr}, what you shared about the demands of motherhood - that\'s real. God sees every sleepless night, every moment you pour out for your little one. He doesn\'t overlook the weariness behind your strength.`;
  }
  if (text.match(/boyfriend|girlfriend|relationship|dating|breakup|broke up|ex |him |he /)) {
    return `${nameStr}, what you shared about your heart and this relationship - God holds that so tenderly. He is not distant from the ache of love, whether it\'s longing, loss, or confusion. He meets you right where the hurt is.`;
  }
  if (text.match(/work|job|boss|career|fired|laid off|interview|promotion/)) {
    return `${nameStr}, what you wrote about your work situation - that weight is real. God cares about your career, your provision, and the dignity of how you spend your days. He doesn\'t separate "spiritual life" from "work life." It\'s all His.`;
  }
  if (text.match(/friend|lonely|alone|no one|nobody|isolated/)) {
    return `${nameStr}, the loneliness you described - God doesn\'t dismiss it. He created you for connection, and when it\'s missing, the ache is real. You are not invisible to Him, even when you feel invisible to the world.`;
  }
  if (text.match(/sick|health|body|pain|doctor|diagnosis|hospital/)) {
    return `${nameStr}, what you shared about your body and your health - God is close to you in this. He is not afraid of your pain, your questions, or your fear. He holds your body and your spirit with equal tenderness.`;
  }
  if (text.match(/anxious|worry|scared|afraid|panic|can\'t stop thinking/)) {
    return `${nameStr}, the anxiety you described is not weakness - it\'s your heart signalling that it\'s carrying more than it was designed to hold alone. God doesn\'t judge your worry. He invites you to bring every last thought to Him.`;
  }
  if (text.match(/sad|cry|crying|depressed|hopeless|give up|done/)) {
    return `${nameStr}, your honesty about how heavy things feel right now is brave. God is closest to the brokenhearted. He doesn\'t need you to be strong for Him - He is strong for you. If professional support would help, please reach out to a counselor or pastor.`;
  }
  if (text.match(/family|parent|mother|father|sister|brother|husband|wife/)) {
    return `${nameStr}, what you shared about your family - God knows the complexity of the people we love most. Family can be our greatest comfort and our deepest wound, sometimes in the same day. He holds all of it.`;
  }
  if (text.match(/church|faith|God|pray|believe|doubt|question/)) {
    return `${nameStr}, your honesty about where you are with God right now - He can handle it. He is not threatened by your questions or offended by your doubts. He would rather have your honest struggle than polished silence.`;
  }
  if (text.match(/future|what if|don\'t know|uncertain|confused|lost/)) {
    return `${nameStr}, the uncertainty you described is one of the hardest things to sit with. Not knowing the next step, not having the answers - it takes real courage to stay present when the future feels blank. God holds what you cannot see.`;
  }
  // Generic but still personal
  return `${nameStr}, thank you for sharing what\'s on your heart. What you wrote matters - to you and to God. He doesn\'t skim past your words. He reads between the lines of everything you\'re feeling.`;
}

// ============================================================
// MAIN GENERATOR
// ============================================================
function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateResponse(
  feelings: string[],
  needs: string[],
  freeText: string | null,
  profile: {
    firstName?: string;
    struggle?: string;
    season?: string;
    length?: string;
    format?: string;
  }
) {
  const primaryFeeling = feelings[0] || 'default';
  const data = RESPONSE_DATABASE[primaryFeeling] || RESPONSE_DATABASE.default;
  const length = profile.length || 'medium';
  const name = profile.firstName || 'friend';

  // 1. Pick base reflection
  const reflectionPool = data.reflections[length as keyof typeof data.reflections] || data.reflections.medium;
  let reflection = pickRandom(reflectionPool);

  // 2. Add season-specific opening if available
  const seasonCtx = profile.season ? SEASON_CONTEXT[profile.season] : null;
  if (seasonCtx && length !== 'short') {
    reflection = `${seasonCtx.opener}, what you\'re feeling today makes sense.\n\n${reflection}`;
  }

  // 3. Add free text acknowledgment if provided
  if (freeText && freeText.trim().length > 10) {
    const ack = buildFreeTextAcknowledgment(name, freeText);
    reflection = `${ack}\n\n${reflection}`;
  } else if (length !== 'short') {
    // Add name to the beginning even without free text
    reflection = `${name}, ${reflection.charAt(0).toLowerCase()}${reflection.slice(1)}`;
  }

  // 4. Pick verse - prefer struggle-specific if available, with fallback to mood
  let verse;
  const struggleVerses = profile.struggle ? STRUGGLE_VERSES[profile.struggle] : null;
  if (struggleVerses && Math.random() > 0.4) {
    // 60% chance to use struggle-specific verse
    verse = pickRandom(struggleVerses);
  } else {
    verse = pickRandom(data.verses);
  }

  // 5. Build personalised prayer
  const prayerPool = length === 'short' ? data.prayers.short : data.prayers.long;
  let prayer = pickRandom(prayerPool);

  // Add season-specific prayer line
  if (seasonCtx) {
    prayer = prayer.replace('Amen.', `Be with ${name} ${seasonCtx.prayerLine}. Amen.`);
  }

  // 6. Pick action
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

    const responseContent = generateResponse(feelings, needs, freeText, userProfile);
    const today = new Date().toISOString().split('T')[0];

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
