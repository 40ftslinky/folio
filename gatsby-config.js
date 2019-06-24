module.exports = {
  siteMetadata: {
    title: `40ft Slinky`,
    description: `Jeremy Nicholson, Digital Native. Pixel Pusher`,
    author: `@40ftSlinky`,
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CF_SPACE || 'jakz4taknk5a',
          accessToken: process.env.CF_TOKEN || 'bOgmIwDTRXi06zgJEWMDl8zHoFKs4_knYzKgG5QOKxk'
        }
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `40ftSlinky-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#ededed`,
        theme_color: `#50e3c2`,
        display: `minimal-ui`,
        icon: `src/images/40ftSlinky_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
