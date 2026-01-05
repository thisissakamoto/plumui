import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { InputGroup } from ".";


export default {
  title: "Input Group",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("filled", "elevated").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    radius: "md",
    visual: "elevated",
  },
} satisfies StoryDefault;

export const Basic: Story<InputGroup.RootProps> = (args) => {
  return (
    <InputGroup.Root w="256px" {...args}>
      <InputGroup.Label>Hometown</InputGroup.Label>
      <InputGroup.Content>
        <InputGroup.Input px="12" placeholder="e.g Illinois" />
      </InputGroup.Content>
    </InputGroup.Root>
  )
};
