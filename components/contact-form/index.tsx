import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useContactForm } from "./validation";
import { onSubmit } from "./on-submit";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { CardFooter } from "../ui/card";

export function ContactForm({ userProfile }: { userProfile: { email: string; full_name: string } | null }) {
  const form = useContactForm();

  return (
    <Card>

      <CardHeader>
        <CardTitle>Send email</CardTitle>
        <CardDescription>
          Found a bug or have a suggestion? Talk to me directly.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit((data) => onSubmit(data, userProfile, form.reset))}>
          <FieldGroup>
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-subject">Subject</FieldLabel>
                  <Input
                    {...field} 
                    id="contact-form-subject" 
                    aria-invalid={fieldState.invalid}
                    placeholder="Ex: Bug in feature X or Suggestion for improvement Y" 
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-message">Message</FieldLabel>
                  <Textarea 
                    {...field} 
                    id="contact-form-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Describe in detail what happened or your idea..." 
                    className="resize-none min-h-25"
                    autoComplete="off"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
          <Button type="submit" form="contact-form">
            Send
          </Button>
        </Field>
      </CardFooter>

    </Card>
  );
}