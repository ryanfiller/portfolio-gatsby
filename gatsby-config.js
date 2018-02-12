module.exports = {
  siteMetadata: {
    title: 'ryanfiller.com',
    siteUrl: `https://www.ryanfiller.com`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/static/images/`
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
