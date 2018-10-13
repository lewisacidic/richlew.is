import React from 'react'
import { render } from 'react-testing-library'

import Box from '.'

describe('box', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Box data-testid="box-testid" />)
    expect(getByTestId('box-testid')).toMatchSnapshot()
  })
})
