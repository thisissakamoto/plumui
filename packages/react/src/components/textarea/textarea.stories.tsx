import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Textarea, type TextareaProps } from ".";

export default {
  title: "Textarea",
  args: {
    size: "md",
    radius: "md",
    resize: false,
    disabled: false,
    visual: "elevated",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("ghost", "underlined", "outlined", "elevated").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    disabled: {
      control: { type: "boolean" },
    },
    resize: {
      control: { type: "boolean" }
    }
  },
} satisfies StoryDefault;

export const Basic: Story<TextareaProps> = (args) => {
	return (
		<Textarea {...args} maxH="160px" rows={5} w="320px" placeholder="Tell us more about yourself..." />
	);
};
