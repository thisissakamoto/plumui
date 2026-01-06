import type { StoryDefault } from "@ladle/react";
import { Button } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";
import { Portal } from "../portal";
import { Menu } from ".";

export default {
  title: "Menu",
} satisfies StoryDefault

const items = [
  {
    icon: "lucide:shopping-basket",
    label: "Shop",
    value: "shop",
  },
  {
    icon: "lucide:tool-case",
    label: "Billing",
    value: "billing",
  },
  {
    icon: "lucide:settings",
    label: "Settings",
    value: "settings",
  },
  {
    icon: "lucide:file-braces-corner",
    label: "Docs",
    value: "docs",
  },
];



export const Base = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
      <Button visual="surface">Actions</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Card.Root p="6" w="256px" orientation="vertical">
              {items.map((item) => {
                return (
                  <Menu.Item key={item.value} value={item.value}>
                    <Menu.ItemIndicator>
                      <Icon icon={item.icon} />
                    </Menu.ItemIndicator>
                    <Menu.ItemText flex="1">{item.label}</Menu.ItemText>
                  </Menu.Item>
                )
              })}
            </Card.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
