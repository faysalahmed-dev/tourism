import React from 'react'
import { Link } from 'gatsby'
import { NavbarItem } from './navbar-item.style'

const navbarItem = ({ children, ...otherProps }) => {
   return (
      <NavbarItem>
         <Link {...otherProps}>{children}</Link>
      </NavbarItem>
   )
}
export default navbarItem
