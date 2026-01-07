import type { Story, StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Separator, type SeparatorProps } from ".";

export default {
  title: "Separator",
  argTypes: {
    thickness: {
      control: { type: "select" },
      options: ["thin", "thick"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    thickness: "thin",
    orientation: "horizontal"
  },
} satisfies StoryDefault;

export const Base: Story<SeparatorProps> = (args) => {
  return (
    <DecorativeBox {...args} flexDir={args.orientation === "vertical" ? "row" : "column"} gap="12" p="12" w="400px" h="auto">
      <DecorativeBox boxSize="64" visual="filled" />
      <Separator {...args} />
      <DecorativeBox boxSize="64" visual="filled" />
    </DecorativeBox>
  );
};
