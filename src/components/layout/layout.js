import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Background from '../background'
import Nav from '../nav/nav'
import Page from '../page/page'

import 'typeface-source-sans-pro'

const Layout = ({ head, navItems, children }) => (
  <Background>
    <Helmet
      title={head.title}
      meta={[
        { name: 'description', content: head.description },
        { name: 'keywords', content: head.keywords }
      ]}
    />
    <Nav items={navItems} />
    <Page>{children}</Page>
  </Background>
)

Layout.propTypes = {
  head: PropTypes.shape({
    title: PropTypes.string,
    meta: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          content: PropTypes.string
        })
      )
    )
  }),
  navItems: Nav.propTypes.items,
  children: PropTypes.node
}

Layout.defaultProps = {
  head: {
    title: '',
    meta: []
  },
  navItems: [
    { label: 'home', path: '/', icon: 'home' },
    { label: 'contact', path: '/contact', icon: 'envelope' }
  ]
}

export default Layout
