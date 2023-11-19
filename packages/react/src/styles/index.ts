import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@lmts-ds/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    themeMat: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    colors,
    fontWeights,
    fontSizes,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
