require('dotenv').config()

module.exports = {
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
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
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
          },
        ],
      },
    },
  ],
}
