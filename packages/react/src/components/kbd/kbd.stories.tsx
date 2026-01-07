import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { Kbd } from ".";

export default {
  title: "Kbd",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("soft", "surface", "outlined", "ghost").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    size: "lg",
    radius: "md",
    visual: "soft",
    tone: "neutral",
  }
} satisfies StoryDefault;

export const Base: Story<Kbd.RootProps> = (args) => {
  return (
    <Kbd.Root {...args}>
      <Kbd.Item><Icon icon="lucide:command" boxSize="1lh" /></Kbd.Item>
      {"+"}
      <Kbd.Item>K</Kbd.Item>
    </Kbd.Root>
  );
};
