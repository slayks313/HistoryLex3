import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const SUPABASE_CONFIGURED = Boolean(SUPABASE_URL && SUPABASE_KEY)

const fallbackAuth = {
  getSession: async () => ({ data: { session: null } }),
  onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  signUp: async () => ({ data: { user: null }, error: new Error('Supabase is not configured') }),
  signInWithPassword: async () => ({ data: { user: null }, error: new Error('Supabase is not configured') }),
  signOut: async () => ({ error: new Error('Supabase is not configured') })
}

export const supabase = SUPABASE_CONFIGURED
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : { auth: fallbackAuth }

export { SUPABASE_CONFIGURED }
