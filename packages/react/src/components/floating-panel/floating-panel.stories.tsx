import type { Story, StoryDefault } from "@ladle/react";
import { Portal } from "../portal";
import { FloatingPanel } from ".";

export default {
  title: "Floating Panel"
} satisfies StoryDefault;

export const Base: Story<FloatingPanel.RootProps> = () => {
  return (
    <FloatingPanel.Root>
      <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
};
