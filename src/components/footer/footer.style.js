import styled from 'styled-components'
import styleVar from '../../styles/style_var'

export const Footer = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: ${styleVar.footerHeight};
   padding: 0 3rem;
   background: ${styleVar.footerGradient};
   color: #fff;
`
