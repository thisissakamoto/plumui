import type { Story, StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { Portal } from "../portal";
import { Dialog } from ".";

export default {
  title: "Dialog",
} satisfies StoryDefault;

export const Base: Story<Dialog.RootProps> = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button tone="red">Delete file</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Card.Root p="16">
              <Card.Header orientation="vertical">
                <Dialog.Title>
                  Are you sure?
                </Dialog.Title>
                <Dialog.Description mt="4">
                  This action cannot be undone. The file will be permanently deleted from our systems and cannot be recovered.
                </Dialog.Description>
              </Card.Header>
              <Card.Footer mt="24" gap="8" justifyContent="end">
                <Dialog.CloseTrigger asChild>
                  <Button visual="surface" tone="neutral">Cancel</Button>
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger asChild>
                  <Button tone="red">Delete</Button>
                </Dialog.CloseTrigger>
              </Card.Footer>
            </Card.Root>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
};
