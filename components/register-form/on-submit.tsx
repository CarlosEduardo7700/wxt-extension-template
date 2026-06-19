import { toast } from "sonner"
import * as z from "zod"
import { formSchema } from "./validation"
import { supabase } from "../../lib/supabase" 

export async function onSubmit(data: z.infer<typeof formSchema>) {
  try {
    console.log("Submitting registration form with data:", data)
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
        },
      },
    })

    if (error) throw error

    toast.success("Account created successfully!", {
      description: "Your account has been successfully created and configured.",
    })

  } catch (err: any) {
    toast.error("Registration failed", {
      description: err.message || "An error occurred during sign up.",
    })
  }
}