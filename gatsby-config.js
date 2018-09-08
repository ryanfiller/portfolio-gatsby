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
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-autolink-headers`,
					// `gatsby-remark-prismjs`,
					  {
					  resolve: `gatsby-remark-prismjs`,
					  options: {
					    // Class prefix for <pre> tags containing syntax highlighting;
					    // defaults to 'language-' (eg <pre class="language-js">).
					    // If your site loads Prism into the browser at runtime,
					    // (eg for use with libraries like react-live),
					    // you may use this to prevent Prism from re-processing syntax.
					    // This is an uncommon use-case though;
					    // If you're unsure, it's best to use the default value.
					    classPrefix: "language-",
					    // This is used to allow setting a language for inline code
					    // (i.e. single backticks) by creating a separator.
					    // This separator is a string and will do no white-space
					    // stripping.
					    // A suggested value for English speakers is the non-ascii
					    // character '›'.
					    inlineCodeMarker: null,
					    // This lets you set up language aliases.  For example,
					    // setting this to '{ sh: "bash" }' will let you use
					    // the language "sh" which will highlight using the
					    // bash highlighter.
					    aliases: {},
					  },
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `img`,
			  path: `${__dirname}/static/images/`
			}
		  },
		`gatsby-image`,
		// `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
