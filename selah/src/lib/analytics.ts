import { createClient } from '@/lib/supabase/client';

type EventName =
  | 'onboarding_started'
  | 'onboarding_completed'
  | 'checkin_completed'
  | 'daily_response_viewed'
  | 'journal_entry_created'
  | 'journal_prompt_used'
  | 'pathway_started'
  | 'pathway_day_completed'
  | 'pathway_completed'
  | 'habit_logged'
  | 'paywall_viewed'
  | 'trial_started'
  | 'subscription_created'
  | 'subscription_cancelled'
  | 'app_opened'
  | 'streak_milestone';

let sessionId: string | null = null;

function getSessionId(): string {
  if (!sessionId) {
    sessionId = typeof window !== 'undefined'
      ? sessionStorage.getItem('selah_session_id') || crypto.randomUUID()
      : crypto.randomUUID();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selah_session_id', sessionId);
    }
  }
  return sessionId;
}

export async function trackEvent(
  eventName: EventName,
  eventData: Record<string, unknown> = {}
) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from('analytics_events').insert({
      user_id: user?.id || null,
      event_name: eventName,
      event_data: eventData,
      session_id: getSessionId(),
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
}
