import type { Story, StoryDefault } from "@ladle/react";
import { ButtonGroup } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Portal } from "../portal";
import { Popover } from ".";

export default {
  title: "Popover",
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["top", "top-end", "top-start", "right", "right-end", "right-start", "bottom", "bottom-end", "bottom-start", "left", "left-end", "left-start"],
      defaultValue: "bottom"
    }
  },
  args: {
    placement: "bottom"
  }
} satisfies StoryDefault;

export const Base: Story<Popover.RootProps & { placement: "top" }> = (args) => {
  return (
    <Popover.Root portalled positioning={{ placement: args.placement }}>
      <ButtonGroup.Root tone="red" visual="surface">
        <ButtonGroup.Item>
          Ban Sakamoto
        </ButtonGroup.Item>
        <Popover.Trigger asChild>
          <ButtonGroup.Item iconOnly>
            <Popover.Indicator>
              <Icon boxSize="14" icon="ph:caret-down-bold" />
            </Popover.Indicator>
          </ButtonGroup.Item>
        </Popover.Trigger>
      </ButtonGroup.Root>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Card.Root visual="elevated" radius="md" orientation="vertical" w="280px">
              <Card.Body px="10" py="6">
                <Popover.Description fontSize="13" lineHeight="sm">
                  The user will be unable to interact with the group and it's member. The action is irreversible.
                </Popover.Description>
              </Card.Body>
            </Card.Root>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
