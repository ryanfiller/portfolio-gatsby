module.exports = {
	siteMetadata: {
		title: 'ryanfiller.com',
		siteUrl: `https://www.ryanfiller.com`,
		description: 'ryanblog',
		author: 'Ryan Filler'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-27684935-1",
				head: true,
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				manualInit: true,
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
					component: require.resolve(`./src/components/layout`)
			}
		},
		`gatsby-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
      resolve: `gatsby-plugin-mdx`,
      options: {
				extensions: [`.mdx`, `.md`, `.markdown`],
				defaultLayouts: {
          content: require.resolve("./src/components/markdown-block.js"),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1400,
							linkImagesToOriginal: false,	
							backgroundColor: 'transparent',
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
						},
					},
					{
						resolve: `gatsby-remark-custom-blocks`,
						pluginOptions: {
						  blocks: {
							imgCenter: {
								classes: "image-center"
							},
							imgLeft: {
								classes: "image-left"
							},
							imgRight: {
								classes: "image-right"
							},
							imgFull: {
								classes: "image-full"
							},
							imgSmall: {
								classes: "image-small"
							},
						  },
						},
					},
        ],
      },
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/images/`
			}
		},
	]
};