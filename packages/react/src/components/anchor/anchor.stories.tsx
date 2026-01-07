import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Anchor, type AnchorProps } from ".";
import { Icon } from "../icon";

export default {
  title: "Anchor",
  args: {
    tone: "neutral",
    disabled: false,
    underline: "always",
    children: "Get offer",
  },
  argTypes: {
    underline: {
      control: { type: "select" },
      options: ["none", "always"],
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
} satisfies StoryDefault;

export const Base: Story<AnchorProps> = (args) => {
  return (
    <Anchor {...args}>
      {args.children}
      <Icon icon="lucide:arrow-up-right" boxSize="14px" />
    </Anchor>
  )
}
