import { Section } from "./section";
import { DecorativeBox } from "../decorative-box";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "Section",
} satisfies StoryDefault;

export const Base: Story = () => {
  return (
    <DecorativeBox w="400px" h="auto">
      <Section py="40" h="200px">
        <DecorativeBox rounded="0" visual="filled" />
      </Section>
    </DecorativeBox>
  )
};
