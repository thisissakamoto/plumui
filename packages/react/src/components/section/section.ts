import { ark } from "@ark-ui/react";
import { styled } from "@plumui/styled/jsx";
import { sectionRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";

export type SectionProps = ComponentProps<typeof Section>;
export const Section = styled(ark.section, sectionRecipe);
Section.displayName = "Section";
