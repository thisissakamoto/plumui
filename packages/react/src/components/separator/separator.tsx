import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { separatorRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";
import React from "react";

type BaseProps = Assign<HTMLArkProps<"span">, { orientation?: "horizontal" | "vertical" }>;
const Base = React.forwardRef<HTMLSpanElement, BaseProps>((props, ref) => {
  const { orientation = "horizontal", ...rest } = props;

  return <ark.span ref={ref} aria-orientation={orientation} data-orientation={orientation} {...rest} />
});

export type SeparatorProps = ComponentProps<typeof Separator>
export const Separator = styled(Base, separatorRecipe)
Separator.displayName = "Separator";
