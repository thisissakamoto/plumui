import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Field } from "../field";
import { Input } from "../input";
import { Separator } from "../separator";
import { Textarea } from "../textarea";
import { Fieldset } from ".";

export default {
  title: "Fieldset"
} satisfies StoryDefault;

export const Base:  Story<Fieldset.RootProps> = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>
        Profile settings
      </Fieldset.Legend>
      <Fieldset.HelperText mt="8">
        Please fill out the following fields to update your profile.
      </Fieldset.HelperText>
      <Separator spaceY="3xl" />
      <Field.Root>
        <Field.Label>
          Name
        </Field.Label>
        <Field.Input asChild placeholder="e.g John Doe">
          <Input/>
        </Field.Input>
      </Field.Root>
      <Field.Root mt="12">
        <Field.Label>
          Bio
        </Field.Label>
        <Field.Textarea asChild placeholder="e.g John Doe">
          <Textarea />
        </Field.Textarea>
      </Field.Root>
      <Button visual="surface" mt="20">
        Save changes
      </Button>
    </Fieldset.Root>
  )
}
