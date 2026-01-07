import { defineStyles } from '@pandacss/dev'

export const display = defineStyles({
  fontWeight: '600',
  color: '{colors.fg}',
  letterSpacing: 'tight',
  fontSize: '{fontSizes.24}',
  lineHeight: "{lineHeights.xs}",
})

export const title = defineStyles({
  fontWeight: '500',
  color: '{colors.fg}',
  fontSize: '{fontSizes.18}',
  lineHeight: '{lineHeights.xs}',
  letterSpacing: '{letterSpacings.sm}',
})

export const subtitle = defineStyles({
  color: "{colors.fg}",
  fontSize: '{fontSizes.16}',
  lineHeight: '{lineHeights.xs}',
})

export const description = defineStyles({
  fontSize: '{fontSizes.14}',
  textAlign: 'start',
})

export const body = defineStyles({
  fontSize: '{fontSizes.14}',
  textAlign: 'start',
})

export const caption = defineStyles({
  fontWeight: '500',
  letterSpacing: 'wider',
  fontSize: '{fontSizes.14}',
  color: '{colors.fg.muted}',
});

export const label = defineStyles({
  fontWeight: '500',
  textAlign: "start",
  color: '{colors.fg}',
  display: 'inline-block',
  fontSize: '{fontSizes.14}',
  lineHeight: "{lineHeights.sm}",
  _required: {
    _after: {
      ml: '4',
      content: '"*"',
      color: '{colors.fill.destructive}',
    },
  },
  _disabled: {
    opacity: "0.5",
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
})
