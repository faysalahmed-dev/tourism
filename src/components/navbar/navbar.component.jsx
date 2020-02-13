import React, { useEffect, useState } from 'react'
import NavbarItem from '../navbar-item/navbar-item.component'
import { Navbar, NavbarItemContainer } from './navbar.style'
import { buildNavItemPath } from '../../utils/navitem.utils'
import styleVar from '../../styles/style_var'

const NavbarCom = () => {
   const navItem = ['Home/', 'About/about', 'Contact/contact', 'Tour/tour']
   const [isScrolled, setScrolled] = useState(false)
   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (
            window.scrollY >
            window.innerHeight -
               parseInt(styleVar.NavbarHeight.slice(0, 2)) -
               10
         ) {
            setScrolled(true)
         } else {
            if (isScrolled) setScrolled(false)
         }
      })
   }, [isScrolled])
   return (
      <Navbar
         background={isScrolled ? styleVar.headerGradient : 'transparent'}
         color={isScrolled ? '#fff' : '#fff'}
      >
         <h1>Touisom</h1>
         <NavbarItemContainer>
            {navItem.map((info, index) => {
               const some = buildNavItemPath(info)
               return (
                  <NavbarItem to={some.path} key={index}>
                     {some.displayName}
                  </NavbarItem>
               )
            })}
         </NavbarItemContainer>
      </Navbar>
   )
}

export default NavbarCom
