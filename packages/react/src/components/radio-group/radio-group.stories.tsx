import type { Story, StoryDefault } from "@ladle/react";
import { getVariants } from "@plumui/presets";
import { RadioGroup } from ".";
import { Box } from "../box";
import { Text } from "../text";


export default {
  title: "Radio Group",
  argTypes: {
    size: {
      control: { type: "select" },
      options: getVariants("size").values,
    },
    radius: {
      control: { type: "select" },
      options: getVariants("radius").values,
    },
    tone: {
      control: { type: "select" },
      options: getVariants("tone").values,
    },
  },
  args: {
    size: "sm",
    tone: "blue",
    radius: "full",
  },
} satisfies StoryDefault;

export const Base: Story<RadioGroup.RootProps> = (args) => {
  const plans = [
    {
      id: "1",
      name: "Basic",
      desc: "Include 10,000 requests monthly"
    },
    {
      id: "2",
      name: "Pro",
      desc: "Include 50,000 requests monthly"
    },
    {
      id: "3",
      name: "Enterprise",
      desc: "Unlimited requests"
    }
  ];

  return (
    <RadioGroup.Root spaceY="16" {...args}>
      {plans.map((plan) => (
        <RadioGroup.Item key={plan.id} value={plan.id}>
          <RadioGroup.ItemControl>
            <RadioGroup.ItemIndicator />
          </RadioGroup.ItemControl>
          <Box flex="1">
            <Text as="h6" size="14" lineHeight="none" color="fg">{plan.name}</Text>
            <Text size="12" mt="4">{plan.desc}</Text>
          </Box>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
