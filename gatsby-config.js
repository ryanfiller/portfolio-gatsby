module.exports = {
  siteMetadata: {
    title: 'ryanfiller.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
