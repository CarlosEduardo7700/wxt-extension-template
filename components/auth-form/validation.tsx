"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(72, "Password must be at most 72 characters."),
})

export function useAuthForm() {
  return useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
}