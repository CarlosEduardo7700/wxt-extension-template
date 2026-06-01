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
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-phone">Phone</FieldLabel>
                  <Input
                    {...field}
                    id="register-form-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="(123) 456-7890"
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
                  <FieldLabel htmlFor="register-form-role">Role</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="register-form-role" aria-invalid={fieldState.invalid} className="w-full">
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

            <Controller
              name="receiveNews"
              control={form.control}
              render={({ field }) => (
                <Field orientation="horizontal">
                  <div className="flex flex-col gap-0.5">
                    <FieldLabel htmlFor="register-form-news">Receive updates</FieldLabel>
                    <FieldDescription>
                      We'll send occasional updates by email.
                    </FieldDescription>
                  </div>
                  <Switch
                    id="register-form-news"
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
                    id="register-form-terms"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={fieldState.invalid}
                  />
                  <div className="flex flex-col gap-0.5">
                    <FieldLabel htmlFor="register-form-terms">I accept the terms of use</FieldLabel>
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
          <Button type="submit" form="register-form">
            Create account
          </Button>
        </Field>
      </CardFooter>
      
    </Card>
  )
}
