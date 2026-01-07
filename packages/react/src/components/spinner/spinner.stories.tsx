import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Spinner, type SpinnerProps } from ".";

export default {
  title: "Spinner",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values
    },
  },
  args: {
    size: "xs",
    tone: "neutral",
  }
} satisfies StoryDefault;

export const Base: Story<SpinnerProps> = (args) => {
  return (
    <Spinner {...args} />
  )
};
