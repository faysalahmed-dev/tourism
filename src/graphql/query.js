import { graphql } from 'gatsby'

export const _SLIDER_QUERY = graphql`
   {
      allContentfulTour(
         filter: {
            name: {
               in: ["hounted tokyo", "tibet adventure", "best of morocco"]
            }
         }
      ) {
         nodes {
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
                  src
               }
            }
         }
      }
   }
`
