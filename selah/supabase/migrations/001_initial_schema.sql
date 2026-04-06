-- Selah MVP Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- PROFILES (extends Supabase auth.users)
-- ============================================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  first_name text,
  age_range text check (age_range in ('18-22', '22-26', '26-30', '30-34', '34-38', '38+')),
  season_of_life text check (season_of_life in (
    'student', 'early_career', 'new_relationship', 'engaged', 'newly_married',
    'new_mom', 'single_season', 'career_transition', 'healing', 'searching'
  )),
  top_struggle text check (top_struggle in (
    'anxiety', 'identity', 'waiting', 'heartbreak', 'confidence',
    'discipline', 'calling', 'loneliness', 'comparison', 'burnout'
  )),
  devotional_length text check (devotional_length in ('short', 'medium', 'long'))
    default 'medium',
  preferred_format text check (preferred_format in ('read', 'listen', 'both'))
    default 'read',
  prayer_goals text[] default '{}',
  denomination text,
  onboarding_completed boolean default false,
  subscription_tier text check (subscription_tier in ('free', 'premium'))
    default 'free',
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================================
-- DAILY CHECK-INS
-- ============================================================
create table public.daily_checkins (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  feeling_tags text[] not null default '{}',
  need_tags text[] not null default '{}',
  free_text text,
  checked_in_at date default current_date,
  created_at timestamptz default now(),
  unique(user_id, checked_in_at)
);

-- ============================================================
-- DAILY RESPONSES (generated devotional content)
-- ============================================================
create table public.daily_responses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  checkin_id uuid references public.daily_checkins(id) on delete cascade,
  reflection text not null,
  bible_verse text not null,
  bible_reference text not null,
  prayer text not null,
  faith_action text not null,
  response_date date default current_date,
  created_at timestamptz default now()
);

-- ============================================================
-- JOURNAL ENTRIES
-- ============================================================
create table public.journal_entries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text,
  content text not null,
  entry_type text check (entry_type in ('free_write', 'prompted', 'prayer', 'gratitude'))
    default 'free_write',
  prompt_text text,
  mood_tags text[] default '{}',
  topic_tags text[] default '{}',
  is_saved_prayer boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================================
-- PATHWAYS (curated devotional series)
-- ============================================================
create table public.pathways (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  description text not null,
  category text not null,
  cover_emoji text default '✨',
  total_days integer not null default 7,
  is_free boolean default false,
  sort_order integer default 0,
  created_at timestamptz default now()
);

-- ============================================================
-- PATHWAY DAYS (individual entries within a pathway)
-- ============================================================
create table public.pathway_days (
  id uuid default uuid_generate_v4() primary key,
  pathway_id uuid references public.pathways(id) on delete cascade not null,
  day_number integer not null,
  theme text not null,
  scripture_text text not null,
  scripture_reference text not null,
  reflection text not null,
  journal_prompt text not null,
  prayer_prompt text not null,
  created_at timestamptz default now(),
  unique(pathway_id, day_number)
);

-- ============================================================
-- USER PATHWAY PROGRESS
-- ============================================================
create table public.user_pathway_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  pathway_id uuid references public.pathways(id) on delete cascade not null,
  current_day integer default 1,
  completed_days integer[] default '{}',
  started_at timestamptz default now(),
  completed_at timestamptz,
  unique(user_id, pathway_id)
);

-- ============================================================
-- HABITS (daily faith habit tracking)
-- ============================================================
create table public.habits (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  habit_date date default current_date,
  prayed boolean default false,
  journaled boolean default false,
  read_scripture boolean default false,
  completed_pathway_day boolean default false,
  created_at timestamptz default now(),
  unique(user_id, habit_date)
);

-- ============================================================
-- ANALYTICS EVENTS
-- ============================================================
create table public.analytics_events (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete set null,
  event_name text not null,
  event_data jsonb default '{}',
  session_id text,
  created_at timestamptz default now()
);

-- ============================================================
-- JOURNAL PROMPTS (admin-managed content)
-- ============================================================
create table public.journal_prompts (
  id uuid default uuid_generate_v4() primary key,
  prompt_text text not null,
  category text not null,
  mood_context text[] default '{}',
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.profiles enable row level security;
alter table public.daily_checkins enable row level security;
alter table public.daily_responses enable row level security;
alter table public.journal_entries enable row level security;
alter table public.pathways enable row level security;
alter table public.pathway_days enable row level security;
alter table public.user_pathway_progress enable row level security;
alter table public.habits enable row level security;
alter table public.analytics_events enable row level security;
alter table public.journal_prompts enable row level security;

-- Profiles: users can read/update their own
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

-- Daily check-ins: users can CRUD their own
create policy "Users can manage own checkins" on public.daily_checkins
  for all using (auth.uid() = user_id);

-- Daily responses: users can read their own
create policy "Users can view own responses" on public.daily_responses
  for select using (auth.uid() = user_id);
create policy "Users can insert own responses" on public.daily_responses
  for insert with check (auth.uid() = user_id);

-- Journal entries: users can CRUD their own
create policy "Users can manage own journal entries" on public.journal_entries
  for all using (auth.uid() = user_id);

-- Pathways: everyone can read
create policy "Pathways are viewable by everyone" on public.pathways
  for select using (true);

-- Pathway days: everyone can read
create policy "Pathway days are viewable by everyone" on public.pathway_days
  for select using (true);

-- User pathway progress: users can manage their own
create policy "Users can manage own pathway progress" on public.user_pathway_progress
  for all using (auth.uid() = user_id);

-- Habits: users can manage their own
create policy "Users can manage own habits" on public.habits
  for all using (auth.uid() = user_id);

-- Analytics: users can insert their own events
create policy "Users can insert own analytics" on public.analytics_events
  for insert with check (auth.uid() = user_id);

-- Journal prompts: everyone can read
create policy "Journal prompts are viewable by everyone" on public.journal_prompts
  for select using (true);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger journal_entries_updated_at
  before update on public.journal_entries
  for each row execute procedure public.handle_updated_at();

-- ============================================================
-- INDEXES
-- ============================================================
create index idx_checkins_user_date on public.daily_checkins(user_id, checked_in_at);
create index idx_responses_user_date on public.daily_responses(user_id, response_date);
create index idx_journal_user_created on public.journal_entries(user_id, created_at desc);
create index idx_habits_user_date on public.habits(user_id, habit_date);
create index idx_analytics_event on public.analytics_events(event_name, created_at);
create index idx_pathway_days_pathway on public.pathway_days(pathway_id, day_number);
