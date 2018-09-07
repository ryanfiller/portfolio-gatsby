import React, { Component } from 'react';

import BlogList from '../components/blog-list'


export default class Blog extends React.Component {

	render () {

		const { data } = this.props;

		return (
			<React.Fragment>
			// <main className="page-content page-content--blog-list">

				{/* <BlogList blog={this.props.data.allMarkdownRemark.edges} /> */}

			// </main>
			</React.Fragment>
		)
	}
}

export const query = graphql`
	query BlogListQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				id: { regex: "/blog//" },
				frontmatter: { published: { eq: true } }
			},
		) {
			edges {
				node {
					id
					frontmatter {
						title
						path
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