import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { eventName, eventData, sessionId } = await request.json();

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from('analytics_events').insert({
      user_id: user?.id || null,
      event_name: eventName,
      event_data: eventData || {},
      session_id: sessionId,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return Response.json({ error: 'Failed to track event' }, { status: 500 });
  }
}
