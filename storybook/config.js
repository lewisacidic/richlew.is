import { configure, addDecorator } from '@storybook/react'

import { withTypography } from './decorators'
import './gatsby-shim'

addDecorator(withTypography)

const req = require.context('../src', true, /^.+.stories.js$/)

configure(() => req.keys().forEach(req), module)
