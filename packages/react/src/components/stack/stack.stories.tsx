import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox } from "../decorative-box";
import { Stack, type StackProps } from ".";

export default {
  title: "Stack",
  argTypes: {
    place: {
      control: { type: "select" },
      options: ["top-end", "top", "top-start", "center", "center-end", "center-start", "bottom-start", "bottom", "bottom-end"]
    },
    layout: {
      control: {type: "select"},
      options: getVariants("layout").values,
    }
  },
  args: {
    place: "center",
    layout: "inline",
  }
} satisfies StoryDefault;

export const Base: Story<StackProps> = (args) => {
  return (
    <Stack asChild gap="8" h="400px" p="12" {...args}>
      <DecorativeBox h="auto">
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <DecorativeBox visual="filled" boxSize="100" key={String(idx + 1)} />
          );
        })}
      </DecorativeBox>
    </Stack>
  );
};
