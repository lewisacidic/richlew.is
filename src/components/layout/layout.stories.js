import React from 'react'
import { text, select, object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Layout from './layout'
import { backgrounds } from '../background/background.stories'

storiesOf('Layout', module).add('default', () => (
  <Layout
    background={select('background', backgrounds, backgrounds[0])}
    navItems={object('nav items', [
      { label: 'home', path: '/' },
      { label: 'contact', path: '/contact' }
    ])}
  >
    <h1>{text('title', 'Example Title')}</h1>
    <p>{text('content', 'example content')}</p>
  </Layout>
))
