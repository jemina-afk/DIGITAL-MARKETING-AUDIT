export const FEELING_TAGS = [
  { label: 'Peaceful', value: 'peaceful' },
  { label: 'Anxious', value: 'anxious' },
  { label: 'Grateful', value: 'grateful' },
  { label: 'Weary', value: 'weary' },
  { label: 'Hopeful', value: 'hopeful' },
  { label: 'Lonely', value: 'lonely' },
  { label: 'Joyful', value: 'joyful' },
  { label: 'Overwhelmed', value: 'overwhelmed' },
  { label: 'Restless', value: 'restless' },
  { label: 'Confident', value: 'confident' },
  { label: 'Hurt', value: 'hurt' },
  { label: 'Surrendered', value: 'surrendered' },
] as const;

export const NEED_TAGS = [
  { label: 'Comfort', value: 'comfort' },
  { label: 'Courage', value: 'courage' },
  { label: 'Clarity', value: 'clarity' },
  { label: 'Peace', value: 'peace' },
  { label: 'Strength', value: 'strength' },
  { label: 'Hope', value: 'hope' },
  { label: 'Rest', value: 'rest' },
  { label: 'Direction', value: 'direction' },
  { label: 'Healing', value: 'healing' },
  { label: 'Joy', value: 'joy' },
  { label: 'Patience', value: 'patience' },
  { label: 'Identity', value: 'identity' },
] as const;

export const MOOD_TAGS = [
  'peaceful', 'anxious', 'grateful', 'weary', 'hopeful',
  'lonely', 'joyful', 'overwhelmed', 'restless', 'confident',
  'hurt', 'surrendered', 'reflective', 'numb', 'excited',
] as const;

export const TOPIC_TAGS = [
  'anxiety', 'identity', 'waiting', 'heartbreak', 'confidence',
  'discipline', 'calling', 'loneliness', 'comparison', 'burnout',
  'prayer', 'gratitude', 'forgiveness', 'relationships', 'purpose',
  'healing', 'trust', 'surrender', 'growth', 'rest',
] as const;

export const SEASON_OPTIONS = [
  { label: 'Student life', value: 'student' },
  { label: 'Early career', value: 'early_career' },
  { label: 'New relationship', value: 'new_relationship' },
  { label: 'Engaged', value: 'engaged' },
  { label: 'Newly married', value: 'newly_married' },
  { label: 'New mom', value: 'new_mom' },
  { label: 'Single season', value: 'single_season' },
  { label: 'Career transition', value: 'career_transition' },
  { label: 'Healing season', value: 'healing' },
  { label: 'Searching & growing', value: 'searching' },
] as const;

export const STRUGGLE_OPTIONS = [
  { label: 'Anxiety & worry', value: 'anxiety' },
  { label: 'Identity & self-worth', value: 'identity' },
  { label: 'Waiting on God', value: 'waiting' },
  { label: 'Heartbreak & loss', value: 'heartbreak' },
  { label: 'Confidence', value: 'confidence' },
  { label: 'Discipline & consistency', value: 'discipline' },
  { label: 'Career & calling', value: 'calling' },
  { label: 'Loneliness', value: 'loneliness' },
  { label: 'Comparison', value: 'comparison' },
  { label: 'Burnout & exhaustion', value: 'burnout' },
] as const;

export const AGE_RANGES = [
  '18-22', '22-26', '26-30', '30-34', '34-38', '38+',
] as const;

export const FREE_PATHWAY_LIMIT = 3;
export const FREE_JOURNAL_LIMIT = 10;
