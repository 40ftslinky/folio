module.exports = {
  siteMetadata: {
    title: `40ftSlinky`,
    description: `Jeremy Nicholson, Digital Native. Pixel Pusher.`,
    author: `@40ftSlinky`,
    menuLinks:[
      {
         name:'About',
         link:'/about'
      },
      {
        name:'Contact',
        link:'/contact'
     }
    ]
  },
  /* Your site config here */
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
      {
        resolve: `gatsby-plugin-react-svg`,
        options: {
          rule: {
            include: `${__dirname}/src/images`,
             //See below to configure properly
          },
        },
      },
    // `gatsby-plugin-eslint`,
    // `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-video-poster`,
            options: {
              // Size of the poster in pixels
              // By default width is 1920px (HD video width)
              // If your container is smaller, you should specify a smaller size
              width: 720,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
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
