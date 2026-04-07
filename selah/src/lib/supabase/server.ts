import { cookies } from 'next/headers';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isConfigured =
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('placeholder') &&
  SUPABASE_KEY.length > 20 &&
  !SUPABASE_KEY.includes('placeholder');

export async function createClient() {
  if (!isConfigured) {
    // Return mock for server-side rendering in preview mode
    const empty = { data: null, error: null };
    const mockChain: Record<string, unknown> = {};
    const chainFn = () => mockChain;
    ['select','insert','update','upsert','delete','eq','neq','gte','lte',
     'order','limit','range','single','maybeSingle','csv','then'].forEach(m => {
      mockChain[m] = m === 'single' || m === 'maybeSingle'
        ? () => Promise.resolve(empty)
        : m === 'then'
        ? (resolve: (v: typeof empty) => void) => Promise.resolve(empty).then(resolve)
        : chainFn;
    });

    return {
      auth: { getUser: () => Promise.resolve({ data: { user: null }, error: null }) },
      from: () => mockChain,
    } as ReturnType<typeof import('@supabase/ssr').createServerClient>;
  }

  const { createServerClient } = require('@supabase/ssr');
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component — safe to ignore.
        }
      },
    },
  });
}
