import { styled } from "@plumui/styled/jsx";
import { Portal as ArkPortal } from "@ark-ui/react/portal";
import type { ComponentProps } from "@plumui/styled/types";

export type PortalProps = ComponentProps<typeof Portal>;
export const Portal = styled(ArkPortal)
Portal.displayName = "Portal";
