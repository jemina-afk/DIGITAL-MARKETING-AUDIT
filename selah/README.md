# Selah

A premium, mobile-first web app helping Christian women build a deeper daily walk with God through personalised scripture, guided prayer, reflective journaling, and gentle habit support.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database & Auth:** Supabase (PostgreSQL + Auth)
- **Payments:** Stripe (subscriptions)
- **Architecture:** Modular, component-based, production-minded

## Features

| Feature | Description | Tier |
|---------|-------------|------|
| Authentication | Email/password, password reset, onboarding | Free |
| Onboarding | 6-step personalisation (name, age, season, struggles, preferences) | Free |
| Daily Check-in | Mood & need selection + free text | Free |
| Personalised Response | Scripture, reflection, prayer, and faith action based on check-in | Free |
| Guided Journaling | Free write, prompted, prayer, and gratitude entries with tags | Free (10 entries) / Premium (unlimited) |
| Pathways Library | 7 curated 7-day devotional series | Free (3) / Premium (all) |
| Faith Habit Tracker | Track prayer, journaling, scripture, pathway days with streaks | Free |
| Subscription | Stripe-powered monthly ($9.99) and yearly ($79.99) plans with 7-day trial | Premium |
| Analytics | Event tracking for onboarding, check-ins, journal, pathways, subscriptions | Internal |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project
- A [Stripe](https://stripe.com) account (for payments)

### 1. Clone and install

```bash
cd selah
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your `.env.local`:

| Variable | Source |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project settings > API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project settings > API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project settings > API (keep secret) |
| `STRIPE_SECRET_KEY` | Stripe Dashboard > Developers > API keys |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Dashboard > Developers > API keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard > Developers > Webhooks |
| `STRIPE_MONTHLY_PRICE_ID` | Create in Stripe: Product > $9.99/month recurring |
| `STRIPE_YEARLY_PRICE_ID` | Create in Stripe: Product > $79.99/year recurring |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` (or your deployed URL) |

### 3. Set up the database

Run the migration in your Supabase SQL editor:

```
supabase/migrations/001_initial_schema.sql
```

Then run the seed data:

```
supabase/seed.sql
```

### 4. Set up Stripe

1. Create a product called "Selah Premium" in Stripe
2. Add two prices: $9.99/month and $79.99/year
3. Copy the price IDs to `.env.local`
4. Set up a webhook endpoint pointing to `https://your-domain.com/api/stripe/webhook`
5. Subscribe to events: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
selah/
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login, signup, reset password
│   │   ├── (app)/           # Authenticated app shell
│   │   │   ├── home/        # Daily check-in & response
│   │   │   ├── journal/     # Journal list, new entry, entry detail
│   │   │   ├── pathways/    # Pathway library & individual pathways
│   │   │   ├── habits/      # Faith habit tracker
│   │   │   ├── profile/     # User profile
│   │   │   └── subscribe/   # Subscription paywall
│   │   ├── api/             # API routes (daily response, Stripe, analytics)
│   │   └── onboarding/      # 6-step onboarding flow
│   ├── components/
│   │   ├── ui/              # Reusable primitives (Button, Card, Input, Tag, etc.)
│   │   └── layout/          # AppNav, AppHeader
│   ├── lib/
│   │   ├── supabase/        # Client, server, and middleware helpers
│   │   ├── stripe.ts        # Stripe config
│   │   ├── analytics.ts     # Event tracking
│   │   └── constants.ts     # Tags, options, limits
│   ├── data/seed/           # Seed data (pathways, prompts, content)
│   └── types/               # TypeScript type definitions
├── supabase/
│   ├── migrations/          # SQL schema
│   └── seed.sql             # Initial content
└── middleware.ts             # Auth session management
```

## Database Schema

10 tables with Row Level Security:

- **profiles** — User profile + onboarding data + subscription tier
- **daily_checkins** — Daily mood/need entries (one per day)
- **daily_responses** — Generated devotional content
- **journal_entries** — Journal entries with mood/topic tags
- **pathways** — Curated devotional series metadata
- **pathway_days** — Individual day entries within pathways
- **user_pathway_progress** — User progress through pathways
- **habits** — Daily faith habit tracking
- **analytics_events** — Event tracking
- **journal_prompts** — Admin-managed writing prompts

## Content Architecture

Content is designed to be easily extensible:

- **Pathways** are database rows — add new ones via SQL or an admin tool
- **Pathway days** reference their parent pathway — add 7 rows per new pathway
- **Journal prompts** are database rows with category and mood tags
- **Daily responses** use a template-matching engine (mood to content mapping)

To add a new pathway, insert a row into `pathways` and 7 rows into `pathway_days`.

## What's Mocked vs Production-Ready

| Component | Status | Notes |
|-----------|--------|-------|
| Auth (signup/login/reset) | Production-ready | Uses Supabase Auth |
| Onboarding | Production-ready | Writes to profiles table |
| Daily check-in | Production-ready | Full CRUD |
| Daily response engine | **Mocked** | Uses curated template matching, not AI. Upgrade to LLM API in v2. |
| Journaling | Production-ready | Full CRUD with tags |
| Pathways | Production-ready | 7 pathways seeded with full content |
| Habits | Production-ready | Toggle + streak calculation |
| Stripe subscriptions | Production-ready | Checkout + webhooks |
| Analytics | Production-ready tracking | No dashboard — query Supabase directly |
| Push notifications | Not built | v2 scope |
| Admin panel | Not built | Manage content via SQL/Supabase dashboard |
| Audio/listen format | Not built | v2 scope |

## Theological & Safety Guardrails

- AI is never presented as a pastor or prophet
- No claims that "God told you" specific things
- No crisis/mental health advice beyond recommending professional support
- No shame-based UX for inconsistency
- Scripture is broadly orthodox and pastoral in tone
- Visible disclaimer on all devotional content
- Reflections are warm, grounded, and scripturally safe

## Launch Checklist

### Before launch
- [ ] Run migration SQL in production Supabase
- [ ] Run seed SQL in production Supabase
- [ ] Create Stripe products and prices
- [ ] Configure Stripe webhook endpoint
- [ ] Set all env vars in production
- [ ] Test full signup-to-subscription flow
- [ ] Test password reset flow
- [ ] Test paywall gates (free vs premium content)
- [ ] Test Stripe webhook (subscription activation/cancellation)
- [ ] Review all seed content for theological accuracy
- [ ] Test on iOS Safari and Android Chrome
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Configure Supabase email templates (confirmation, reset)
- [ ] Set up a custom domain
- [ ] Add privacy policy and terms of service pages

### After launch
- [ ] Monitor analytics events in Supabase
- [ ] Track onboarding completion rates
- [ ] Track 7-day retention (users returning after first week)
- [ ] Monitor Stripe subscription events
- [ ] Gather user feedback on content quality
- [ ] Plan v2 features based on usage patterns

## Product Risks & Future Improvements

### Risks
1. **Content quality** — The daily response engine uses templates, not AI. If users get the same response twice, it feels impersonal. Mitigate by expanding the template database.
2. **Retention** — Daily apps live or die by habit formation. The first 7 days are critical. Consider push notifications and email reminders in v2.
3. **Theological sensitivity** — Different denominations interpret scripture differently. Keep content broadly orthodox. Add a way for users to flag content concerns.
4. **Subscription conversion** — Free tier must feel valuable enough to retain but limited enough to motivate upgrading. Monitor paywall view-to-conversion rates.
5. **Content freshness** — Static pathways can feel stale after completion. Plan for regular new pathway releases.

### Future Improvements (v2+)
1. **AI-powered daily responses** — Integrate Claude or GPT for truly personalised reflections based on user profile + check-in data
2. **Push notifications** — Gentle daily reminders ("Good morning, Sarah. God has a word for you today.")
3. **Audio devotionals** — Record pathway content for the "listen" preference
4. **Community features** — Prayer partner matching, anonymous prayer walls
5. **Admin content panel** — Web interface for managing pathways, prompts, and scripture
6. **Deeper analytics dashboard** — Retention cohorts, funnel analysis, content engagement
7. **Offline support** — Service worker for reading pathways without internet
8. **Verse of the day widget** — Home screen widget for iOS/Android
9. **Prayer timer** — Guided prayer sessions with gentle ambient sound
10. **Shareable cards** — Beautiful scripture cards users can share on social media

## License

Private — not open source.
