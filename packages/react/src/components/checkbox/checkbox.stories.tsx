import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { Checkbox } from ".";

export default {
  title: "Checkbox",
  argTypes: {
    visual: {
      control: {type: "select"},
      options: getVariants("visual").extendWith("surface", "outlined").values,
    },
    tone: {
      control: {type: "select"},
      options: getVariants("tone").values,
    },
    size: {
      control: {type: "select"},
      options: getVariants("size").values,
    },
    radius: {
      control: {type: "select"},
      options: getVariants("radius").values,
    },
    disabled: {
      control: {type: "boolean"},
      defaultValue: false,
    },
  },
  args: {
    size: "sm",
    tone: "blue",
    radius: "md",
    visual: "filled",
    disabled: false,
  },
} satisfies StoryDefault;

export const Base: Story<Checkbox.RootProps> = (args) => {
  return (
    <Checkbox.Root {...args}>
      <Checkbox.Control>
        <Checkbox.Indicator>
          <Icon icon="lucide:check" />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>
        Do you agree with the terms and conditions?
      </Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
};
