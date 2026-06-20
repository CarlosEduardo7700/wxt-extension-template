import { Header } from "../../components/header/header";
import { Toaster } from "../../components/ui/sonner";
import { Tabs, TabsContent } from "../../components/tabs";
import { ContactForm } from "../../components/contact-form";
import { SettingsGroup } from "../../components/settings-group";
import { AuthForm } from "../../components/auth-form";
import { Session } from "@supabase/supabase-js";
import { useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import { PaywallModal } from "../../components/paywall-modal/paywall-modal";
import { Loading } from "../../components/loading";

interface UserProfile {
  id: string
  email: string
  full_name: string
  is_pro: boolean
}

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false)
  const [loading, setLoading] = useState(true)

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

  if (loading) return <Loading />

  return (
    <div className="p-4">
      {!session ? (
        <div>
          <AuthForm />
        </div>
      ) : (
        <div>
          <Header 
            userName={userProfile?.full_name || "User"}
            userEmail={userProfile?.email || "No email"} 
            onUpgradeClick={() => setIsPaywallOpen(true)} 
            onLogoutClick={() => supabase.auth.signOut()}
          />
          <Tabs tabsTitles={["Overview", "Settings", "Support"]} defaultValue="overview">
            <TabsContent value="overview">
              <p>{userProfile?.is_pro ? "You are a Pro user." : "You are not a Pro user."}</p>
              <p>Add any overview content you like here.</p>
            </TabsContent>

            <TabsContent value="support">
              <ContactForm />
            </TabsContent>

            <TabsContent value="settings">
              <SettingsGroup />
            </TabsContent>
          </Tabs>
        </div>
      )}
      <Toaster />
      <PaywallModal open={isPaywallOpen} onOpenChange={setIsPaywallOpen} />
    </div>
  );
}
