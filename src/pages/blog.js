import React from 'react'
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import styled from 'styled-components';
import { breaks, padding } from '../config/styles';

import BlogPreview from '../components/blog-preview';

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
		<section className={`${props.className} blog-list`}>
			{props.data.allMarkdownRemark.edges.map(({ node }, index) => (
				<BlogPreview {...node} key={index}/>
			))} 
		</section>
	)
}

Blog.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledBlog = styled(Blog)`

	width: 100%;
	display: block;
	padding: ${padding};

	& > * {
		width: 100%;
		box-sizing: border-box;
		padding: ${padding};
	}

	${breaks.phone(`
		display: flex;
		flex-wrap: wrap;
		align-items: start;

		& > * {
			flex: 1;
			max-width: 50%;
		}
	`)}

	${breaks.tablet(`
		& > * {
			max-width: 33.333vw;
		}
	`)}

	${breaks.desktop(`
		& > * {
			max-width: 25%;
		}
	`)}
`

export default StyledBlog;