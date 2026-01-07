import type { Story, StoryDefault } from "@ladle/react";
import { Text, type TextProps } from ".";

export default {
  title: "Text",
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["8", "10", "12", "14", "16", "18", "20", "24", "28", "32", "36", "40", "48", "56", "64", "80", "96", "128"]
    },
    weight: {
      control: { type: "select" },
      options: ["thin", "light", "regular", "medium", "semibold", "bold", "extrabold", "black"]
    },
    align: {
      control: { type: "select" },
      options: ["left", "right", "center", "justify"]
    },
    trim: {
      control: { type: "select" },
      options: ["none", "cap", "both"]
    },
    children: {
      control: { type: "text" }
    }
  },
  args: {
    size: "14",
    weight: "regular",
    style: "normal",
    writing: "horizontal",
    align: "left",
    trim: "none",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
  },
} satisfies StoryDefault;

export const Base: Story<TextProps> = (args) => {
  return (
    <Text {...args} maxW="400px" mx="auto" />
  )
};
