import React from 'react'

const Page = () => (
  <>
    <h1>Third Page</h1>
    <p>This is the third page</p>
  </>
)

export default Page

export const frontmatter = {
  label: 'third',
  path: '/third',
  precedence: 15
}
