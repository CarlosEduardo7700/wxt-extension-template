"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const formSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters.")
      .max(80, "Full name must be at most 80 characters."),
    email: z.string().email("Please enter a valid email."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .max(72, "Password must be at most 72 characters."),
    confirmPassword: z.string().min(1, "Confirm your password."),
    phone: z
      .string()
      .min(10, "Phone number must have at least 10 digits.")
      .max(20, "Phone number must be at most 20 characters."),
    role: z.enum(["developer", "designer", "product", "other"], {
      message: "Select your role.",
    }),
    acceptTerms: z
      .boolean()
      .refine((value) => value === true, "You must accept the terms."),
    receiveNews: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  })

export function useRegisterForm() {
  return useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      role: "developer",
      acceptTerms: false,
      receiveNews: false,
    },
  })
}