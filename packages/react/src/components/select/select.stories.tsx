import type { Story, StoryDefault } from "@ladle/react";
import { Card } from "../card";
import { Icon } from "../icon";
import { InputGroup } from "../input";
import { Listbox } from "../listbox";
import { Portal } from "../portal";
import { Select } from ".";

export default {
  title: "Select",
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    disabled: false,
  },
} satisfies StoryDefault;

export const Base: Story<Select.RootProps> = (args) => {
  const collection = Listbox.createCollection({
    items: ["Student", "Accountant", "Computer Scientist", "Medical Doctor", "Dentist", "Artist", "Engineer", "Freelancer",],
  });

  return (
    <Select.Root {...args} name="employment" collection={collection as any}>
      <Select.Control>
        <Select.Trigger w="256px">
          <InputGroup.Root visual="elevated">
            <Select.Label asChild>
              <InputGroup.Label>Employment</InputGroup.Label>
            </Select.Label>
            <InputGroup.Content>
              <InputGroup.Addon px="12" w="full" flexDir="column" alignItems="start">
                <Select.ValueText placeholder="Select industry" fontSize="14px" />
              </InputGroup.Addon>
              <Select.Indicator pr="12">
                <Icon icon="ph:caret-down-bold" boxSize="14px" />
              </Select.Indicator>
            </InputGroup.Content>
          </InputGroup.Root>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Card.Root radius="xl" visual="elevated" p="6">
              <Select.ItemGroup spaceY="2">
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>
                      {item}
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <Icon boxSize="16px" icon="ph:check-bold" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Card.Root>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
