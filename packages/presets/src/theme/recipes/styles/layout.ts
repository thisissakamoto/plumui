import { defineStyles } from '@pandacss/dev';

export const container = defineStyles({
  mx: 'auto',
  maxW: '1200px',
  w: '{sizes.full}',
  px: '{spacing.12}',
})

export const base = defineStyles({
  w: "auto"
});

export const section = defineStyles({
  w: "{sizes.full}"
});

export const stack = defineStyles({
  display: 'flex',
  w: "{sizes.full}",
});

export const hstack = defineStyles({
  gap: '4',
  display: 'flex',
  w: "{sizes.full}",
  flexDirection: "row",
  alignItems: "center",
});

export const vstack = defineStyles({
  gap: '4',
  display: 'flex',
  flexDirection: 'column',
});

export const grid = defineStyles({
  gap: '4',
  display: 'grid',
});

export const center = defineStyles({
  display: 'flex',
  alignItems: 'center',
  flexDirection: "column",
  justifyContent: 'center',
});


export const box = defineStyles({
  w: "{sizes.full}",
  display: "block"
});

export const thumb = defineStyles({
  boxSize: "12",
  rounded: "{sizes.full}",
  outline: "2px solid {colors.bg}"
})
