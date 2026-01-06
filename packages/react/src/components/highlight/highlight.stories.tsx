import { Text } from "../text";
import { getVariants } from "@plumui/presets";
import { Highlight, type HighlightProps } from ".";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Highlight",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    intensity: {
      control: { type: "select" },
      options: ["soft", "normal", "strong"],
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("soft", "underlined", "outlined", "ghost").values
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    }
  },
  args: {
    size: "md",
    tone: "blue",
    radius: "md",
    visual: "filled",
    intensity: "strong",
  }
} satisfies StoryDefault;

export const Base: Story<HighlightProps> = (args) => {
	return (
		<Text maxW="400px" color="fg">
			<Highlight
				{...args}
				query="dolor sit amet, consectetur adipiscing elit. Sed do eiusmod"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
			/>
		</Text>
	);
};
