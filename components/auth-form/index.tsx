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
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field"
import { Input } from "../ui/input"
import { onSubmit } from "./on-subit"
import { useAuthForm } from "./validation"
import { RegisterForm } from "../register-form"
import { useState } from "react"

export function AuthForm() {
  const form = useAuthForm()
  const [isRegistering, setIsRegistering] = useState(false)

  if (isRegistering) {
    return <RegisterForm onBackToLogin={() => setIsRegistering(false)} />
  }
  
  return (
    <Card className="w-full sm:max-w-md">

      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Please enter your credentials to log in.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="auth-form-email">E-mail</FieldLabel>
                  <Input
                    {...field}
                    id="auth-form-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="yourname@example.com"
                    autoComplete="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="auth-form-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="auth-form-password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <p className="text-right text-xs text-muted-foreground">
              <button type="button" className="underline-offset-4 hover:underline">
                Forgot your password?
              </button>
            </p>

          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">

        <Field orientation="horizontal" className="justify-between">

          <Button type="submit" form="auth-form">
            Log in
          </Button>

          <Button type="button" variant="outline" onClick={() => setIsRegistering(true)}>
            Sign up
          </Button>

        </Field>

      </CardFooter>

    </Card>
  )
}
