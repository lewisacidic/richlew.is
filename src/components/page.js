import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ children }) => (
  <div
    style={{
      background: 'white',
      maxWidth: '960px',
      margin: 'auto',
      padding: '3rem',
      borderRadius: '3rem'
    }}
  >
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.node
}

export default Page
