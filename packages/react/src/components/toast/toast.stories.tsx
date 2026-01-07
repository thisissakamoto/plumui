import React from "react";
import { Toast } from ".";
import { Card } from "../card";
import { Button } from "../button";
import type { Story, StoryDefault } from "@ladle/react";

export default {
	title: "Toast",
} satisfies StoryDefault



export const Base: Story<Toast.RootProps> = () => {
  const toaster = React.useRef(
    Toast.create({
      max: 4,
      gap: 6,
      overlap: true,
      placement: "top",
    })
  ).current;

  const handleCreateToast = () => {
    toaster.create({
      duration: 5000,
      title: "Deployment completed. The new version is live",
    });
  };

  return (
    <>
      <Button tone="neutral" visual="soft" onClick={handleCreateToast}>
        Deploy app
      </Button>
      <Toast.Group toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id} asChild>
            <Card.Root visual="elevated" radius="2xl" gap="12" layout="inline" py="12" px="16" alignItems="center">
              <Card.Body>
                <Toast.Title>
                  {toast.title}
                </Toast.Title>
              </Card.Body>
            </Card.Root>
          </Toast.Root>
        )}
      </Toast.Group>
    </>
  );
};
