import React from 'react'
import { TypographyStyle } from 'react-typography'
import { ThemeProvider } from 'styled-components'

import typography from '../typography.config'
import theme from '../src/theme'

export const withTypography = story => (
  <>
    <TypographyStyle typography={typography} />
    {story()}
  </>
)

export const withTheme = story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
)
