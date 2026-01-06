import { DownloadTrigger } from "@ark-ui/react/download-trigger";
import { styled } from "@plumui/styled/jsx";
import { downloadRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type DownloadProps = ComponentProps<typeof Download>;
export const Download = styled(DownloadTrigger, downloadRecipe);
Download.displayName = "Download";
