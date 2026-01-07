import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Input, type InputProps } from ".";


export default {
  title: "Input",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("filled", "elevated").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    radius: "md",
    visual: "elevated",
  },
} satisfies StoryDefault;

export const Basic: Story<InputProps> = (args) => {
  return <Input {...args} w="256px" placeholder="Legal name" />;
};
