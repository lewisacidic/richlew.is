import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Background from './background'
import Nav from './nav'
import Page from './page'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ head, children }) => (
  <Background>
    <Helmet
      title={head.title}
      meta={[
        { name: 'description', content: head.description },
        { name: 'keywords', content: head.keywords }
      ]}
    />
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
  children: PropTypes.node
}

const StaticLayout = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => <Layout head={data.site.siteMetadata} {...props} />}
  />
)

export default StaticLayout
