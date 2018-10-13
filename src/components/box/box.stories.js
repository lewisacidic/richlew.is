import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import Box from '.'

storiesOf('Box', module).add(
  'default',
  () => (
    <Box
      color={text('color', 'primary')}
      bg={text('background', 'secondary')}
      p={number('padding', 3)}
      m={number('margin', 3)}
    >
      {text(
        'content',
        "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to."
      )}
    </Box>
  ),
  { knobs: { escapeHTML: false } }
)
