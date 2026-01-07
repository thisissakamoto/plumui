import type { Story, StoryDefault } from "@ladle/react";
import { DecorativeBox } from "../decorative-box";
import { Grid, type GridProps } from ".";

export default {
  title: "Grid",
  argTypes: {
    cols: {
      control: { type: "text" },
      description: "Number of columns",
    },
    rows: {
      control: { type: "text" },
      description: "Number of rows",
    },
  },
  args: {
    cols: "3",
    rows: "auto",
  },
} as StoryDefault;

export const Base: Story<GridProps> = (args) => {
  return (
    <DecorativeBox p="12" h="auto">
      <Grid maxW="400px" place="center" {...args}>
        {Array.from({ length: 9 }).map((_, idx) => {
          return (
            <DecorativeBox visual="filled" h="80" key={String(idx + 1)} />
          );
        })}
      </Grid>
    </DecorativeBox>
  );
};
