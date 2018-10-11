import React from 'react'

const Page = () => (
  <>
    <h1>Second Page</h1>
    <p>This is the second page</p>
  </>
)

export default Page

export const frontmatter = {
  label: 'second',
  path: '/second',
  precedence: 10
}
