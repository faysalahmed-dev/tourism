import React from 'react'
import Slider from 'react-slick'
import { SliderWrapper, SliderBG } from './slider.style'
import SliderContent from './slider-content.component'

const Carrousel = ({ tourData }) => {
   const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 200,
      outline: false,
   }
   return (
      <SliderWrapper>
         <Slider {...settings}>
            <div>
               <SliderBG background={tourData[0].node.images[0].fluid.src}>
                  <SliderContent data={tourData[0].node} />
               </SliderBG>
            </div>
            <div>
               <SliderBG background={tourData[1].node.images[2].fluid.src}>
                  <SliderContent data={tourData[1].node} />
               </SliderBG>
            </div>
            <div>
               <SliderBG background={tourData[2].node.images[2].fluid.src}>
                  <SliderContent data={tourData[2].node} />
               </SliderBG>
            </div>
         </Slider>
      </SliderWrapper>
   )
}

export default Carrousel
