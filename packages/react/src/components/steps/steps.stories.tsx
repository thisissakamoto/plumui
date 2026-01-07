import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { DecorativeBox } from "../decorative-box";
import { Stack } from "../stack";
import { Steps } from ".";

export default {
  title: "Steps",
} satisfies StoryDefault;

export const Base: Story = () => {
  return (
    <Steps.Root w="full" count={4}>
      <Steps.List>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Steps.Content index={idx} key={idx.toString()}>
            <DecorativeBox visual="filled" h="320px">
              {idx + 1}
            </DecorativeBox>
          </Steps.Content>
        ))}
        <Steps.CompletedContent>
          <DecorativeBox visual="filled" h="320px">
            Completed
          </DecorativeBox>
        </Steps.CompletedContent>
      </Steps.List>
      <Stack mt="16" justify="between">
        <Steps.PrevTrigger asChild>
          <Button visual="surface">
            Go Back
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>
            Continue
          </Button>
        </Steps.NextTrigger>
      </Stack>
    </Steps.Root>
  );
};
