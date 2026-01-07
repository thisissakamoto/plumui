import type { Story, StoryDefault } from "@ladle/react";
import { Icon } from "../icon";
import { Listbox } from ".";

export default {
  title: "Listbox"
} satisfies StoryDefault;

const collection = Listbox.createCollection({
  items: [
    {
      id: "1",
      icon: "",
      name: "",
    },
    {
      id: "2",
      icon: "",
      name: "",
    },
    {
      id: "3",
      icon: "",
      name: "",
    },
    {
      id: "4",
      icon: "",
      name: "",
    },
    {
      id: "5",
      icon: "",
      name: "",
    },
    {
      id: "6",
      icon: "",
      name: "",
    }
  ],
  itemToValue: (item) => item.id,
  itemToString: (item) => item.id,
});

export const Base: Story<Listbox.RootProps> = () => {
  return (
    <Listbox.Root collection={collection as any}>
      <Listbox.Content w="256px">
        {collection.items.map((item) => {
          return (
            <Listbox.Item item={item.id} key={item.id}>
              <Listbox.ItemText>
                {item.name}
              </Listbox.ItemText>
              <Listbox.ItemIndicator>
                <Icon icon="lucide:check" />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          )
        })}
      </Listbox.Content>
    </Listbox.Root>
  )
};
