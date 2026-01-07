import type { Story, StoryDefault } from "@ladle/react";
import { Input } from "../input";
import { Field } from ".";

export default {
  title: "Field"
} satisfies StoryDefault;


export const Base: Story<Field.RootProps> = () => {
  return (
    <Field.Root>
      <Field.Label>Legal name</Field.Label>
      <Field.Input asChild w="256px">
        <Input />
      </Field.Input>
      <Field.HelperText>As written on your license</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
};
