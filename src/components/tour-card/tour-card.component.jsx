import React from 'react'
import {
   TourCard,
   TourCardFooter,
   TourCardFooterInfo,
   TourCardFooterItem,
} from './tour-card.style'
import Fade from 'react-reveal/Fade'
import {
   MdAttachMoney,
   MdLabel,
   MdLocationOn,
   MdAccessTime,
} from 'react-icons/md'
import Img from 'gatsby-image'

const tour = ({ image, name, price, ...other }) => {
   return (
      <Fade bottom>
         <TourCard>
            <Img fluid={image} />
            <TourCardFooter>
               <TourCardFooterInfo>
                  <TourCardFooterItem>
                     <MdLabel /> <span>{name}</span>
                  </TourCardFooterItem>
                  <TourCardFooterItem>
                     <MdLocationOn /> {other.country}
                  </TourCardFooterItem>
                  <TourCardFooterItem>
                     <MdAccessTime /> {other.days} days
                  </TourCardFooterItem>
               </TourCardFooterInfo>
               <p>
                  <TourCardFooterItem>
                     <MdAttachMoney />
                     {price}
                  </TourCardFooterItem>
               </p>
            </TourCardFooter>
         </TourCard>
      </Fade>
   )
}
export { tour as default }
