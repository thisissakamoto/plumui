import type { StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { Portal } from "../portal";
import { HoverCard } from ".";

export default {
	title: "Hover Card",
} satisfies StoryDefault

export const Base = () => {
  return (
    <HoverCard.Root openDelay={500}>
      <HoverCard.Trigger asChild>
        <Button visual="surface">Auto Save</Button>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <Card.Root maxW="320px" visual="elevated">
              <Card.Body py="8" px="16">
                <Card.Description>
                  Saved locally every few seconds. Submit to server manually.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};
