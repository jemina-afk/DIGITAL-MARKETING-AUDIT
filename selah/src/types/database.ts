export type AgeRange = '18-22' | '22-26' | '26-30' | '30-34' | '34-38' | '38+';

export type SeasonOfLife =
  | 'student' | 'early_career' | 'new_relationship' | 'engaged'
  | 'newly_married' | 'new_mom' | 'single_season' | 'career_transition'
  | 'healing' | 'searching';

export type Struggle =
  | 'anxiety' | 'identity' | 'waiting' | 'heartbreak' | 'confidence'
  | 'discipline' | 'calling' | 'loneliness' | 'comparison' | 'burnout';

export type DevotionalLength = 'short' | 'medium' | 'long';
export type PreferredFormat = 'read' | 'listen' | 'both';
export type SubscriptionTier = 'free' | 'premium';
export type EntryType = 'free_write' | 'prompted' | 'prayer' | 'gratitude';

export interface Profile {
  id: string;
  first_name: string | null;
  age_range: AgeRange | null;
  season_of_life: SeasonOfLife | null;
  top_struggle: Struggle | null;
  devotional_length: DevotionalLength;
  preferred_format: PreferredFormat;
  prayer_goals: string[];
  denomination: string | null;
  onboarding_completed: boolean;
  subscription_tier: SubscriptionTier;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface DailyCheckin {
  id: string;
  user_id: string;
  feeling_tags: string[];
  need_tags: string[];
  free_text: string | null;
  checked_in_at: string;
  created_at: string;
}

export interface DailyResponse {
  id: string;
  user_id: string;
  checkin_id: string | null;
  reflection: string;
  bible_verse: string;
  bible_reference: string;
  prayer: string;
  faith_action: string;
  response_date: string;
  created_at: string;
}

export interface JournalEntry {
  id: string;
  user_id: string;
  title: string | null;
  content: string;
  entry_type: EntryType;
  prompt_text: string | null;
  mood_tags: string[];
  topic_tags: string[];
  is_saved_prayer: boolean;
  created_at: string;
  updated_at: string;
}

export interface Pathway {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  cover_emoji: string;
  total_days: number;
  is_free: boolean;
  sort_order: number;
  created_at: string;
}

export interface PathwayDay {
  id: string;
  pathway_id: string;
  day_number: number;
  theme: string;
  scripture_text: string;
  scripture_reference: string;
  reflection: string;
  journal_prompt: string;
  prayer_prompt: string;
  created_at: string;
}

export interface UserPathwayProgress {
  id: string;
  user_id: string;
  pathway_id: string;
  current_day: number;
  completed_days: number[];
  started_at: string;
  completed_at: string | null;
}

export interface Habit {
  id: string;
  user_id: string;
  habit_date: string;
  prayed: boolean;
  journaled: boolean;
  read_scripture: boolean;
  completed_pathway_day: boolean;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  user_id: string | null;
  event_name: string;
  event_data: Record<string, unknown>;
  session_id: string | null;
  created_at: string;
}

export interface JournalPrompt {
  id: string;
  prompt_text: string;
  category: string;
  mood_context: string[];
  sort_order: number;
  is_active: boolean;
  created_at: string;
}
