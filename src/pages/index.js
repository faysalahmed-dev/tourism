import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout/layout.component'
import Slider from '../components/slider/slider.component'
import ToursCardContainer from '../components/tour/tour.component'
import './index.sass'

// import { _SLIDER_QUERY } from '../graphql/query'
/*
   first import our custom query from custom graphql folder
   query the data export it.
   if i export it gatsby will aumatic asing data propery with the value what we got from server in the props(data) where we can access our data.
*/
// export { _SLIDER_QUERY }

export const _SLIDER_QUERY = graphql`
   {
      tours: allContentfulTour {
         edges {
            node {
               name
               price
               slug
               country
               start
               featured
               days
               journey {
                  info
                  day
               }
               images {
                  fluid {
                     ...GatsbyContentfulFluid_withWebp
                  }
               }
            }
         }
      }
   }
`

export default props => {
   const data = useStaticQuery(_SLIDER_QUERY)
   return (
      <Layout>
         <Slider tourData={data.tours.edges} />
         <ToursCardContainer tourData={data.tours.edges} />
      </Layout>
   )
}

/*

(
         filter: {
            name: {
               in: ["hounted tokyo", "tibet adventure", "best of morocco"]
            }
         }
      )
   */
