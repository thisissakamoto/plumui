import { type Assign, ark, FieldTextarea, type HTMLArkProps } from "@ark-ui/react";
import React from "react";
import { InputGroupContext, type UseInputGroupProps, type UseInputGroupReturn, useInputGroup, useInputGroupContext } from "./input-group-context";

export type ProviderBaseProps = React.PropsWithChildren<{ value: UseInputGroupReturn }>;
export const Provider = React.forwardRef<never, ProviderBaseProps >((props) => {
  return (
    <InputGroupContext.Provider {...props} />
  )
});

export type ContextProps =  {
  children: (ctx: UseInputGroupReturn) => React.ReactNode
}
export const Context = React.forwardRef<never, ContextProps >((props) => {
  const { children } = props;
  const ctx = useInputGroupContext();

  return (
    <React.Fragment>
      {children(ctx)}
    </React.Fragment>
  )
});

export type RootBaseProps = Assign<HTMLArkProps<"div">, UseInputGroupProps>;
export const Root = React.forwardRef<HTMLDivElement, RootBaseProps>((props, ref) => {
  const { id, ids, invalid, ...rest } = props;
  const value = useInputGroup({ id, ids, invalid });


  return (
    <InputGroupContext.Provider value={value}>
      <ark.div ref={ref} data-scope="input-group" data-part="root" role="group" aria-invalid={invalid} {...rest} />
    </InputGroupContext.Provider>
  )
})

export type AddonBaseProps = Assign<HTMLArkProps<"div">, { stretch?: boolean, orientation?: "horizontal" | "vertical" }>;
export const Addon = React.forwardRef<HTMLDivElement, AddonBaseProps>((props, ref) => {
  const { stretch = false, orientation = "horizontal", ...rest } = props;
  useInputGroupContext();

  return (
    <ark.div ref={ref} data-scope="input-group" data-part="addon" aria-hidden={true} aria-orientation={orientation} data-orientation={orientation} data-stretch={stretch} {...rest} />
  )
});

export type ContentBaseProps = Assign<HTMLArkProps<"div">, { orientation?: "horizontal" | "vertical" }>;
export const Content = React.forwardRef<HTMLDivElement, ContentBaseProps>((props, ref) => {
  const { orientation = "horizontal", ...rest } = props;
  useInputGroupContext();

  return (
    <ark.div ref={ref} data-scope="input-group" data-part="content" aria-hidden={true} aria-orientation={orientation} data-orientation={orientation} {...rest} />
  )
});

export type HelperBaseProps = HTMLArkProps<"span">
export const Helper = React.forwardRef<HTMLSpanElement, HelperBaseProps>((props, ref) => {
  const { ...rest } = props;
  const { ids } =  useInputGroupContext();

  return (
    <ark.span ref={ref} id={ids.helper} data-scope="input-group" data-part="helper" {...rest} />
  )
});

export type MessageBaseProps = HTMLArkProps<"span">
export const Message = React.forwardRef<HTMLSpanElement, MessageBaseProps>((props, ref) => {
  const { ...rest } = props;
  const { ids, invalid } =  useInputGroupContext();

  return (
    <ark.span ref={ref} hidden={!invalid} id={ids.message} data-scope="input-group" data-part="message" aria-hidden={!invalid} aria-invalid={invalid} {...rest} />
  )
});

export type LabelBaseProps = HTMLArkProps<"label">
export const Label = React.forwardRef<HTMLLabelElement, LabelBaseProps>((props, ref) => {
  const { ...rest } = props;
  const { id, ids, invalid } =  useInputGroupContext();

  return (
    <ark.label htmlFor={id} ref={ref} id={ids.label} data-scope="input-group" data-part="label" aria-invalid={invalid} {...rest} />
  )
});

export type InputBaseProps = HTMLArkProps<"input">
export const Input = React.forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const { ...rest } = props;
  const { id, ids, invalid } =  useInputGroupContext();

  const ariaDescribedBy = [invalid ? ids.message : null, !invalid ? ids.helper : null].filter(Boolean).join(" ");

  return (
    <ark.input ref={ref} id={id} data-scope="input-group" data-part="input" aria-invalid={invalid} aria-describedby={ariaDescribedBy} {...rest} />
  )
});

export type TextareaBaseProps = Assign<HTMLArkProps<"textarea">, { autoresize: boolean }>;
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>((props, ref) => {
  const { autoresize, ...rest } = props;
  const { id, ids, invalid } =  useInputGroupContext();

  const ariaDescribedBy = [invalid ? ids.message : null, !invalid ? ids.helper : null].filter(Boolean).join(" ");

  return (
    <ark.textarea asChild ref={ref} id={id} data-scope="input-group" data-part="textarea" aria-invalid={invalid} aria-describedby={ariaDescribedBy} {...rest}>
      <FieldTextarea autoresize={autoresize} />
    </ark.textarea>
  )
});
