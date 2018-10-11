import React from 'react'
import { render } from 'react-testing-library'

import Background from './background'

describe('Background', () => {
  it('works', () => {
    const { container } = render(<Background />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
