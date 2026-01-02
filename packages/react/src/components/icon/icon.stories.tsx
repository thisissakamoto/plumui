import type { Story, StoryDefault } from "@ladle/react";
import { Icon, type IconProps } from ".";
import { DecorativeBox } from "../decorative-box";

export default {
  title: "Icon",
  argTypes: {
    icon: {
      control: { type: "text" }
    },
  },
  args: {
    icon: "ph:binoculars",
  }
} satisfies StoryDefault;

export const Base: Story<IconProps> = (args) => {

  return (
    <DecorativeBox p="12" h="auto" w="auto">
      <Icon boxSize="24" {...args}/>
    </DecorativeBox>
  )
};
