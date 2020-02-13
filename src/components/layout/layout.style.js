import styled from 'styled-components'
import styleVar from '../../styles/style_var'

export const Main = styled.main`
   min-height: calc(
      100vh - ${styleVar.NavbarHeight} - ${styleVar.footerHeight}
   );
`
