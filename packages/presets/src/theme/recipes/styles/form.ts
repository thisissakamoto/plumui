import { defineStyles } from '@pandacss/dev'

export const _placeholder = defineStyles({
  color: '{colors.fg.muted}',
})

export const _focus = defineStyles({
  outline: "none"
})

export const _disabled = defineStyles({
  opacity: 0.6,
  cursor: 'not-allowed',
  pointerEvents: "none",
});

export const _focusVisible = defineStyles({
  outlineOffset: "calc({spacing.2} * -1)",
  outline: "2px solid {colors.fill.accent}"
})

export const input = defineStyles({
  outline: 'none',
  color: '{colors.fg}',
  boxSize: '{sizes.full}',
  bg: '{colors.transparent}',
  lineHeight: "{lineHeights.sm}",

  _focus,
  _disabled,
  _placeholder,
})

export const textarea = defineStyles({
  ...input,
  resize: 'none',
});

export const select = defineStyles({
  ...input,
  appearance: 'none',
  backgroundImage: 'none',
});

export const radio = defineStyles({
  width: '4',
  height: '4',
  bg: 'white',
  cursor: 'pointer',
  borderRadius: 'full',
  transition: 'all 0.2s',


  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: "none",
  },
})

export const fieldset = defineStyles({
  p: '4',
  spaceY: '4',
})

export const legend = defineStyles({
  px: '2',
  fontSize: '14',
  fontWeight: '500',
  color: 'colors.fg',
});
