import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Nav = ({ items }) => (
  <ul style={{ listStyleType: 'none', textAlign: 'center' }}>
    {items.map(({ label, path }) => (
      <li style={{ display: 'inline-block', padding: '1em' }} key={label}>
        <Link to={path} style={{ textDecoration: 'none', color: 'white' }}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string })
  )
}
export default Nav
