import type { Story, StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Box, type BoxProps } from ".";

export default {
  title: "Box",
} satisfies StoryDefault;

export const Base: Story<BoxProps> = (args) => {
  return (
    <DecorativeBox p="12">
      <Box {...args} boxSize="80px">
        <DecorativeBox visual="filled" />
      </Box>
    </DecorativeBox>
  )
};
