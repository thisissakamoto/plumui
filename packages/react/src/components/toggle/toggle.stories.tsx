import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { Toggle } from ".";

export default {
  title: "Toggle",
  argTypes: {
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("soft", "surface").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    }
  },
  args: {
    size: "lg",
    radius: "xl",
    tone: "neutral",
    visual: "filled",
  }
} satisfies StoryDefault;

export const Base: Story<Toggle.RootProps> = (args) => {
  return (
    <Toggle.Root {...args}>
      <Toggle.Indicator
        fallback={
          <Icon icon="lucide:bluetooth" boxSize="20px" />
        }
      >
        <Icon icon="lucide:bluetooth-searching" boxSize="20px" />
      </Toggle.Indicator>
    </Toggle.Root>
  );
};
