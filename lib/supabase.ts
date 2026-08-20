import { createClient } from "@supabase/supabase-js"

// These come from Netlify's environment variables in production, and from
// .env.local when running locally. Never put the actual values directly in
// this file — see .env.example for what needs to be set.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // This only warns instead of throwing so the rest of the site still loads
  // if the keys are missing — the Apply form will surface a clear error
  // instead of crashing the whole page.
  console.warn(
    "[supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
      "The WL application form will not be able to save submissions until these are set.",
  )
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "")
