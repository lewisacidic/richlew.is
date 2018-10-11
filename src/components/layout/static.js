import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'

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
