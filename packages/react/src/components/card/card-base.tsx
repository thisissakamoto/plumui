import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import React from "react";
import { CardContext, type CardContextProps, type UseCardProps, useCard, useCardContext } from "./card-context";


export type ProviderBaseProps = Assign<HTMLArkProps<"div">, { value: CardContextProps }>;
export const Provider = React.forwardRef<HTMLDivElement, ProviderBaseProps>((props, ref) => {
  const { value, ...rest } = props;

  return (
    <CardContext.Provider value={value}>
      <ark.div
        data-scope="card"
        data-part="root"
        role="group"
        ref={ref}
        {...rest}
        />
    </CardContext.Provider>
  );
});

export type RootBaseProps = Assign<HTMLArkProps<"div">, UseCardProps>;
export const Root = React.forwardRef<HTMLDivElement, RootBaseProps>((props, ref) => {
  const { children, ...rest } = props;
  const value = useCard();

  return (
    <CardContext.Provider value={value}>
      <ark.div
        data-scope="card"
        data-part="root"
        role="group"
        ref={ref}
        {...rest}
      >
        {children}
      </ark.div>
    </CardContext.Provider>
  );
});

export type TitleBaseProps = HTMLArkProps<"h3">;
export const Title = React.forwardRef<HTMLHeadingElement, TitleBaseProps>((props, ref) => {
  const { ids } = useCardContext();

  return (
    <ark.h3
      data-scope="card"
      data-part="title"
      id={ids?.title}
      ref={ref}
      {...props}
    />
  );
});

export type SubtitleBaseProps = HTMLArkProps<"h6">;
export const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleBaseProps>((props, ref) => {
  useCardContext();

  return (
    <ark.h6
      data-scope="card"
      data-part="subtitle"
      ref={ref}
      {...props}
    />
  );
});

export type DescriptionBaseProps = HTMLArkProps<"p">;
export const Description = React.forwardRef<HTMLParagraphElement, DescriptionBaseProps>((props, ref) => {
  const { ids } = useCardContext();

  return (
    <ark.p
      data-scope="card"
      data-part="description"
      id={ids?.description}
      ref={ref}
      {...props}
    />
  );
});

export type MediaBaseProps = HTMLArkProps<"div">;
export const Media = React.forwardRef<HTMLDivElement, MediaBaseProps>((props, ref) => {
  const { ids } = useCardContext();

  return (
    <ark.div
      role="img"
      data-scope="card"
      data-part="media"
      aria-labelledby={ids?.title}
      aria-describedby={ids?.description}
      ref={ref}
      {...props}
    />
  );
});

export type HeaderBaseProps = Assign<HTMLArkProps<"header">, {
  orientation?: "horizontal" | "vertical";
}>;
export const Header = React.forwardRef<HTMLElement, HeaderBaseProps>((props, ref) => {
  const { orientation, ...rest } = props;
  const { ids } = useCardContext();

  return (
    <ark.header
      ref={ref}
      data-scope="card"
      data-part="header"
      aria-labelledby={ids?.title}
      aria-orientation={orientation}
      data-orientation={orientation}
      {...rest}
    />
  );
});

export type BodyBaseProps = Assign<HTMLArkProps<"div">, {
  orientation?: "horizontal" | "vertical";
}>;
export const Body = React.forwardRef<HTMLDivElement, BodyBaseProps>((props, ref) => {
  const { orientation, ...rest } = props;
  const { ids } = useCardContext();

  return (
    <ark.div
      ref={ref}
      data-scope="card"
      data-part="body"
      aria-labelledby={ids?.title}
      aria-orientation={orientation}
      data-orientation={orientation}
      aria-describedby={ids?.description}
      {...rest}
    />
  );
});

export type FooterBaseProps = Assign<HTMLArkProps<"footer">, {
  orientation?: "horizontal" | "vertical";
}>;
export const Footer = React.forwardRef<HTMLElement, FooterBaseProps>((props, ref) => {
  const { orientation, ...rest } = props;
  const { ids } = useCardContext();

  return (
    <ark.footer
      ref={ref}
      data-scope="card"
      data-part="footer"
      aria-labelledby={ids?.title}
      aria-orientation={orientation}
      data-orientation={orientation}
      {...rest}
    />
  );
});
