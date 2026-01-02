import type { Meta, Story } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { ButtonGroup } from ".";

const meta: Meta = {
  title: "Button Group",
  component: ButtonGroup.Root,
  argTypes: {
    detach: {
      control: { type: "boolean" },
    },
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
      options: getVariants("visual").extendWith("soft", "outlined").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    size: "lg",
    radius: "full",
    visual: "soft",
    tone: "neutral",
  },
};
export default meta;

export const Base: Story<ButtonGroup.RootProps> = (args) => {
	return (
		<ButtonGroup.Root {...args}>
			<ButtonGroup.Item>
				Merge pull request
			</ButtonGroup.Item>
			<ButtonGroup.Item iconOnly>
				<Icon icon="lucide:chevron-down" boxSize="18px"/>
			</ButtonGroup.Item>
		</ButtonGroup.Root>
	);
};
