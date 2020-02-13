import React from 'react'
import TourCard from '../tour-card/tour-card.component'

import { ToursContainer, ToursSection } from './tour.style'

const tourContaienr = ({ tourData }) => {
   return (
      <ToursSection>
         <h1>Tours</h1>
         <ToursContainer>
            {tourData.map(({ node: { id, images, ...others } }) => (
               <TourCard {...others} key={id} image={images[0].fluid} />
            ))}
         </ToursContainer>
      </ToursSection>
   )
}
export { tourContaienr as default }
