import type {  Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Switch } from ".";


export default {
  title: "Switch",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    size: "md",
    tone: "blue",
  }
} satisfies StoryDefault;

export const Base: Story<Switch.RootProps> = (args) => (
	<Switch.Root {...args}>
		<Switch.Control>
			<Switch.Thumb />
		</Switch.Control>
		<Switch.HiddenInput />
	</Switch.Root>
);
