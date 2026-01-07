import {
	Steps,
	type UseStepsContext,
	type UseStepsItemContext,
	type UseStepsProps,
	type UseStepsReturn,
	useSteps,
	useStepsContext,
	useStepsItemContext,
} from "@ark-ui/react/steps";
import { createStyleContext } from "@plumui/styled/jsx";
import { stepsRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useSteps;
export const useContext = useStepsContext;
export const useItemContext = useStepsItemContext;

export type {
	UseStepsContext as UseContext,
	UseStepsProps as UseProps,
	UseStepsReturn as UseReturn,
	UseStepsItemContext as UseItemContext,
};

const { withProvider, withContext } = createStyleContext(stepsRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Steps.RootProvider, "root");
Provider.displayName = "StepsProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Steps.Root, "root");
Root.displayName = "StepsRoot";

export type CompletedContentProps = ComponentProps<typeof CompletedContent>;
export const CompletedContent = withContext(
	Steps.CompletedContent,
	"completedContent",
);
CompletedContent.displayName = "StepsCompletedContent";

export type ContentProps = ComponentProps<typeof Content>;
export const Content = withContext(Steps.Content, "content");
Content.displayName = "StepsContent";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Steps.Context;

export type ItemContextProps = ComponentProps<typeof ItemContext>;
export const ItemContext = Steps.ItemContext;

export type IndicatorProps = ComponentProps<typeof Indicator>;
export const Indicator = withContext(Steps.Indicator, "indicator");
Indicator.displayName = "StepsIndicator";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Steps.Item, "item");
Item.displayName = "StepsItem";

export type ListProps = ComponentProps<typeof List>;
export const List = withContext(Steps.List, "list");
List.displayName = "StepsList";

export type NextTriggerProps = ComponentProps<typeof NextTrigger>;
export const NextTrigger = withContext(Steps.NextTrigger, "nextTrigger");
NextTrigger.displayName = "StepsNextTrigger";

export type PrevTriggerProps = ComponentProps<typeof PrevTrigger>;
export const PrevTrigger = withContext(Steps.PrevTrigger, "prevTrigger");
PrevTrigger.displayName = "StepsPrevTrigger";

export type ProgressProps = ComponentProps<typeof Progress>;
export const Progress = withContext(Steps.Progress, "progress");
Progress.displayName = "StepsProgress";

export type SeparatorProps = ComponentProps<typeof Separator>;
export const Separator = withContext(Steps.Separator, "separator");
Separator.displayName = "StepsSeparator";

export type TriggerProps = ComponentProps<typeof Trigger>;
export const Trigger = withContext(Steps.Trigger, "trigger");
Trigger.displayName = "StepsTrigger";
