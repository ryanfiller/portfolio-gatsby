import React from 'react'
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import styled from 'styled-components';
import { breaks, padding } from '../config/styles';

import BlogPreview from '../components/blog-preview';

export const query = graphql`
	query BlogListQuery {
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
							date(formatString: "MMM.DD.YY")
							category
							tags
							# excerpt
						}
						thumbnail {
							url
							attribution
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
			{props.data.allMdx.edges.map(({ node }, index) => (
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