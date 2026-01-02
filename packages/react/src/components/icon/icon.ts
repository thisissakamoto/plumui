import * as IconifyIcon from "@iconify/react";
import { styled } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";

export type IconProps = ComponentProps<typeof Icon>;
export const Icon = styled(IconifyIcon.Icon);
Icon.displayName = "Icon";

export type InlineIconProps = ComponentProps<typeof InlineIcon>;
export const InlineIcon = styled(IconifyIcon.Icon);
InlineIcon.displayName = "InlineIcon";
