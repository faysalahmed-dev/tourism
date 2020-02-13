import styled from 'styled-components'

export const SliderWrapper = styled.div`
   height: 100vh;
   overflow: hidden;
`
export const SliderBG = styled.div`
   height: 100vh;
   background: url(${props => props.background}) center/cover;
   position: relative;
   &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: block;
      z-index: 10;
      background: linear-gradient(
         to bottom right,
         rgba(253, 116, 108, 0.6),
         rgba(255, 144, 104, 0.4)
      );
      /* clip-path: circle(68.5% at 0 1%); */
   }
   &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: block;
      z-index: 10;
      background: linear-gradient(
         to bottom left,
         rgba(131, 77, 155, 0.8),
         rgba(208, 78, 214, 0.5)
      );
      clip-path: circle(68.5% at 0 1%);
   }
`
export const SliderOverlay = styled.div``
