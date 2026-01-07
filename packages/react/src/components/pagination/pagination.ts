import {
  Pagination,
  type UsePaginationContext,
  type UsePaginationProps,
  type UsePaginationReturn,
  usePagination,
  usePaginationContext,
} from "@ark-ui/react/pagination";
import { createStyleContext } from "@plumui/styled/jsx";
import { paginationRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export const use = usePagination;
export const useContext = usePaginationContext;

export type {
  UsePaginationContext as UseContext,
  UsePaginationProps as UseProps,
  UsePaginationReturn as UseReturn,
};

const { withProvider, withContext } = createStyleContext(paginationRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(Pagination.RootProvider, "root");
Provider.displayName = "PaginationProvider";

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(Pagination.Root, "root");
Root.displayName = "PaginationRoot";

export type ContextProps = ComponentProps<typeof Context>;
export const Context = Pagination.Context;

export type EllipsisProps = ComponentProps<typeof Ellipsis>;
export const Ellipsis = withContext(Pagination.Ellipsis, "ellipsis");
Ellipsis.displayName = "PaginationEllipsis";

export type ItemProps = ComponentProps<typeof Item>;
export const Item = withContext(Pagination.Item, "item");
Item.displayName = "PaginationItem";

export type NextTriggerProps = ComponentProps<typeof NextTrigger>;
export const NextTrigger = withContext(Pagination.NextTrigger, "nextTrigger");
NextTrigger.displayName = "PaginationNextTrigger";

export type PrevTriggerProps = ComponentProps<typeof PrevTrigger>;
export const PrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger");
PrevTrigger.displayName = "PaginationPrevTrigger";
