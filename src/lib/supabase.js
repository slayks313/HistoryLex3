import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://timkwckgbwgkawakivhx.supabase.co'
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbWt3Y2tnYndna2F3YWtpdmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2MTM1MjEsImV4cCI6MjA5MjE4OTUyMX0.Is6OAH_TX1D9dF5M68zzgB1SQvtwxr9kn66SQzPwzW8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
