"use client"

import { Controller } from "react-hook-form"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field"
import { Input } from "../ui/input"
import { onSubmit } from "./on-submit"
import { useRegisterForm } from "./validation"

interface RegisterFormProps {
  onBackToLogin: () => void
}

export function RegisterForm({ onBackToLogin }: RegisterFormProps) {
  const form = useRegisterForm()

  return (
    <Card className="w-full sm:max-w-md">
      
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Fill in the details below to create your account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-full-name">Full name</FieldLabel>
                  <Input
                    {...field}
                    id="register-form-full-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="register-form-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="yourname@example.com"
                    autoComplete="email"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="register-form-password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                  />
                  <FieldDescription>Use at least 8 characters.</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

          </FieldGroup>
        </form>

      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">

        <Field orientation="horizontal" className="justify-between">

          <Button type="submit" form="register-form">
            Create account
          </Button>

          <Button type="button" variant="outline" onClick={onBackToLogin}>
            Back to Log in
          </Button>

        </Field>

      </CardFooter>
      
    </Card>
  )
}
