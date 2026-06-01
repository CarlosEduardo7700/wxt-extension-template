import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const formSchema = z
  .object({
    subject: z
      .string()
      .min(3, "The subject must have at least 3 characters"),
    message: z
      .string()
      .min(10, "The message must have at least 10 characters"),
});

export function useContactForm() {
    return useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            message: "",
        },
    });
}