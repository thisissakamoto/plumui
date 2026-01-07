import type { StoryDefault } from "@ladle/react";
import { Input } from "../input";
import { PinInput } from ".";

export default {
  title: "Pin Input",
} satisfies StoryDefault;

export const Basic = () => {
  return (
    <PinInput.Root placeholder="*">
      <PinInput.Control>
        {["1", "2", "3", "4", "5"].map((id, index) => (
          <PinInput.Input asChild key={id} index={index} fontSize="24" w="36px" h="40px">
            <Input visual="filled" />
          </PinInput.Input>
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
