import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isConfigured = SUPABASE_URL
  && SUPABASE_KEY
  && !SUPABASE_URL.includes('placeholder')
  && SUPABASE_URL.startsWith('https://');

export function createClient() {
  if (!isConfigured) {
    // Return a mock client for local preview without Supabase
    return createMockClient();
  }
  return createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
}

// Minimal mock that lets the UI render without crashing
function createMockClient(): ReturnType<typeof createBrowserClient> {
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
      signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: { message: 'Supabase not configured. Add real credentials to .env.local to enable auth.' } }),
      signUp: () => Promise.resolve({ data: { user: null, session: null }, error: { message: 'Supabase not configured. Add real credentials to .env.local to enable auth.' } }),
      resetPasswordForEmail: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured.' } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => mockQuery(),
  } as unknown as ReturnType<typeof createBrowserClient>;
}
