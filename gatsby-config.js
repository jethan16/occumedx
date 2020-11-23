require('dotenv').config()

module.exports = {
  pathPrefix: "/occumedx",
  siteMetadata: {
    title: `OccuMedX - Your Partners in Occupational Health and Safety`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '44a0d05f0d69e5ee858d9aa0f54fec',
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`300`, `400`, `600`, `700`]
            },
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `500`, `700`]
            },
            {
              family: `Work Sans`,
              variants: [`300`, `400`, `500`, `700`]
            }
          ]
        }
      }
    }
  ],
}
