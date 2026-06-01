import * as React from "react"
import { toast } from "sonner"
import * as z from "zod"
import { formSchema } from "./validation"

export function onSubmit(data: z.infer<typeof formSchema>) {
    const emailData = {
      to: import.meta.env.VITE_CONTACT_EMAIL,
      subject: encodeURIComponent(`[Feedback Extensão] ${data.subject}`),
      body: encodeURIComponent(`${data.message}\n\n---\nEnviado via Extensão`),
    };

    const mailtoUrl = `mailto:${emailData.to}?subject=${emailData.subject}&body=${emailData.body}`;
    
    window.open(mailtoUrl, "_blank");
    
    toast.success("Cliente de e-mail aberto!");
  }
