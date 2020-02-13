import styled from 'styled-components'

export const TourCard = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 65% 35%;
   height: 100%;
   box-shadow: 3px 3px 5px rgba(000, 000, 000, 0.2);
   cursor: pointer;
`

export const TourCardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 2rem;
   text-transform: capitalize;
   div {
      display: flex;
      flex-direction: column;
   }
`
export const TourCardFooterInfo = styled.div``

export const TourCardFooterItem = styled.p`
   svg {
      margin-right: 1rem;
      fill: rgba(253, 116, 108, 1);
   }
   display: flex;
   align-items: center;
`
