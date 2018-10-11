import React from 'react'
import { TypographyStyle } from 'react-typography'

import typography from '../typography.config'

export const withTypography = story => (
  <>
    <TypographyStyle typography={typography} />
    {story()}
  </>
)
