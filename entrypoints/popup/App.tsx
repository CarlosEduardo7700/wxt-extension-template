import { Header } from "../../components/header/header";
import { Toaster } from "../../components/ui/sonner";
import { Tabs, TabsContent } from "../../components/tabs";
import { ContactForm } from "../../components/contact-form";
import { SettingsGroup } from "../../components/settings-group";
import { AuthForm } from "../../components/auth-form";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import { PaywallModal } from "../../components/paywall-modal/paywall-modal";
import { Loading } from "../../components/loading";
import { useSession } from "./hooks/useSession";

export default function App() {
  const { session, userProfile, loading } = useSession()
  const [isPaywallOpen, setIsPaywallOpen] = useState(false)

  if (loading) return <Loading />

  if (!session) {
    return (
      <div className="p-4">
        <AuthForm />
        <Toaster />
      </div>
    )
  }

  return (
    <div className="p-4">
      <Header 
        userName={userProfile?.full_name || "User"}
        userEmail={userProfile?.email || "No email"}
        isPro={userProfile?.is_pro || false} 
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
      <Toaster />
      <PaywallModal open={isPaywallOpen} onOpenChange={setIsPaywallOpen} />
    </div>
  );
}
