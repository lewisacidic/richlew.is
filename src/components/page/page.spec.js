import React from 'react'
import { render } from 'react-testing-library'

import Page from './page'

describe('Background', () => {
  it('works', () => {
    const { container } = render(<Page />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
