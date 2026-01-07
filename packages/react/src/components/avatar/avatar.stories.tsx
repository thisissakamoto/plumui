import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Avatar } from ".";

export default {
  title: "Avatar",
  argTypes: {
    size: {
      control: {type: "select"},
      options: getVariants("size").extendWith("2xl", "3xl").values
    },
    radius: {
      control: {type: "select"},
      options: getVariants("radius").values
    },
    visual: {
      control: {type: "select"},
      options: getVariants("visual").extendWith("soft").values
    },
    tone: {
      control: {type: "select"},
      options: getVariants("tone").values
    },
    src: {
      control: {type: "text"},
    }
  },
  args: {
    size: "xl",
    tone: "blue",
    radius: "full",
    visual: "filled",
    src: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
  }
} satisfies StoryDefault;

export const Base: Story<Avatar.RootProps & { src?: string }> = (args) => {
  const { src, ...rest } = args;

  return (
    <Avatar.Root {...rest}>
      <Avatar.Image src={src} />
      <Avatar.Fallback>AB</Avatar.Fallback>
    </Avatar.Root>
  )
}
