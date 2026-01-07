import type { Story, StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Kbd } from "../kbd";
import { Tooltip } from ".";

export default {
  title: "Tooltip",
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["left", "top", "bottom", "right", "bottom-end", "bottom-start", "top-start", "top-end", "right-start", "right-end", "left-start", "left-end"],
    },
  },
  args: {
    placement: "bottom",
  },
} satisfies StoryDefault;

export const Base: Story<Tooltip.RootProps & { placement: string }> = (args) => {
  return (
    <Tooltip.Root positioning={{ placement: args.placement as "bottom" }} openDelay={200}>
      <Tooltip.Trigger asChild>
        <IconButton size="2xl" visual="soft" tone="neutral">
          <Icon icon="ph:moon-bold" boxSize="20px" />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content maxW="320px" py="6" px="12" asChild>
          <Card.Root visual="elevated">
            <Kbd.Root size="xs" radius="xs" fontSize="13">
              <Kbd.Item fontSize="14">
                D
              </Kbd.Item>
               - Switch website theme
            </Kbd.Root>
          </Card.Root>
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
