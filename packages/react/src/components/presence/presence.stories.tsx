import type { Story, StoryDefault } from "@ladle/react";
import { Card } from "../card";
import { Presence, type PresenceProps } from ".";

export default {
  title: "Presence",
  argTypes: {
    present: {
      control: { type: "boolean" },
    }
  },
  args: {
    present: true,
  }
} satisfies StoryDefault;

export const Base: Story<PresenceProps> = (args) => {
  return (
    <Presence {...args}>
      <Card.Root visual="outlined" maxW="320px">
        <Card.Body px="16" py="12">
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Presence>
  )
};
