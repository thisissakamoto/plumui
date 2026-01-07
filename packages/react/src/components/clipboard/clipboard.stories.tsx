import type { Story, StoryDefault } from "@ladle/react";
import { ButtonGroup } from "../button";
import { Icon } from "../icon";
import { Clipboard } from ".";

export default {
  title: "Clipboard",
} satisfies StoryDefault;

export const Base: Story<Clipboard.RootProps> = () => {
  return (
    <Clipboard.Root value="https://x.com">
      <ButtonGroup.Root tone="neutral" visual="surface">
        <ButtonGroup.Item>
          Share
        </ButtonGroup.Item>
        <Clipboard.Trigger asChild>
          <ButtonGroup.Item iconOnly>
            <Clipboard.Indicator copied={<Icon icon="lucide:check" boxSize="16" />}>
              <Icon icon="lucide:copy" boxSize="16" />
            </Clipboard.Indicator>
          </ButtonGroup.Item>
        </Clipboard.Trigger>
      </ButtonGroup.Root>
    </Clipboard.Root>
  )
};
