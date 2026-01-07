import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { IconButton, type IconButtonProps } from ".";

export default {
  title: "Icon Button",
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
    stretch: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "lg",
    tone: "blue",
    stretch: false,
    radius: "full",
    visual: "filled",
  }
} satisfies StoryDefault;

export const Base: Story<IconButtonProps> = (args) => {
  return (
    <IconButton {...args}>
      <Icon icon="lucide:framer" />
    </IconButton>
  )
};
