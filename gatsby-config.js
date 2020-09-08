/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ras Jahknow | Roots Rock Reggae | Melbourne Australia`,
    description: `Ras Jahknow blazes new soul and fresh rhythms into what is described best as culturally rich, roots reggae music. Passionate vocals in English and Creole weave through the diverse native sounds from the African island nation of Cape Verde, Brazil, Tanzania and Mauritius to Australia. The band embodies a vision of unity, respect and peace, built on the foundation of irresistible, reggae rhythms.`,
    author: `@Rowan Richardson`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`homemade apple\:400`, `antic didone\:400`],
      },
    }
  ],
}
