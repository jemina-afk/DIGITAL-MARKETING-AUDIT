const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isConfigured =
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('placeholder') &&
  SUPABASE_KEY.length > 20 &&
  !SUPABASE_KEY.includes('placeholder');

// Minimal mock so the UI renders without a real database
function createMockClient() {
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
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      signInWithPassword: () => Promise.resolve({
        data: { user: null, session: null },
        error: { message: 'Preview mode — connect Supabase to enable sign in. See README for setup instructions.', status: 0 },
      }),
      signUp: () => Promise.resolve({
        data: { user: null, session: null },
        error: { message: 'Preview mode — connect Supabase to enable sign up. See README for setup instructions.', status: 0 },
      }),
      resetPasswordForEmail: () => Promise.resolve({
        data: null,
        error: { message: 'Preview mode — connect Supabase to enable password reset.', status: 0 },
      }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => mockChain,
  };
}

export function createClient() {
  if (!isConfigured) {
    return createMockClient() as ReturnType<typeof import('@supabase/ssr').createBrowserClient>;
  }
  // Only import the real client when credentials are valid
  const { createBrowserClient } = require('@supabase/ssr');
  return createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
}
