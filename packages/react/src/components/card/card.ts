import { createStyleContext } from "@plumui/styled/jsx";
import { cardRecipe } from "@plumui/styled/recipes";
import type { ComponentProps } from "@plumui/styled/types";
import * as CardBase from "./card-base";
import { useCard, useCardContext } from "./card-context";

export const use = useCard;
export const useContext = useCardContext;

const { withContext, withProvider } = createStyleContext(cardRecipe);

export type ProviderProps = ComponentProps<typeof Provider>;
export const Provider = withProvider(CardBase.Provider, "root");
Provider.displayName = "CardProvider"

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider(CardBase.Root, "root");
Root.displayName = "CardRoot";

export type HeaderProps = ComponentProps<typeof Header>;
export const Header = withContext(CardBase.Header, "header");
Header.displayName = "CardHeader";

export type TitleProps = ComponentProps<typeof Title>;
export const Title = withContext(CardBase.Title, "title");
Title.displayName = "CardTitle";

export type SubtitleProps = ComponentProps<typeof Subtitle>;
export const Subtitle = withContext(CardBase.Subtitle, "subtitle");
Subtitle.displayName = "CardSubtitle";

export type DescriptionProps = ComponentProps<typeof Description>;
export const Description = withContext(CardBase.Description, "description");
Description.displayName = "CardDescription";

export type MediaProps = ComponentProps<typeof Media>;
export const Media = withContext(CardBase.Media, "media");
Media.displayName = "CardMedia";

export type BodyProps = ComponentProps<typeof Body>;
export const Body = withContext(CardBase.Body,  "body");
Body.displayName = "CardBody";

export type FooterProps = ComponentProps<typeof Footer>;
export const Footer = withContext(CardBase.Footer, "footer");
Footer.displayName = "CardFooter";
