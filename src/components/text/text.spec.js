import React from 'react'
import { render } from 'react-testing-library'

import Text from '.'

describe('text', () => {
  it('should render correctly', () => {
    const { container } = render(<Text />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
