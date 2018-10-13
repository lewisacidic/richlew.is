import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Background from './background'
import theme from '../../theme'

export const backgrounds = Object.keys(theme.backgrounds)

storiesOf('Background', module)
  .add('default', () => (
    <Background
      background={select('background', backgrounds, backgrounds[0])}
    />
  ))
  .add('spring', () => <Background background="spring" />)
  .add('summer', () => <Background background="summer" />)
  .add('autumn', () => <Background background="autumn" />)
  .add('winter', () => <Background background="winter" />)
