import styled from 'styled-components'

export const ContentWrapper = styled.div`
   position: absolute;
   top: 50%;
   left: 0%;
   transform: translatey(-50%);
   color: #fff;
   padding: 3rem 0 0 10rem;
   font-size: 2rem;
   text-transform: capitalize;
   z-index: 100;
   h2 {
      font-size: 4rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
   }
   p {
      margin-bottom: 2rem;
   }
   button {
      outline: none;
      border: 1px solid #333;
      background: transparent;
      padding: 1.5rem 3rem;
      border-radius: 4rem;
      text-align: center;
      cursor: pointer;
   }
`
