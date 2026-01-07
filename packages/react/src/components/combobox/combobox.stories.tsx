import type { Story, StoryDefault } from "@ladle/react";
import { IconButton } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { InputGroup } from "../input";
import { Portal } from "../portal";
import { Combobox } from ".";

export default {
  title: "Combobox",
} satisfies StoryDefault;

export const Base: Story<Combobox.RootProps> = () => {
  const { contains } = Combobox.useFilter({ sensitivity: 'base' });
  const { collection, filter } = Combobox.useCollection({ initialItems: items, filter: contains, itemToString: (item) => item.name, itemToValue: (item) => item.name });

  const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    <Combobox.Root collection={collection as any} onInputValueChange={handleInputValueChange}>
      <InputGroup.Root w="256px">
        <Combobox.Label asChild>
          <InputGroup.Label>
            Assign
          </InputGroup.Label>
        </Combobox.Label>
        <Combobox.Control>
          <InputGroup.Content>
            <Combobox.Input asChild px="12" flex="1" placeholder="Type to filter...">
              <InputGroup.Input />
            </Combobox.Input>
            <InputGroup.Addon>
              <Combobox.Trigger asChild>
                <IconButton size="xl" radius="none" tone="neutral" visual="flat">
                  <Icon icon="lucide:chevron-up" />
                </IconButton>
              </Combobox.Trigger>
            </InputGroup.Addon>
          </InputGroup.Content>
        </Combobox.Control>
      </InputGroup.Root>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Card.Root p="6" spaceY="2">
              {collection.items.map((item) => (
                <Combobox.Item key={item.id} item={item.name}>
                  <Combobox.ItemText>{item.name}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <Icon icon="lucide:check" />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Card.Root>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
};

const items = [
  {
    id: "1",
    name: "Sarah Williams"
  },
  {
    id: "2",
    name: "Matt Rudd"
  },
  {
    id: "3",
    name: "Elisah Wembley"
  },
  {
    id: "4",
    name: "Robert Dest"
  },
  {
    id: "5",
    name: "Callum Williamson"
  },
  {
    id: "6",
    name: "Quicy Bert"
  },
  {
    id: "7",
    name: "Sadiq Raheem"
  },
]
