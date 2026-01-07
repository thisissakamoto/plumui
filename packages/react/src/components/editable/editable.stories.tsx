import type { Story, StoryDefault } from "@ladle/react";
import { Input } from "../input";
import { Editable } from ".";

export default {
  title: "Editable",
} satisfies StoryDefault;

export const Base: Story<Editable.RootProps> = () => {
  return (
    <Editable.Root placeholder="Placeholder">
      <Editable.Area>
        <Editable.Input asChild>
          <Input size="xs" />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
    </Editable.Root>
  )
};
