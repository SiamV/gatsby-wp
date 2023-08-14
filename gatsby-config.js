/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Путешествия на мотоцикле по Мексике и Латинской Америке.`,
    description: `Путешествия на мотоцикле по Мексике и Латинской Америке это незабываемые приключения, которые позволяют увидеть красоты этого региона во всей их красе и ощутить дух свободы.`,
    robots: `index,follow`,
    siteUrl: `https://la-moto.ru`,
    property: `` //for SSM
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": "https://create-post.la-moto.ru/graphql"
      }
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};
