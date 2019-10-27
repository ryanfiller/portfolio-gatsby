module.exports = {
	siteMetadata: {
		title: 'ryanfiller.com',
		siteUrl: `https://www.ryanfiller.com`,
		description: 'ryanblog',
		author: 'Ryan Filler',
		cloudinaryCloud: 'ryanfiller',
		headshot: 'https://res.cloudinary.com/ryanfiller/image/upload/v1570907728/Screen_Shot_2019-04-12_at_8.27.48_AM_irt6b6.png',
		about: 'I am a designer, developer, and illustrator living and working in Memphis, Tennessee.'
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
					component: require.resolve(`./src/components/layout/layout`)
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
					rule: {
						include: /images/
					}
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

		{
			resolve:`gatsby-source-cloudinary`,
			options:{
				cloudName: 'ryanfiller',
				apiKey: '244836398385633',
				apiSecret: 'K9JubqsYaMlZtwvqzGgKwJl5owk',
				resourceType: 'image',
			}
		}
	]
};