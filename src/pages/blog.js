import React, { Component } from 'react'

import BlogList from '../components/blog-list'


export default class Blog extends React.Component {

	render () {

		const { data } = this.props;

		return (
			<main class="page-content">
				<BlogList blog={this.props.data.allMarkdownRemark.edges} />
			</main>
		)
	}
}

export const query = graphql`
	query BlogListQuery {
		allMarkdownRemark(
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
						thumbnail
					}
				}
			}
		}
	}
`