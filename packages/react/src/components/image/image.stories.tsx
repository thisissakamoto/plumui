import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox } from "../decorative-box";
import { Image, type ImageProps } from ".";

export default {
  title: "Image",
  argTypes: {
    radius: {
      control: { type: "select" },
      options:  getVariants("visual").values,
    },
    fit: {
      control: { type: "select" },
      options: ["cover", "contain", "scale-down", "fill"]
    },
    align: {
      control: { type: "select" },
      options: ["left", "right", "center"],
    }
  }
} satisfies StoryDefault;

export const Base: Story<ImageProps> = (args) => {
  return (
    <DecorativeBox p="12">
      <Image {...args} src="https://images.pexels.com/photos/35292223/pexels-photo-35292223.jpeg" alt="photo of a field" h="300px" w="full" />
    </DecorativeBox>
  )
}
