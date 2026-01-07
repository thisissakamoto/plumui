import {
  Timer,
  type UseTimerContext,
  type UseTimerProps,
  type UseTimerReturn,
  useTimer,
  useTimerContext,
} from "@ark-ui/react/timer";
import { createStyleContext } from "@plumui/styled/jsx";
import { timerRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useTimer;
export const useContext = useTimerContext;

export type {
  UseTimerContext as UseContext,
  UseTimerProps as UseProps,
  UseTimerReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(timerRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Timer.RootProvider, "root");
Provider.displayName = "TimerProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Timer.Root, "root");
Root.displayName = "TimerRoot";

export type ActionTriggerProps = ComponentProps<typeof ActionTrigger>;
export const ActionTrigger = withContext(Timer.ActionTrigger, "actionTrigger");
ActionTrigger.displayName = "TimerActionTrigger";

export type AreaProps = ComponentProps<typeof Area>;
export const Area = withContext(Timer.Area, "area");
Area.displayName = "TimerArea";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Timer.Context;

export type ControlProps = ComponentProps<typeof Control>;
export const Control = withContext(Timer.Control, "control");
Control.displayName = "TimerControl";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Timer.Item, "item");
Item.displayName = "TimerItem";

export type SeparatorProps = ComponentProps<typeof Separator>;
export const Separator = withContext(Timer.Separator, "separator");
Separator.displayName = "TimerSeparator";
