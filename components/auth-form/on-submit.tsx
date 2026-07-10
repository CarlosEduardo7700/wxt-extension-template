import { toast } from "sonner"
import * as z from "zod"
import { formSchema } from "./validation"
import { supabase } from "../../lib/supabase"

export async function onSubmit(data: z.infer<typeof formSchema>) {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) throw error

    toast.success("Welcome back!", {
      description: "You have successfully logged in.",
    })

  } catch (err: any) {
    toast.error("Authentication failed", {
      description: err.message || "Please check your credentials.",
    })
  }
}