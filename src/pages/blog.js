import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import BlogList from '../components/blog-list'

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
						thumbnail {
							alt
							image {
								childImageSharp {
									sizes(maxWidth: 1200 ) {
										...GatsbyImageSharpSizes
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

const Blog = (props) => {
	return (
		<BlogList blog={props.data.allMarkdownRemark.edges} />
	)
}

Blog.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Blog;