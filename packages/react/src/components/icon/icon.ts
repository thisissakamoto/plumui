import * as IconifyIcon from "@iconify/react";
import { styled } from "@plumui/styled/jsx";
import { iconRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type IconProps = ComponentProps<typeof Icon>;
export const Icon = styled(IconifyIcon.Icon, iconRecipe);
Icon.displayName = "Icon";

export type InlineIconProps = ComponentProps<typeof InlineIcon>;
export const InlineIcon = styled(IconifyIcon.Icon, iconRecipe);
InlineIcon.displayName = "InlineIcon";
