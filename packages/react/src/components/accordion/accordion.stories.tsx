import type { StoryDefault } from "@ladle/react";
import { Icon } from "../icon";
import { Accordion } from ".";

export default {
  title: "Accordion",
} satisfies StoryDefault;


export const Base = () => (
  <Accordion.Root>
    {items.map((item) => (
      <Accordion.Item key={item.id} value={item.id}>
        <Accordion.ItemTrigger>
          {item.title}
          <Accordion.ItemIndicator>
            <Icon icon="lucide:cheveron-down" />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          {item.content}
        </Accordion.ItemContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const items = [
  {
    id: "item-1",
    title: "Getting Started",
    content: "Welcome to our platform! Here's how to create your first project and set up your account.",
  },
  {
    id: "item-2",
    title: "Account Settings",
    content: "Manage your profile information, notification preferences, and security settings.",
  },
  {
    id: "item-3",
    title: "Billing & Payments",
    content: "View your subscription plan, payment history, and update your payment method.",
  },
];
