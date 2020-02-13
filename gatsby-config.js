require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   siteMetadata: {
      title: 'Blog App',
      author: 'Faysal Ahmed <faysalahmed.ctg146@gmail.com>',
      description: 'This is blog is build to of react and gatsby',
      data: {
         name: 'Fayal ahmed',
         age: 19,
      },
   },
   plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-playground`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images/`,
         },
      },
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: process.env.CONTENTFULL_SPACE_ID,
            accessToken: process.env.CONTENTFULL_API_KEY,
         },
      },
   ],
}
