import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavItem = styled.li({
  display: 'inline-block',
  padding: '1em',
  marginBottom: 0
})

const NavList = styled.ul({
  listStyleType: 'none',
  textAlign: 'center',
  marginBottom: 0
})

const Nav = ({ items }) => (
  <NavList>
    {items.map(({ label, path }) => (
      <NavItem key={label}>
        <Link to={path} style={{ textDecoration: 'none', color: 'white' }}>
          {label}
        </Link>
      </NavItem>
    ))}
  </NavList>
)

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, path: PropTypes.string })
  )
}
export default Nav
