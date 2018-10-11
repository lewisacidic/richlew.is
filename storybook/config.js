import { configure } from '@storybook/react'
import './gatsby-shim'

const req = require.context('../src', true, /^.+.stories.js$/)

configure(() => req.keys().forEach(req), module)
