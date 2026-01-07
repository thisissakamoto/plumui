import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { SegmentGroup } from ".";


export default {
  title: "Segment Group",
  argTypes: {
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
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
      options: getVariants("visual").extendWith("underlined", "ghost", "elevated").values,
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    size: "lg",
    tone: "blue",
    radius: "full",
    visual: "filled",
    orientation: "horizontal",
  },
} satisfies StoryDefault;

export const Base: Story<SegmentGroup.RootProps> = (args) => {
	const actions = ["For You", "Following", "Explore"];

	return (
		<SegmentGroup.Root w="400px" defaultValue={actions[0]} {...args}>
			<SegmentGroup.Indicator />
			{actions.map((action) => (
				<SegmentGroup.Item key={action} value={action}>
					<SegmentGroup.ItemText>{action}</SegmentGroup.ItemText>
					<SegmentGroup.ItemHiddenInput />
				</SegmentGroup.Item>
			))}
		</SegmentGroup.Root>
	);
};

export const Icons: Story<SegmentGroup.RootProps> = (args) => {
	const icons = ["lucide:video", "lucide:audio-lines", "lucide:file-spreadsheet"];

	return (
		<SegmentGroup.Root w="200px" {...args} defaultValue={icons[0]}>
			<SegmentGroup.Indicator />
			{icons.map((icon) => (
				<SegmentGroup.Item key={icon} value={icon}>
				<Icon boxSize="18px" icon={icon}/>
					<SegmentGroup.ItemHiddenInput />
				</SegmentGroup.Item>
			))}
		</SegmentGroup.Root>
	);
};
