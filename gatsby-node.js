const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { slugify } = require(`./src/helpers/helpers`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
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
		}

		slug = slugDir + slugFile;
		
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
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
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
		`
	).then(result => {
		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/${node.fields.template}.js`),
				context: {
					slug: node.fields.slug,
				},
			})
		})
		resolve()
		})
	})
}