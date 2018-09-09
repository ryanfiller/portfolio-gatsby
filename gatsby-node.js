const path = require(`path`)
const slugify = require('slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: "content/" })
		
		createNodeField({
			node,
			name: `slug`,
			value: slug,
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

				slug = slugDir + slugFile;

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

				slug = slugDir + slugFile;
				
				if (node.frontmatter.customtemplate) {
					template = node.frontmatter.customtemplate;
				} else {
					template = 'blog-item';
				}
			}

			createPage({
				path: slug,
				component: path.resolve(`./src/templates/${template}.js`),
				context: {
					slug: slug,
				},
			})
		})
		resolve()
		})
	})
}