import type { StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Icon } from "../icon";
import { InputGroup } from "../input";
import { PasswordInput } from ".";
import { Separator } from "../separator";

export default {
	title: "Password Input",
} satisfies StoryDefault;

export const Base = () => {
  return (
    <PasswordInput.Root name="password" defaultValue="my-password">
      <PasswordInput.Control asChild alignItems="start">
        <InputGroup.Root w="256px" visual="elevated">
          <PasswordInput.Label asChild>
            <InputGroup.Label>Password</InputGroup.Label>
          </PasswordInput.Label>
          <InputGroup.Content>
            <PasswordInput.Input asChild px="12" flex="1">
              <InputGroup.Input />
            </PasswordInput.Input>
            <Separator layout="stacked" />
            <InputGroup.Addon stretch>
              <PasswordInput.VisibilityTrigger asChild>
                <IconButton radius="none" tone="neutral" visual="ghost">
                  <PasswordInput.Indicator fallback={<Icon boxSize="16" icon="lucide:lock-keyhole-open" />}>
                    <Icon boxSize="16" icon="lucide:lock-keyhole" />
                  </PasswordInput.Indicator>
                </IconButton>
              </PasswordInput.VisibilityTrigger>
            </InputGroup.Addon>
          </InputGroup.Content>
        </InputGroup.Root>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
};
