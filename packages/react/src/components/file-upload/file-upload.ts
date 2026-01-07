import {
  FileUpload,
  type UseFileUploadContext,
  type UseFileUploadProps,
  type UseFileUploadReturn,
  useFileUpload,
  useFileUploadContext,
} from "@ark-ui/react/file-upload";
import { createStyleContext } from "@plumui/styled/jsx";
import { fileUploadRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useFileUpload;
export const useContext = useFileUploadContext;

export type {
  UseFileUploadContext as UseContext,
  UseFileUploadProps as UseProps,
  UseFileUploadReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(FileUpload.RootProvider, "root");
Provider.displayName = "FileUploadProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(FileUpload.Root, "root");
Root.displayName = "FileUploadRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = FileUpload.Context;

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(FileUpload.Trigger, "trigger");
Trigger.displayName = "FileUploadTrigger";

export type DropzoneProps = ComponentProps<typeof Dropzone>;
export const Dropzone = withContext(FileUpload.Dropzone, "dropzone");
Dropzone.displayName = "FileUploadDropzone";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(FileUpload.Item, "item");
Item.displayName = "FileUploadItem";

export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export const ItemGroup = withContext(FileUpload.ItemGroup, "itemGroup");
ItemGroup.displayName = "FileUploadItemGroup";

export type ItemPreviewProps = ComponentProps<typeof ItemPreview>;
export const ItemPreview = withContext(FileUpload.ItemPreview, "itemPreview");
ItemPreview.displayName = "FileUploadItemPreview";

export type ItemPreviewImageProps = ComponentProps<typeof ItemPreviewImage>;
export const ItemPreviewImage = withContext(FileUpload.ItemPreviewImage, "itemPreviewImage");
ItemPreviewImage.displayName = "FileUploadItemPreviewImage";

export type ItemNameProps = ComponentProps<typeof ItemName>;
export const ItemName = withContext(FileUpload.ItemName, "itemName");
ItemName.displayName = "FileUploadItemName";

export type ItemSizeTextProps = ComponentProps<typeof ItemSizeText>;
export const ItemSizeText = withContext(FileUpload.ItemSizeText, "itemSizeText");
ItemSizeText.displayName = "FileUploadItemSizeText";

export type ItemDeleteTriggerProps = ComponentProps<typeof ItemDeleteTrigger>;
export const ItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger");
ItemDeleteTrigger.displayName = "FileUploadItemDeleteTrigger";

export type ClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export const ClearTrigger = withContext(FileUpload.ClearTrigger, "clearTrigger");
ClearTrigger.displayName = "FileUploadClearTrigger";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(FileUpload.Label, "label");
Label.displayName = "FileUploadLabel";

export type HiddenInputProps = ComponentProps<typeof HiddenInput>;
export const HiddenInput = FileUpload.HiddenInput;
HiddenInput.displayName = "FileUploadHiddenInput";
