import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

import { withTypography } from './decorators'
import './gatsby-shim'

setOptions({
  name: 'richlew.is',
  url: 'https://richlew.is',
  addonPanelInRight: true
})

addDecorator(withKnobs)
addDecorator(withTypography)

const req = require.context('../src', true, /^.+.stories.js$/)

configure(() => req.keys().forEach(req), module)
