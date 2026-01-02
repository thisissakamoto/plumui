import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { DecorativeBox } from "../decorative-box";
import { Card } from ".";

export default {
  title: "Card",
  argTypes: {
    visual: {
      control: { type: "select" },
      options: getVariants("visual").extendWith("outlined", "elevated", "ghost").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    layout: {
      control: { type: "select" },
      options: getVariants("layout").values,
    }
  },
  args: {
    radius: "xl",
    layout: "stacked",
    visual: "elevated",
  }
} satisfies StoryDefault;

export const Base: Story<Card.RootProps> = (args) => {
  return (
    <Card.Root maxW="240px" {...args}>
      <Card.Header p="8">
        <Card.Media>
          <DecorativeBox visual="filled" h="200px" rounded="12" />
        </Card.Media>
      </Card.Header>
      <Card.Body px="16" pt="8" pb="10" orientation="vertical">
        <Card.Subtitle color="fg.subtle" fontWeight="600">I believe in</Card.Subtitle>
        <Card.Title mt="2" fontSize="20" fontWeight="700">Mobbin</Card.Title>
      </Card.Body>
    </Card.Root>
  )
};
