import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox, type DecorativeBoxProps } from "./decorative-box";

export default {
  title: "Decorative Box",
  argTypes: {
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("outlined").values,
    },
  },
  args: {
    visual: "outlined"
  }
} satisfies StoryDefault;


export const Base: Story<DecorativeBoxProps> = (args) => {
  return (
    <DecorativeBox h="100px" {...args} />
  )
}
