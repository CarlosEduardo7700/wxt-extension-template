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

export function AuthForm() {
  const form = useAuthForm()
  return (
    <Card className="w-full sm:max-w-md">

      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Please enter your credentials to log in.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">E-mail</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="seuemail@exemplo.com"
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
                  <FieldLabel htmlFor="form-rhf-demo-password">Senha</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite sua senha"
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
                Esqueceu sua senha?
              </button>
            </p>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        <Field orientation="horizontal" className="justify-between">
          <Button type="submit" form="form-rhf-demo">
            Log in
          </Button>
          <Button type="button" variant="outline">
            Sign up
          </Button>
        </Field>
      </CardFooter>

    </Card>
  )
}
