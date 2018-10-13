import React from 'react'
import { render } from 'react-testing-library'

import Background from './background'
import { ThemeProvider } from 'styled-components'

describe('Background', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Background data-testid="test-background" />)
    expect(getByTestId('test-background')).toMatchSnapshot()
  })
  it('will take a color as a background', () => {
    const { getByTestId } = render(
      <Background background="red" data-testid="test-background" />
    )
    expect(getByTestId('test-background')).toHaveStyle('background: red')
  })
  it('will take a theme prop as a background', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ backgrounds: { lightRed: 'pink' } }}>
        <Background background="lightRed" data-testid="test-background" />
      </ThemeProvider>
    )
    expect(getByTestId('test-background')).toHaveStyle('background: pink')
  })
})
