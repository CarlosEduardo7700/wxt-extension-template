import { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabase"
import { UserProfile } from "../types"

export function useSession() {
  const [session, setSession] = useState<Session | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  async function fetchUserProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, is_pro")
        .eq("id", userId)
        .single()

      if (error) throw error

      setUserProfile(data)
    } catch (err) {
      console.error("Erro ao carregar perfil:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) fetchUserProfile(session.user.id)
      else setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        fetchUserProfile(session.user.id)
      } else {
        setUserProfile(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return { session, userProfile, loading }
}
