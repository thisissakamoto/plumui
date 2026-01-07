import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Timer } from ".";

export default {
	title: "Timer",
} satisfies StoryDefault

export const Base: Story<Timer.RootProps> = () => {
  return (
    <Timer.Root countdown autoStart startMs={60 * 60 * 300}>
      <Card.Root w="256px" visual="elevated">
        <Timer.Area asChild justifyContent="center">
          <Card.Header p="16">
            <Timer.Item fontWeight="800" type="minutes" />
            <Timer.Separator>:</Timer.Separator>
            <Timer.Item fontWeight="800" type="seconds" />
          </Card.Header>
        </Timer.Area>
        <Card.Body px="16">
          <Card.Description w="full" textAlign="center">
            Counting down...
          </Card.Description>
        </Card.Body>
        <Timer.Control>
          <Card.Footer p="16" gap="12" w="full" alignItems="center">
            <Timer.ActionTrigger asChild action="pause">
              <Button wide visual="surface" size="md">
                <Icon icon="ph:pause-fill" boxSize="20px" />
              </Button>
            </Timer.ActionTrigger>
            <Timer.ActionTrigger asChild action="resume">
              <Button wide size="xl">
                <Icon icon="ph:play-fill" boxSize="20px" />
              </Button>
            </Timer.ActionTrigger>
            <Timer.ActionTrigger asChild action="restart">
              <Button wide visual="surface" size="md">
                <Icon icon="ph:repeat-bold" boxSize="20px" />
              </Button>
            </Timer.ActionTrigger>
          </Card.Footer>
        </Timer.Control>
      </Card.Root>
    </Timer.Root>
  );
};
