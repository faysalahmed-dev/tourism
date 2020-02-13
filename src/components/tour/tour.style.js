import styled from 'styled-components'
import styleVar from '../../styles/style_var'

export const ToursSection = styled.section`
   padding: 2rem;
   color: ${styleVar.fontColor};
   h1 {
      text-align: center;
      font-size: 3rem;
      margin: 3rem 0;
   }
`
export const ToursContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
   grid-auto-rows: 28rem;
   grid-gap: 3rem;
   max-width: 90rem;
   margin: auto;
`
