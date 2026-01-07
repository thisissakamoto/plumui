import {
	SignaturePad as ArkSignaturePad,
	type UseSignaturePadContext,
	type UseSignaturePadProps,
	type UseSignaturePadReturn,
	useSignaturePad,
	useSignaturePadContext,
} from "@ark-ui/react/signature-pad";
import { createStyleContext } from "@plumui/styled/jsx";
import { signaturePadRecipe } from "@plumui/styled/recipes";

export const use = useSignaturePad;
export const useContext = useSignaturePadContext;

export type {
	UseSignaturePadProps as UseProps,
	UseSignaturePadContext as UseContext,
	UseSignaturePadReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(signaturePadRecipe);

export type ProviderProps = React.ComponentProps<typeof Provider>;
export const Provider = withProvider(ArkSignaturePad.RootProvider, "root");
Provider.displayName = "SignaturePadProvider";

export type RootProps = React.ComponentProps<typeof Root>;
export const Root = withProvider(ArkSignaturePad.Root, "root");
Root.displayName = "SignaturePadRoot";

export type ClearTriggerProps = React.ComponentProps<typeof ClearTrigger>;
export const ClearTrigger = withContext(
	ArkSignaturePad.ClearTrigger,
	"clearTrigger",
);
ClearTrigger.displayName = "SignaturePadClearTrigger";

export type ContextProps = React.ComponentProps<typeof Context>;
export const Context = ArkSignaturePad.Context;

export type ControlProps = React.ComponentProps<typeof Control>;
export const Control = withContext(ArkSignaturePad.Control, "control");
Control.displayName = "SignaturePadControl";

export type GuideProps = React.ComponentProps<typeof Guide>;
export const Guide = withContext(ArkSignaturePad.Guide, "guide");
Guide.displayName = "SignaturePadGuide";

export type HiddenInputProps = React.ComponentProps<typeof HiddenInput>;
export const HiddenInput = ArkSignaturePad.HiddenInput;
HiddenInput.displayName = "SignaturePadHiddenInput";

export type LabelProps = React.ComponentProps<typeof Label>;
export const Label = withContext(ArkSignaturePad.Label, "label");
Label.displayName = "SignaturePadLabel";

export type SegmentProps = React.ComponentProps<typeof Segment>;
export const Segment = withContext(ArkSignaturePad.Segment, "segment");
Segment.displayName = "SignaturePadSegment";
