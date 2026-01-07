import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { ToggleGroup } from ".";

export default {
  title: "Toggle Group",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("outlined").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    size: "lg",
    radius: "full",
    tone: "neutral",
    visual: "outlined",
  },
} satisfies StoryDefault

const alignmentOptions = [
	{ value: "left", icon: "lucide:text-align-start" },
	{ value: "center", icon: "lucide:text-align-center" },
	{ value: "right", icon: "lucide:text-align-end" },
	{ value: "justify", icon: "lucide:text-align-justify" },
];

export const Base: Story<ToggleGroup.RootProps> = (args) => {
	return (
		<ToggleGroup.Root {...args}>
			{alignmentOptions.map((option) => (
				<ToggleGroup.Item key={option.value} value={option.value}>
					<Icon icon={option.icon} boxSize="16px" />
				</ToggleGroup.Item>
			))}
		</ToggleGroup.Root>
	);
};
