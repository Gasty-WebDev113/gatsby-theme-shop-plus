require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Shop Plus Starter`,
    description: `Develop a E-Commerce fast and simple with the Gatsby Shop Plus`,
    author: `https://github.com/Gasty-WebDev113`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options:{
        extensions: ['css', 'html', 'js', 'svg']
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // Domain name of Shopify shop.
        shopName: process.env.SHOP_NAME,
        // Sstorefront access token
        accessToken: process.env.SHOP_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
