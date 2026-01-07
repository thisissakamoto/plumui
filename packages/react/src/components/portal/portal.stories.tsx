import type { Story, StoryDefault } from "@ladle/react";
import { Portal, type PortalProps } from ".";
import { Card } from "../card";

export default {
	title: "Portal",
	argTypes: {
	  disabled: {
			control: {type: "boolean"},
		}
	},
	args: {
	  disabled: false,
	}
} satisfies StoryDefault

export const Base: Story<PortalProps> = (args) => {

  return (
    <Portal {...args}>
      <Card.Root w="320px" h="fit" visual="elevated" position={args.disabled ? "static" : "fixed"} inset="12">
        <Card.Body px="16" py="12">
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Portal>
  );
};
