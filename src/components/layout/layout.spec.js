import React from 'react'
import { render } from 'react-testing-library'

import Layout from './layout'

describe('Layout', () => {
  it('works', () => {
    const { container } = render(<Layout />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
it('works', () => {
  expect(true).toBe(true)
})
