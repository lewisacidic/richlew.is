import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Layout from './layout'

storiesOf('Layout', module).add('default', () => (
  <Layout>
    <h1>{text('title', 'Example Title')}</h1>
    <p>{text('content', 'example content')}</p>
  </Layout>
))
