import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Icon } from "../icon";
import { Alert } from ".";

export default {
  title: "Alert",
  argTypes: {
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("elevated", "soft").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
  },
  args: {
    size: "lg",
    tone: "blue",
    radius: "xl",
    visual: "elevated",
  }
} satisfies StoryDefault;


export const Base: Story<Alert.RootProps> = (args) => {
  return (
    <Alert.Root {...args}>
      <Alert.Indicator>
        <Icon icon="lucide:circle-fading-arrow-up" />
      </Alert.Indicator>
      <Alert.Content>
        <Alert.Title>System Update Available</Alert.Title>
        <Alert.Description>
          A new version of the application is ready to install. This update includes
          important security patches and performance improvements.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
};
