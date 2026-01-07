import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox } from "../decorative-box";
import { Text as BaseText } from "../text";
import { Skeleton, type SkeletonProps } from ".";

export default {
  title: "Skeleton",
  argTypes: {
    effect: {
      options: ["pulse", "shimmer"],
      control: { type: "select" },
    },
    radius: {
      options: getVariants("radius").values,
      control: { type: "select" },
    },
  },
  args: {
    radius: "md",
    effect: "pulse",
  }
} satisfies StoryDefault;

export const Base: Story<SkeletonProps> = (args) => (
	<DecorativeBox h="auto" p="12">
		<Skeleton {...args} w="200px" h="132px" />
	</DecorativeBox>
);

export const Text: Story<SkeletonProps> = (args) => (
  <DecorativeBox h="auto" p="12">
    <BaseText>
      <Skeleton {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque
        felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
        erat, fringilla sed commodo sed, aliquet nec magna.
      </Skeleton>
    </BaseText>
  </DecorativeBox>
);
