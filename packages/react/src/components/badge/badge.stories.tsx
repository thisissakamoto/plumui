import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Badge, type BadgeProps } from ".";

export default {
  title: "Badge",
  argTypes: {
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("soft", "surface", "outlined").values,
    }
  },
  args: {
    size: "md",
    tone: "blue",
    children: "New",
    visual: "filled",
  }
} satisfies StoryDefault;

export const Base: Story<BadgeProps> = (args) => {
  return (
    <Badge {...args} />
  )
};
