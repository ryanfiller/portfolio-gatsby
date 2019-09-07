import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

// TODO SEO HELP
// import Helmet from 'react-helmet'

import styled from 'styled-components';
import { animations, breaks, containers, fonts, overlays, theme } from '../config/styles';

import Banner from '../components/banner';
import ContentMeta from '../components/content-meta';
import MarkdownBlock from '../components/markdown-block';
import BackButton from '../components/back-button';

export const postQuery = graphql`
	query BlogPost($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				meta {
					date(formatString: "MMM.DD.YY")
					category
					tags
					excerpt
				}
				banner {
					url
					attribution
				}
			}
			body
		}
	}
`

const BlogArticle = (props) => {

	const post = props.data.mdx;
	const { frontmatter } = post;

	console.log(frontmatter)

	return (
		<article className={props.className} >
			<Banner
					src={frontmatter.banner.url}
					alt={frontmatter.banner.attribution}
				>
					<h1 className="title">
						{post.frontmatter.title}
					</h1>
					<ContentMeta {...frontmatter.meta}/>
					<ContentMeta
						date={post.frontmatter.date}
						category={post.frontmatter.category}
						tags={post.frontmatter.tags}
					/>
					<p className="excerpt">
						{post.frontmatter.meta.excerpt}
					</p>
					<a className="scroll-link" href="#content">
						<span>
							Skip To Content
						</span>
					</a>
				</Banner>
			
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
	${Banner} .content {
		${fonts.sizes('1.5rem', '1.75rem, 2rem')}
		background: ${theme.highlight};
		width: 100vw;
		position: relative;
		overflow: hidden;
		${overlays.pixels}
		font-size: 2rem;
		color: ${theme.light};

		${breaks.tablet(`
			font-size: 2.75rem;
		`)}
    
		.text {
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
		
		/* ${breaks.tablet(`
			@supports (display: grid) {
				.title {
					text-align: left;
					${containers.container()}
					grid-column-start: 1;
					grid-column-end: 2;
					align-self: start;
					width: 75%;
				}

				.text {
					display: grid;
					grid-template-columns: 75vw 25vw;
					grid-template-rows: auto 1fr;
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
		`)} */
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