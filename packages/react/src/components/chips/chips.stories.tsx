import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { Chips } from ".";

export default {
  title: "Chips",
  argTypes: {
    size: {
      control: {type: "select"},
      options: getVariants("size").values,
    },
    visual: {
      control: {type: "select"},
      options: getVariants("visual").extendWith("outlined", "soft").values,
    },
    tone: {
      control: {type: "select"},
      options: getVariants("tone").values,
    },
    radius: {
      control: {type: "select"},
      options: getVariants("radius").values,
    }
  },
  args: {
    size: "md",
    tone: "blue",
    radius: "full",
    visual: "filled",
  }
} satisfies StoryDefault;

export const Base: Story<Chips.RootProps> = (args) => {
  return (
    <Chips.Root w="380px" {...args}>
      {items.map((item) => (
        <Chips.Item key={item.id} value={item.id}>
          <Chips.Control>
            <Chips.Label>{item.name}</Chips.Label>
          </Chips.Control>
          <Chips.HiddenInput />
        </Chips.Item>
      ))}
    </Chips.Root>
  )
}


const items = [
  {
    id: "1",
    name: "👚Clothing"
  },
  {
    id: "2",
    name: "👖Pants"
  },
  {
    id: "3",
    name: "👔Shirts"
  },
  {
    id: "4",
    name: "👗Dresses"
  },
  {
    id: "5",
    name: "👞Shoes"
  },
  {
    id: "6",
    name: "👟Sneakers"
  },
  {
    id: "7",
    name: "👠Heels"
  },
  {
    id: "8",
    name: "👒Hats"
  },
];
