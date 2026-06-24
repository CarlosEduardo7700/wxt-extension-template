import * as React from "react"
import { toast } from "sonner"
import { supabase } from "../../lib/supabase"

interface ContactFormData {
  subject: string;
  message: string;
}

export async function onSubmit(
  data: ContactFormData, 
  userProfile: { email: string; full_name: string } | null,
  resetForm: () => void
) {
  try {
    const { data: response, error } = await supabase.functions.invoke('send-support-email', {
      body: {
        subject: data.subject,
          message: data.message,
          userEmail: userProfile?.email || "Anônimo",
          userName: userProfile?.full_name || "Usuário da Extensão"
      },
    });

    if (error) throw error;

    toast.success("Message sent successfully!");
    resetForm();
    
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Failed to send message. Please try again.");
  }
}
