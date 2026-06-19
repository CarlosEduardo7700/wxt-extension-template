import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.WXT_SUPABASE_URL
const supabaseAnonKey = import.meta.env.WXT_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltam as variáveis de ambiente do Supabase no arquivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true
  }
})