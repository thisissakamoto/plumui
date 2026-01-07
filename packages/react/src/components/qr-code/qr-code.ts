import {
  QrCode,
  type UseQrCodeContext,
  type UseQrCodeProps,
  type UseQrCodeReturn,
  useQrCode,
  useQrCodeContext,
} from "@ark-ui/react/qr-code";
import { createStyleContext } from "@plumui/styled/jsx";
import { qrCodeRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useQrCode;
export const useContext = useQrCodeContext;

export type {
  UseQrCodeContext as UseContext,
  UseQrCodeProps as UseProps,
  UseQrCodeReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(qrCodeRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(QrCode.RootProvider, "root");
Provider.displayName = "QrCodeProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(QrCode.Root, "root");
Root.displayName = "QrCodeRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = QrCode.Context;

export type DownloadTriggerProps = ComponentProps<typeof DownloadTrigger>;
export const DownloadTrigger = withContext(QrCode.DownloadTrigger, "downloadTrigger");
DownloadTrigger.displayName = "QrCodeDownloadTrigger";

export type FrameProps = ComponentProps<typeof Frame>;
export const Frame = withContext(QrCode.Frame, "frame");
Frame.displayName = "QrCodeFrame";

export type OverlayProps = ComponentProps<typeof Overlay>;
export const Overlay = withContext(QrCode.Overlay, "overlay");
Overlay.displayName = "QrCodeOverlay";

export type PatternProps = ComponentProps<typeof Pattern>;
export const Pattern = withContext(QrCode.Pattern, "pattern");
Pattern.displayName = "QrCodePattern";
