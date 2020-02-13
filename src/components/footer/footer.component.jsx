import React from 'react'
import { Footer } from './footer.style'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
   query {
      site {
         info: siteMetadata {
            author
         }
      }
   }
`

export default () => {
   const {
      site: {
         info: { author },
      },
   } = useStaticQuery(query)
   return (
      <Footer>
         <p>
            Author: <span>{author.split('<')[0]}</span>
         </p>
         <p>&copy;{new Date().getFullYear()}</p>
      </Footer>
   )
}
