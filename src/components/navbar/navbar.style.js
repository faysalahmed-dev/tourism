import styled from 'styled-components'
import styleVar from '../../styles/style_var'

export const Navbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: ${({ background }) => background};
   padding: 0 3rem;
   color: ${({ color }) => color};
   height: ${styleVar.NavbarHeight};
   position: fixed;
   z-index: 10;
   top: 0;
   width: 100%;
   transition: all 0.3s;
   h1 {
      font-weight: 700;
      text-transform: uppercase;
   }
`
export const NavbarItemContainer = styled.ul`
   list-style: none;
   display: flex;
`
