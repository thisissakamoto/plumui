import type { Story, StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Icon, type IconProps } from ".";

export default {
  title: "Icon",
  argTypes: {
    icon: {
      control: { type: "text" },
    },
  },
  args: {
    icon: "ph:binoculars",
  },
} satisfies StoryDefault;

export const Base: Story<IconProps> = (args) => {
  return (
    <DecorativeBox p="12">
      <Icon boxSize="24" {...args} />
    </DecorativeBox>
  );
};
