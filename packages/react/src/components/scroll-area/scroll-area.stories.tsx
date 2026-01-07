import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox } from "../decorative-box";
import { ScrollArea } from ".";


export default {
  title: "Scroll Area",
  argTypes: {
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
  },
  args: {
    size: "md",
    tone: "blue",
  },
} satisfies StoryDefault;

const Content = () => {
  return (
    <ScrollArea.Content spaceY="8">
      {Array.from({ length: 8 }).map((_, i) => (
        <DecorativeBox visual="filled" h="200px" key={String(i)} />
      ))}
    </ScrollArea.Content>
  );
};

export const Base: Story<ScrollArea.RootProps> = (args) => {
  return (
    <ScrollArea.Root asChild {...args}>
      <DecorativeBox p="16">
        <ScrollArea.Viewport>
          <Content />
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar my="20">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </DecorativeBox>
    </ScrollArea.Root>
  );
};

export const Hidden: Story<ScrollArea.RootProps> = (args) => {
  return (
    <ScrollArea.Root asChild {...args}>
      <DecorativeBox p="16">
        <ScrollArea.Viewport>
          <Content />
        </ScrollArea.Viewport>
      </DecorativeBox>
    </ScrollArea.Root>
  );
};
