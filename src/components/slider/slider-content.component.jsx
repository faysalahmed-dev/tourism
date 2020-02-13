import React from 'react'
import { ContentWrapper } from './slider-content.style'

export default ({ data }) => {
   return (
      <ContentWrapper>
         <h2>{data.name}</h2>
         <p>
            Only ${data.price} for {data.days} days
         </p>
         <p>{new Date(data.start).toDateString()}</p>
         <button>Book Now</button>
      </ContentWrapper>
   )
}
