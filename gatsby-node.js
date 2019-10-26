const path = require(`path`)
const fs = require(`fs`)
const { slugify } = require(`./src/helpers`)

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
		let slugDir;
		let slugFile;
		let slug;
		let template;

		if (node.fileAbsolutePath.includes('/portfolio/')) {
			slugDir = '/portfolio/';

			if (node.frontmatter.options.custompath) {
				slugFile = slugify(node.frontmatter.options.custompath);
			} else {
				slugFile = slugify(node.frontmatter.title);
			}

			if (node.frontmatter.options.customtemplate) {
				template = node.frontmatter.options.customtemplate;
			} else {
				template = 'portfolio-item';
			}

			slug = slugDir + slugFile;
		}

		if (node.fileAbsolutePath.includes('/blog/')) {
			slugDir = '/blog/';

			if (node.frontmatter.options.custompath) {
				slugFile = slugify(node.frontmatter.options.custompath);
			} else {
				slugFile = slugify(node.frontmatter.title);
			}
			
			if (node.frontmatter.options.customtemplate) {
				template = node.frontmatter.options.customtemplate;
			} else {
				template = 'blog-item';
			}

			slug = slugDir + slugFile;
		}
		
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})

		createNodeField({
			node,
			name: `template`,
			value: template,
		})

		createNodeField({
      node,
      name: 'id',
      value: node.id,
    })
	}
}
// regex: "/((\/portfolio\/|\/blog\/))/" 

exports.createPages = ({ graphql, actions }) => {
	graphql(`
		{
			allMdx(
				filter: { 
					fileAbsolutePath: { 
						regex: "/^((?!/pages/).)*$/" 
					} 
				} 
			) {
				edges {
					node {
						id
						fileAbsolutePath
						fields {
							slug
							template
						}
						frontmatter {
							title
							options {
								custompath
								customtemplate
							}
						}
					}
				}
			}
		}
	`).then(({ data, errors }) => {

		if (errors) {
			return Promise.reject(errors);
		}

		data.allMdx.edges.forEach(({ node }) => {
			actions.createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/${node.fields.template}.js`),
				context: {
					id: node.id,
					slug: node.fields.slug,
					template: node.fields.template,
				},
			})
		})
	})

	graphql(`
		{
			site {
				siteMetadata {
					title
					author
					siteUrl
					description
					cloudinaryCloud
				}
			}
			allMdx(
				sort: { order: DESC, fields: [frontmatter___meta___date]},
				filter: {
					fields: {slug: { regex: "//blog//" }},
					frontmatter: { options: { published: { eq: true } } }
				},
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							meta {
								date
								category
								tags
								excerpt
							}
							thumbnail {
								alt
								url
							}
							banner {
								alt
								url
							}
						}
						body
						rawBody
					}
				}
			}
		}
	`).then(({ data, errors }) => {

		if (errors) {
			return Promise.reject(errors);
		}

		const syndicated = {
			siteMetadata: {},
			blogPosts: [],
		}

		syndicated.siteMetadata = {...data.site.siteMetadata}
		data.allMdx.edges.forEach(({ node }) => {
			syndicated.blogPosts.push({...node})
		})

		fs.writeFileSync("public/syndicate.json", JSON.stringify(syndicated))
		console.log("	                                      _  						")				
		console.log("	_______________________   ________.--'-`--._____  	")									
		console.log(" |____==================_)  \_'===================`  ")										
		console.log("				_,--___.-|__|-.______|=====/  `---'  					")					
		console.log("				`---------._          ~~~~~|  								")		
		console.log("										`-._ -  -  - ,'  									")	
		console.log("												\_____,-'  										")
		console.log("												           										")
		console.log('syndicated.json file written!')
	})
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  });
};