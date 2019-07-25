const path = require(`path`)
const fs = require(`fs`)
const { slugify } = require(`./src/helpers/helpers`)

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `Mdx`) {
		let slugDir;
		let slugFile;
		let slug;
		let template;

		if (node.fileAbsolutePath.includes('/portfolio/')) {
			slugDir = '/portfolio/';

			if (node.frontmatter.custompath) {
				slugFile = node.frontmatter.custompath;
			} else {
				slugFile = slugify(node.frontmatter.title);
			}

			if (node.frontmatter.customtemplate) {
				template = node.frontmatter.customtemplate;
			} else {
				template = 'portfolio-item';
			}

			slug = slugDir + slugFile;
		}

		if (node.fileAbsolutePath.includes('/blog/')) {
			slugDir = '/blog/';

			if (node.frontmatter.custompath) {
				slugFile = node.frontmatter.custompath;
			} else {
				slugFile = slugify(node.frontmatter.title);
			}
			
			if (node.frontmatter.customtemplate) {
				template = node.frontmatter.customtemplate;
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
							custompath
							customtemplate
							title
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
				}
			}
			allMdx(
				sort: { order: DESC, fields: [frontmatter___date]},
				filter: {
					fields: {slug: { regex: "//blog//" }},
					frontmatter: { published: { eq: true } }
				},
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							date(formatString: "MMM.DD.YY")
							category
							tags
							excerpt
							thumbnail {
								alt
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

		const syndicated = {
			siteMetadata: {},
			blogPosts: [],
		}

		syndicated.siteMetadata = {...data.site.siteMetadata}
		data.allMdx.edges.forEach(({ node }) => {
			syndicated.blogPosts.push({...node})
		})

		fs.writeFileSync("public/syndicate.json", JSON.stringify(syndicated))
		console.log('syndicated.json file written')
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