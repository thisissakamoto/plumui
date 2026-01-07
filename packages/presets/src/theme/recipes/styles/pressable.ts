import { defineStyles } from "@pandacss/dev";

export const _focusVisible = defineStyles({
  outlineOffset: "calc({spacing.2} * 1)",
  outline: "2px solid {colors.fill.accent}",
});

export const _disabled = defineStyles({
  opacity: 0.5,
  cursor: 'not-allowed',
  pointerEvents: 'none',
});

export const _loading = defineStyles({
  opacity: 0.7,
  cursor: 'wait',
});

export const button = defineStyles({
  gap: '4',
  border: "none",
  lineHeight: "1",
  outline: 'none',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  display: 'inline-flex',
  fontFamily: "inherit",
  justifyContent: 'center',
  transformOrigin: 'center',
  bg: "{colors.transparent}",
  transition: 'all 100ms ease-in-out',

  _disabled,
  _loading,
  _focusVisible,
});

export const control = defineStyles({
  display: "flex",
  w: "{sizes.full}",
});

const _selected = defineStyles({
  color: "{colors.fg}",
  bg: "{colors.bg.surface}",

  "& svg, & svg *": {
    color: "{colors.fg}",
  },
});

const _hover = defineStyles({
  bg: "color-mix(in oklab, var(--mix-50) {colors.bg.surface}, {colors.transparent})",
});

const _pressed = defineStyles({
   bg: "{colors.bg.surface}",
});


export const item = defineStyles({
  ...button,
  _hover,
  _selected,
  _active: _pressed,
  _checked: _selected,

  h: "{sizes.36}",
  w: "{sizes.full}",
  fontWeight: "500",
  px: "{spacing.10}",
  transition: "none",
  gap: "{spacing.12}",
  color: "{colors.fg}",
  rounded: "{radii.16}",
  justifyContent: "start",
  fontSize: "{fontSizes.14}",
});
