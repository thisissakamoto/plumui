import type { StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Icon } from "../icon";
import { InputGroup } from "../input";
import { Separator } from "../separator";
import { NumberInput } from ".";

export default {
	title: "Number Input",
} satisfies StoryDefault

export const Base = () => {
  return (
    <NumberInput.Root name="height" formatOptions={{ style: "unit", unit: "centimeter", unitDisplay: "short" }} defaultValue="56">
      <NumberInput.Control>
        <InputGroup.Root w="256px" visual="elevated">
          <NumberInput.Label asChild>
            <InputGroup.Label>Height</InputGroup.Label>
          </NumberInput.Label>
          <InputGroup.Content>
            <InputGroup.Addon stretch flexDir="column">
              <NumberInput.DecrementTrigger asChild>
                <IconButton tone="neutral" visual="flat" radius="none">
                  <Icon boxSize="16" icon="lucide:minus" />
                </IconButton>
              </NumberInput.DecrementTrigger>
            </InputGroup.Addon>
            <Separator layout="stacked" />
            <NumberInput.Input asChild placeholder="Enter unit" px="12" w="full">
              <InputGroup.Input />
            </NumberInput.Input>
            <Separator layout="stacked" />
            <InputGroup.Addon stretch flexDir="column">
              <NumberInput.IncrementTrigger asChild>
                <IconButton tone="neutral" visual="flat" radius="none">
                  <Icon boxSize="16" icon="lucide:plus" />
                </IconButton>
              </NumberInput.IncrementTrigger>
            </InputGroup.Addon>
          </InputGroup.Content>
        </InputGroup.Root>
      </NumberInput.Control>
    </NumberInput.Root>
  );
};
