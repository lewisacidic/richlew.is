import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Background from './background'
import Nav from './nav'
import Page from './page'
import { StaticQuery, graphql } from 'gatsby'

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
        allJavascriptFrontmatter(
          sort: { fields: [frontmatter___precedence], order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                label
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        head={data.site.siteMetadata}
        navItems={data.allJavascriptFrontmatter.edges.map(
          ({ node }) => node.frontmatter
        )}
        {...props}
      />
    )}
  />
)

export default StaticLayout
