import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import Background from '../background'
import Nav from '../nav/nav'
import Page from '../page/page'
import theme from '../../theme'

const Layout = ({ head, navItems, children, background }) => (
  <ThemeProvider theme={theme}>
    <Background background={background}>
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
  </ThemeProvider>
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
  background: PropTypes.string,
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
  ],
  background: 'spring'
}

export default Layout
