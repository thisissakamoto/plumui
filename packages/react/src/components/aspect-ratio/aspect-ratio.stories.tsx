import type { Story, StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Image } from "../image";
import { AspectRatio, type AspectRatioProps } from "./aspect-ratio";

export default {
  title: "Aspect Ratio",
  argTypes: {
    ratio: {
      control: { type: "select" },
      options: ["photo", "square", "video", "potrait", "landscape", "golden", "widescreen", "cinematic", "photo-classic"]
    }
  }
} satisfies StoryDefault;

export const Base: Story<AspectRatioProps> = (args) => {
  return (
    <DecorativeBox p="12">
      <AspectRatio {...args}>
        <Image src="https://images.pexels.com/photos/34375868/pexels-photo-34375868.jpeg" alt="" />
      </AspectRatio>
    </DecorativeBox>
  )
};
