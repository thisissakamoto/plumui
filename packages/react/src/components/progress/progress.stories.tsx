import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Progress } from ".";

export default {
  title: "Progress",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values
    },
    thickness: {
      control: { type: "select" },
      options: ["2", "4", "6", "8", "10"]
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values
    }
  },
  args: {
    size: "md",
    tone: "blue",
    radius: "md",
    thickness: "2",
  }
} satisfies StoryDefault

export const Circular: Story<Progress.RootProps> = (args) => {
	return (
		<Progress.Root defaultValue={24} {...args}>
      <Progress.Circle>
        <Progress.CircleTrack />
			  <Progress.CircleRange />
      </Progress.Circle>
		</Progress.Root>
	);
};

export const Base: Story<Progress.RootProps> = (args) => {
	return (
		<Progress.Root w="200px" defaultValue={24} {...args}>
			<Progress.Track>
				<Progress.Range />
			</Progress.Track>
		</Progress.Root>
	);
};
