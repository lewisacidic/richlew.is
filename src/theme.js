import 'typeface-source-sans-pro'

export const breakpoints = [32, 64, 64].map(n => n + 'em')

export const space = [0, 0.25, 0.5, 1, 1.5, 2, 3, 5, 10, 16, 32].map(
  n => n + 'em'
)

export const maxWidths = {
  ...breakpoints,
  iconWidth: '4em',
  pageWidth: '40em',
  contentWidth: '42em'
}

export const fontSizes = [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96].map(
  n => (100 * n) / 16 + '%'
)

export const fontWeights = {
  light: 300,
  normal: 400,
  bold: 700
}

export const radii = space.concat(['100%'])

export const fonts = {
  sans: 'Source Sans Pro, sans-serif'
}

export const colors = {
  primary: 'palevioletred',
  secondary: 'papayawhip',
  page: 'white'
}

export const backgrounds = {
  spring: 'linear-gradient(120deg, #8ddad5, #00cdac)',
  summer: 'linear-gradient(120deg, #f6d365, #fda085)',
  autumn: 'linear-gradient(120deg, #ff9068, #fd746c)',
  winter: 'linear-gradient(120deg, #89dafe, #66a6ff)'
}

export default {
  breakpoints,
  space,
  maxWidths,
  fontSizes,
  fontWeights,
  radii,
  fonts,
  colors,
  backgrounds
}
