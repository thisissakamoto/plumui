import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { ScrollArea } from ".";
import { DecorativeBox } from "../decorative-box";
import { Card } from "../card";


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
        <Card.Root visual="ghost" w="400px" h="300px">
          <ScrollArea.Viewport>
            <Content />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar my="20">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </Card.Root>
      </DecorativeBox>
    </ScrollArea.Root>
  );
};

export const Hidden: Story<ScrollArea.RootProps> = (args) => {
  return (
    <ScrollArea.Root asChild {...args}>
      <DecorativeBox p="16">
        <Card.Root visual="ghost" w="400px" h="300px">
          <ScrollArea.Viewport>
            <Content />
          </ScrollArea.Viewport>
        </Card.Root>
      </DecorativeBox>
    </ScrollArea.Root>
  );
};
