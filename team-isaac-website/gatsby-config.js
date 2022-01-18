module.exports = {
    siteMetadata: {
      title: `Team Isaac Website`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
      },
    ]
}