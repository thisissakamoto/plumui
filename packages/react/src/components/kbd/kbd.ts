import { ark } from "@ark-ui/react";
import { createStyleContext } from "@plumui/styled/jsx";
import { kbdRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

const { withProvider, withContext } = createStyleContext(kbdRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(ark.div, "root", {
  defaultProps: {
   role: "group",
   "aria-roledescription": "keyboard shortcut",
  }
});
Root.displayName = "KbdRoot";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(ark.div, "item",{
  defaultProps: {
    role: "presentation"
  }
});
Root.displayName = "KbdItem";
