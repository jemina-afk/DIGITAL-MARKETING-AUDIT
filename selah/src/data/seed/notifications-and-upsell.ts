// ============================================================
// 20 PUSH NOTIFICATION IDEAS
// ============================================================
// Tone: warm, inviting, never guilt-inducing, never "you missed
// your streak!" energy. Should feel like a gentle friend, not a
// demanding app.

export const PUSH_NOTIFICATIONS = [
  // Morning invitations
  { text: 'Good morning. God has a word for you today.', timing: 'morning', category: 'daily_invite' },
  { text: 'A new day, a new mercy. Ready for yours?', timing: 'morning', category: 'daily_invite' },
  { text: 'Before the noise starts — take a moment with God.', timing: 'morning', category: 'daily_invite' },
  { text: 'Your daily reflection is ready. It was made for today.', timing: 'morning', category: 'daily_invite' },
  { text: 'You don\'t need to have it together to open this app. Come as you are.', timing: 'morning', category: 'daily_invite' },

  // Gentle check-ins
  { text: 'How are you really doing today?', timing: 'midday', category: 'checkin' },
  { text: 'Pause. Breathe. God is near.', timing: 'afternoon', category: 'checkin' },
  { text: 'Carrying something heavy? You don\'t have to hold it alone.', timing: 'afternoon', category: 'checkin' },

  // Journal nudges
  { text: 'Sometimes you don\'t know what you feel until you write it. Your journal is waiting.', timing: 'evening', category: 'journal' },
  { text: 'A new journaling prompt is ready — this one might surprise you.', timing: 'evening', category: 'journal' },
  { text: 'Processing your day with God is one of the kindest things you can do for yourself.', timing: 'evening', category: 'journal' },

  // Pathway encouragement
  { text: 'Day 3 of your pathway is ready. You\'re building something beautiful.', timing: 'morning', category: 'pathway' },
  { text: 'You\'re halfway through your pathway. Keep going — the best is ahead.', timing: 'morning', category: 'pathway' },

  // Streak encouragement (grace-based)
  { text: 'You\'ve shown up for 7 days straight. That consistency is worship.', timing: 'morning', category: 'streak' },
  { text: 'Missed a day? That\'s okay. Grace is new this morning. Welcome back.', timing: 'morning', category: 'return' },

  // Weekend / rest
  { text: 'It\'s okay to rest today. God Himself modelled it.', timing: 'morning', category: 'weekend' },
  { text: 'No agenda. Just presence. God is available whenever you are.', timing: 'morning', category: 'weekend' },

  // Scripture teasers
  { text: '"Be still, and know that I am God." — There\'s a reflection waiting for you.', timing: 'morning', category: 'verse' },
  { text: '"His mercies are new every morning." Today\'s mercy has your name on it.', timing: 'morning', category: 'verse' },
  { text: 'There\'s a verse today that feels like it was written for exactly what you\'re going through.', timing: 'morning', category: 'verse' },
];


// ============================================================
// 10 PREMIUM UPSELL LINES
// ============================================================
// Tone: calm, elegant, never pushy. Should feel like an invitation,
// not a sales pitch. The free tier is generous — premium is for
// the woman who wants to go deeper.

export const PREMIUM_UPSELL_LINES = [
  {
    headline: 'Go deeper',
    body: 'Unlimited journaling, all 7 pathways, and personalised reflections that meet you exactly where you are.',
    context: 'general',
  },
  {
    headline: 'Your faith journey deserves more room',
    body: 'With Selah Premium, there are no limits on how deep you can go — in journaling, in pathways, or in personalised scripture.',
    context: 'journal_limit',
  },
  {
    headline: 'This pathway was made for you',
    body: 'Unlock all 7 devotional pathways and discover the one that speaks directly to your season.',
    context: 'pathway_locked',
  },
  {
    headline: 'Keep writing. Keep healing.',
    body: 'Your journal is sacred space. With Premium, it\'s unlimited — no cap on entries, no cap on growth.',
    context: 'journal_limit',
  },
  {
    headline: 'A fuller experience, at your pace',
    body: 'Premium gives you access to everything Selah offers — deeper reflections, saved prayers, and every pathway. Cancel anytime.',
    context: 'general',
  },
  {
    headline: 'More of what already matters to you',
    body: 'You\'ve been showing up faithfully. Premium removes the limits so nothing stands between you and your next step with God.',
    context: 'active_user',
  },
  {
    headline: 'Invest in the part of your life that matters most',
    body: 'For less than a coffee a week, Selah Premium gives you unlimited access to guided devotional content, journaling, and prayer tools.',
    context: 'pricing',
  },
  {
    headline: 'Your soul is worth the investment',
    body: 'Premium unlocks the full Selah experience — because spiritual growth shouldn\'t have a paywall, but quality content needs your support.',
    context: 'general',
  },
  {
    headline: 'Start your free trial',
    body: '7 days to explore everything. No commitment. Cancel anytime. Your heart will thank you.',
    context: 'trial',
  },
  {
    headline: 'Ready for the full journey?',
    body: 'You\'ve tasted what Selah can do. Premium takes it further — with content designed to meet you in every season of faith and life.',
    context: 'post_pathway',
  },
];
