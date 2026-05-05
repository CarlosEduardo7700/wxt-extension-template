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
import { Checkbox } from "../ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Switch } from "../ui/switch"
import { onSubmit } from "./on-submit"
import { useRegisterForm } from "./validation"

export function RegisterForm() {
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
        <form id="register-form-template" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-full-name">Full name</FieldLabel>
                  <Input
                    {...field}
                    id="register-full-name"
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
                  <FieldLabel htmlFor="register-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="register-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-phone">Phone</FieldLabel>
                  <Input
                    {...field}
                    id="register-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="(11) 99999-9999"
                    autoComplete="tel"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-role">Role</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="register-role" aria-invalid={fieldState.invalid} className="w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="register-password"
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

            <Controller
              name="receiveNews"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <div className="flex flex-col gap-0.5">
                    <FieldLabel htmlFor="register-news">Receive updates</FieldLabel>
                    <FieldDescription>
                      We'll send occasional updates by email.
                    </FieldDescription>
                  </div>
                  <Switch
                    id="register-news"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Field>
              )}
            />

            <Controller
              name="acceptTerms"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} orientation="horizontal">
                  <Checkbox
                    id="register-terms"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={fieldState.invalid}
                  />
                  <div className="flex flex-col gap-0.5">
                    <FieldLabel htmlFor="register-terms">I accept the terms of use</FieldLabel>
                    <FieldDescription>
                      Required to complete registration.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        <Field orientation="horizontal" className="justify-between">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Clear
          </Button>
          <Button type="submit" form="register-form-template">
            Create account
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
