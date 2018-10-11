import React from 'react'
import PropTypes from 'prop-types'

const Background = ({ children }) => (
  <div
    style={{
      background: 'darksalmon',
      width: '100%',
      height: '100%',
      position: 'absolute'
    }}
  >
    {children}
  </div>
)

Background.propTypes = {
  children: PropTypes.node
}

export default Background
