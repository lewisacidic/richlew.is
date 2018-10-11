import React from 'react'
import PropTypes from 'prop-types'

import Background from './background'
import Nav from './nav'
import Page from './page'

const Layout = ({ children }) => (
  <Background>
    <Nav
      items={[
        { path: '/', label: 'home' },
        { path: '/second', label: 'second' }
      ]}
    />
    <Page>{children}</Page>
  </Background>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
