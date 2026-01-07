import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Tabs } from ".";

export default {
  title: "Tabs",
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
      options: getVariants("visual").extendWith("underlined", "elevated", "ghost").values,
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

export const Base: Story<Tabs.RootProps> = (args) => {
  const groups = ["Feed", "Popular", "Explore"]

  return (
    <Tabs.Root w="400px" {...args} defaultValue={groups[0]}>
      <Tabs.List>
        <Tabs.Indicator />
        {groups.map((group) => {
          return (
            <Tabs.Trigger value={group} key={group}>{group}</Tabs.Trigger>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};
