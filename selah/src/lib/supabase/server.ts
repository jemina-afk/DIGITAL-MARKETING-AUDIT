import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isConfigured = SUPABASE_URL
  && SUPABASE_KEY
  && !SUPABASE_URL.includes('placeholder')
  && SUPABASE_URL.startsWith('https://');

export async function createClient() {
  if (!isConfigured) {
    // Return a minimal mock for server-side rendering without Supabase
    const emptyResponse = { data: null, error: null };
    const mockQuery = () => ({
      select: () => mockQuery(),
      insert: () => mockQuery(),
      update: () => mockQuery(),
      upsert: () => mockQuery(),
      delete: () => mockQuery(),
      eq: () => mockQuery(),
      gte: () => mockQuery(),
      order: () => mockQuery(),
      limit: () => mockQuery(),
      single: () => Promise.resolve(emptyResponse),
      then: (resolve: (v: typeof emptyResponse) => void) => Promise.resolve(emptyResponse).then(resolve),
    });

    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      },
      from: () => mockQuery(),
    } as unknown as ReturnType<typeof createServerClient>;
  }

  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL!, SUPABASE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component — safe to ignore with middleware.
        }
      },
    },
  });
}
