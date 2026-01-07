import {
	NumberInput,
	type UseNumberInputContext,
	type UseNumberInputProps,
	type UseNumberInputReturn,
	useNumberInput,
	useNumberInputContext,
} from "@ark-ui/react/number-input";
import { createStyleContext } from "@plumui/styled/jsx";
import { numberInputRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useNumberInput;
export const useContext = useNumberInputContext;

export type {
	UseNumberInputContext as UseContext,
	UseNumberInputProps as UseProps,
	UseNumberInputReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(numberInputRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(NumberInput.RootProvider, "root");
Provider.displayName = "NumberInputProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(NumberInput.Root, "root");
Root.displayName = "NumberInputRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = NumberInput.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(NumberInput.Control, "control");
Control.displayName = "NumberInputControl";

export type DecrementTriggerProps = ComponentProps<typeof DecrementTrigger>;
export const DecrementTrigger = withContext(
	NumberInput.DecrementTrigger,
	"decrementTrigger",
);
DecrementTrigger.displayName = "NumberInputDecrementTrigger";

export type IncrementTriggerProps = ComponentProps<typeof IncrementTrigger>;
export const IncrementTrigger = withContext(
	NumberInput.IncrementTrigger,
	"incrementTrigger",
);
IncrementTrigger.displayName = "NumberInputIncrementTrigger";

export type InputProps = ComponentProps<typeof Input>;
export const Input = withContext(NumberInput.Input, "input");
Input.displayName = "NumberInputInput";

export type LabelProps = ComponentProps<typeof Label>;
export const Label = withContext(NumberInput.Label, "label");
Label.displayName = "NumberInputLabel";

export type ScrubberProps = ComponentProps<typeof Scrubber>;
export const Scrubber = withContext(NumberInput.Scrubber, "scrubber");
Scrubber.displayName = "NumberInputScrubber";

export type ValueTextProps = ComponentProps<typeof ValueText>;
export const ValueText = withContext(NumberInput.ValueText, "valueText");
ValueText.displayName = "NumberInputValueText";
