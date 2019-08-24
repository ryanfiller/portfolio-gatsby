import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

// TODO SEO HELP
// import Helmet from 'react-helmet'
import Img from 'gatsby-image';

import styled from 'styled-components';
import { animations, breaks, containers, fonts, overlays, theme } from '../config/styles';

import ContentMeta from '../components/content-meta';
import MarkdownBlock from '../components/markdown-block';
import BackButton from '../components/back-button';

export const postQuery = graphql`
	query BlogPost($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				# banner {
				# 	alt
				# 	image {
				# 		childImageSharp {
				# 			sizes(maxWidth: 2000 ) {
				# 				...GatsbyImageSharpSizes
				# 			}
				# 		}
				# 	}
				# } 
				title
				meta {
					date(formatString: "MMM.DD.YY")
					category
					tags
					# excerpt
				}
			}
			body
		}
	}
`

const BlogArticle = (props) => {

	const post = props.data.mdx;

	return (
		<article className={props.className} >
			<header className="blog-banner">
				<div className="text">
					<h1 className="title">
						{post.frontmatter.title}
					</h1>
					{/* <ContentMeta {...frontmatter.meta}/> */}
					<ContentMeta
						date={post.frontmatter.date}
						category={post.frontmatter.category}
						tags={post.frontmatter.tags}
					/>
					<p className="excerpt">
						{post.frontmatter.excerpt}
					</p>
					<a className="scroll-link" href="#content">
						<span>
							Skip To Content
						</span>
					</a>
				</div>
				{/* <Img outerWrapperClassName="image" 
					sizes={post.frontmatter.banner.image.childImageSharp.sizes} 
					alt={post.frontmatter.banner.alt}
				/> */}
			</header>
			
			<section id="content">
				<MarkdownBlock post={post.body} />
				<BackButton location={props.location} />
			</section>
		</article>
	);
};

BlogArticle.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledBlogArticle = styled(BlogArticle)`
	.blog-banner {
		${fonts.sizes('1.5rem', '1.75rem, 2rem')}
		background: ${theme.highlight};
		width: 100vw;
		position: relative;
		overflow: hidden;
		${overlays.pixels}
		/* ${overlays.dark} */
		font-size: 2rem;

		${breaks.tablet(`
			font-size: 2.75rem;
		`)}
    
		.text {
			color: ${theme.light};
			margin: 0;
			position: relative;
			z-index: 3;
			padding-top: 4rem;
			padding-bottom: 6rem;
			min-height: 90vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			${containers.container()}
		}

		.title {
			${fonts.sizes('2em', '2.5em, 3em')}
			${fonts.sansSerif}
			text-transform: uppercase;
			margin: 0;
			margin-bottom: .5em;
			width: 75%;
			text-align: center;
		}

		.meta {
			text-align: center;
			font-size: 1em;
			margin: 0;
			display: block;

			.date {
				font-size: 1.5em;
			}
                
			div {
				margin-bottom: .75em;

				&:last-child {
					margin-bottom: 0;
				}

				&:after {
					display: none;
				}
			}

			* {
				font-size: 1em;
				line-height: 1em;
			}

			${breaks.tablet(`
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				.date {
					width: 100%;
					margin-bottom: 1em;
				}

				div {
					&:after {
						content: '|';
						margin: 0 .5em;
					}

					&:last-child:after {
						display: none;
					}
				}
			`)}
		}

		.excerpt {
			line-height: 1.25;
			${containers.readable}
			padding-left: 0;
			padding-right: 0;
			text-align: center;
		}

		.scroll-link {
			color: ${theme.light};
			height: 4rem;
			width: 4rem;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 1rem;

			&:before, &:after {
				content: '';
				display: block;
				width: 0; 
				height: 0; 
				border-right: .5em solid transparent;
				border-left: .5em solid transparent;
				border-top: .5em solid currentColor;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				${animations.bounce}
			}
        
			&:before {
				top: .5em
			}

			&:after {
				top: 1em;
			}
			
			span {
				position: absolute;
				height: 0;
				width: 0;
				overflow: hidden;
			}
		}
    
		.gatsby-image-wrapper {
			height: auto;
			min-height: 100%;
			width: auto;
			min-width: 100vw;
			object-fit: cover;
			position: absolute !important; /* gatsby-image override */
			right: 0;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			z-index: 0;
		}
		
		${breaks.tablet(`
			@supports (display: grid) {

				.text {
					display: grid;
					grid-template-columns: 75vw 25vw;
					grid-template-rows: auto 1fr;
				}

				.title {
					text-align: left;
					${containers.container()}
					grid-column-start: 1;
					grid-column-end: 2;
					align-self: start;
				}

				.meta {
					display: block;
					text-align: right;
					${containers.container()}
					grid-column-start: 2;
					grid-column-end: 3;
					align-self: start;

					div:after {
						display: none;
					}

					.date {
						text-transform: uppercase;
						font-size: 1.5em;
						margin-top: 0.35em;
						margin-bottom: .9em;
					}
				}

				.excerpt {
					text-align: left;
					justify-self: start;
					${containers.container()}
					margin-left: 0;
					margin-right: 0;
					grid-column-start: 1;
					grid-column-end: 3;
					text-align: left;
				}
			}
		`)}
	}

	#content {
		background-color: ${theme.light};
		padding: 6rem 0 4rem 0;
		position: relative;
		z-index: 5;
		text-align: center;

		&:before, &:after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
		}
	}
`

export default StyledBlogArticle;