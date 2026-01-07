import { Accordion, type AccordionFocusChangeDetails, type AccordionValueChangeDetails, type UseAccordionContext, type UseAccordionItemContext, type UseAccordionProps, type UseAccordionReturn, useAccordion, useAccordionContext, useAccordionItemContext } from "@ark-ui/react/accordion";
import { createStyleContext } from "@plumui/styled/jsx";
import { accordionRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = useAccordion;
export const useContext = useAccordionContext;
export const useItemContext = useAccordionItemContext;

export type {
  UseAccordionProps as UseProps,
  UseAccordionReturn as UseReturn,
  UseAccordionContext as UseContext,
  UseAccordionItemContext as UseItemContext,
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
};

const { withProvider, withContext } = createStyleContext(accordionRecipe);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Accordion.Root, "root");
Root.displayName = "AccordionRoot";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Accordion.Item, "item");
Item.displayName = "AccordionItem";

export type ItemTriggerProps = ComponentProps<typeof ItemTrigger>;
export const ItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger");
ItemTrigger.displayName = "AccordionItemTrigger";

export type ItemContentProps = ComponentProps<typeof ItemContent>;
export const ItemContent = withContext(Accordion.ItemContent, "itemContent");
ItemContent.displayName = "AccordionItemContent";

export type ItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export const ItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator");
ItemIndicator.displayName = "AccordionItemIndicator";
