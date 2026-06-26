import { supabase } from "../../lib/supabase" 
import { toast } from "sonner" 

export async function handleForgotPassword(email: string) {
  if (!email) {
    toast.error("Please enter your email address first.")
    return
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://seu-site-web.com/reset-password", 
    })

    if (error) throw error

    toast.success("Recovery link sent to your email!")
  } catch (error: any) {
    console.error("Error sending reset email:", error)
    toast.error(error.message || "Failed to send recovery email.")
  }
}