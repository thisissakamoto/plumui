import { Frame as ArkFrame} from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import type { ComponentProps } from "@plumui/styled/types";

export type FrameProps = ComponentProps<typeof Frame>;
export const Frame = styled(ArkFrame);
Frame.displayName = "Frame";
