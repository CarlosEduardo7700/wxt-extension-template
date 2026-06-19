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

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="p-4">
      {!session ? (
        <div>
          <AuthForm />
        </div>
      ) : (
        <div>
          <Header 
            userName={session?.user?.user_metadata?.full_name || "User"}
            userEmail={session?.user?.email || "No email"} 
            onUpgradeClick={() => setIsPaywallOpen(true)} 
            onLogoutClick={() => supabase.auth.signOut()}
          />
          <Tabs tabsTitles={["Overview", "Settings", "Support"]} defaultValue="overview">
            <TabsContent value="overview">
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

export default App;
