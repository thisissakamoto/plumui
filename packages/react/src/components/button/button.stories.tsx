import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Button, type ButtonProps } from ".";

export default {
  title: "Button",
  argTypes: {
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("soft", "surface", "outlined", "ghost").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    wide: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
  args: {
    size: "lg",
    tone: "blue",
    wide: false,
    radius: "full",
    visual: "filled",
    children: "Join us",
  }
} satisfies StoryDefault;

export const Base: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
};
