module.exports = {
	siteMetadata: {
		title: 'ryanfiller.com',
		siteUrl: `https://www.ryanfiller.com`
	},
	plugins: [
		{
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout`)
            }
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-27684935-1",
				head: true,
			},
		},
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
		// {
		// 	resolve: `gatsby-plugin-netlify-cms`,
		// 	options: {
		// 		// One convention is to place your Netlify CMS customization code in a
		// 		// `src/cms` directory.
		// 		// modulePath: `${__dirname}/src/cms/cms.js`,
		// 	},
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-component`,
						options: { components: ["header"] }
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
						},
					},
				],
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/images/`
			}
		},

		`gatsby-image`,
		// `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
