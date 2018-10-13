import React from 'react'
import { storiesOf } from '@storybook/react'
import { color, number, select } from '@storybook/addon-knobs'
import _ from 'lodash'

import Text from '.'

storiesOf('Text', module)
  .add('default', () => (
    <Text
      color={color('color', 'palevioletred')}
      fontSize={number('font size', 7)}
      fontWeight={select('font weight', [200, 300, 400, 600, 700, 900], 500)}
    >
      One Ring to rule them all
    </Text>
  ))
  .add('color', () => (
    <>
      {[
        'inherit',
        'palevioletred',
        'salmon',
        'lightseagreen',
        'lightskyblue'
      ].map(c => (
        <Text key={c} color={c} as="div">
          One Ring to rule them all
        </Text>
      ))}
    </>
  ))
  .add('size', () => (
    <>
      {_.range(10).map(i => (
        <Text key={i} fontSize={i} as="div">
          One Ring to rule them all
        </Text>
      ))}
    </>
  ))
  .add('opacity', () => (
    <>
      {_.range(0, 1, 0.1).map(o => (
        <Text key={o} opacity={o} as="div">
          One Ring to rule them all
        </Text>
      ))}
    </>
  ))
  .add('font weight', () => (
    <>
      {[200, 300, 400, 600, 700, 900].map(fw => (
        <Text key={fw} fontWeight={fw} as="div">
          One Ring to rule them all
        </Text>
      ))}
    </>
  ))
  .add('font family', () => (
    <>
      {['sans', 'serif', 'monospace'].map(ff => (
        <Text key={ff} fontFamily={ff} as="div">
          One Ring to rule them all
        </Text>
      ))}
    </>
  ))
