import React from 'react'
import PropTypes from 'prop-types'

import Background from './background'
import Page from './page'

const Layout = ({ children }) => (
  <Background>
    <Page>{children}</Page>
  </Background>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
