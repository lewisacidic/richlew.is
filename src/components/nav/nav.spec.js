import React from 'react'
import { render } from 'react-testing-library'

import Nav from './nav'

describe('Nav', () => {
  it('works', () => {
    const { container } = render(<Nav />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
