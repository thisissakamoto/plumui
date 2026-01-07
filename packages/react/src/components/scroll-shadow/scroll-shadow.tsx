import { ScrollShadow as HerouiScrollShadow, type ScrollShadowProps as HerouiScrollShadowProps } from "@heroui/scroll-shadow";
import { styled } from "@plumui/styled/jsx";
import { scrollShadowRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";
import React from "react";

const Base = React.forwardRef<HTMLDivElement, HerouiScrollShadowProps>((props, ref) => {
  const { hideScrollBar, ...rest } = props;

  return <HerouiScrollShadow ref={ref} {...rest} data-hide-scrollbar={hideScrollBar} hideScrollBar={hideScrollBar} />
})

export type ScrollShadowProps = ComponentProps<typeof ScrollShadow>;
export const ScrollShadow = styled(Base, scrollShadowRecipe);
ScrollShadow.displayName = "ScrollShadow";
