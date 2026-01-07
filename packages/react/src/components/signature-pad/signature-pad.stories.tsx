import { Icon } from "../icon";
import { Card } from "../card";
import { SignaturePad } from ".";
import { ButtonGroup } from "../button";
import { getVariants } from "@plumui/presets";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Signature Pad",
  argTypes: {
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    tone: "neutral",
  },
} satisfies StoryDefault;

export const Base: Story<SignaturePad.RootProps> = (args) => {
  return (
    <SignaturePad.Root {...args}>
      <SignaturePad.Control asChild>
        <Card.Root boxSize="256px" visual="elevated">
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger asChild m="8">
            <ButtonGroup.Root size="md" tone="neutral" visual="soft">
              <ButtonGroup.Item onClick={(e) => e.preventDefault()}>
                Preview
              </ButtonGroup.Item>
              <ButtonGroup.Item iconOnly>
                <Icon icon="lucide:repeat-2" boxSize="16px" />
              </ButtonGroup.Item>
            </ButtonGroup.Root>
          </SignaturePad.ClearTrigger>
        </Card.Root>
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
};
