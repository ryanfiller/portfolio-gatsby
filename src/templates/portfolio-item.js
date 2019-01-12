import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { animations, breaks, colors, fonts, padding } from '../config/styles';

import PortfolioGallery from '../components/portfolio-gallery';
import ContentMeta from '../components/content-meta';
import MarkdownBlock from '../components/markdown-block';
import BackButton from '../components/back-button';

export const postQuery = graphql`
	query PortfolioPost($slug: String!) {

		markdownRemark(fields: { slug: { eq: $slug } }) {
			htmlAst
			frontmatter {
				title
				category
				tags
				color
				gifattribution
				client
				clienturl
				slides {
					slide {
						image {
							childImageSharp {
								sizes(maxWidth: 1000 ) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}
	}
`

const PortfolioItem = (props) => {

	const post = props.data.markdownRemark.frontmatter;

	return (
		<article className={props.className}>
			<PortfolioGallery slides={post.slides} color={post.color} />

			<div className="content">
				<header className="header">
					<h1>
						{post.title}
					</h1>

					<ContentMeta tags={post.tags} />

					<a className="" href={post.clienturl}>
						{post.client}
					</a>
				</header>

				<MarkdownBlock post={props.data.markdownRemark.htmlAst}/>

				<BackButton location={props.location} />

				<cite className="gif-credit">
					Grid Page .gif Credit: <span>{post.gifattribution}</span>
				</cite>
			</div>
		</article>
	);
};

PortfolioItem.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledPortfolioItem = styled(PortfolioItem)`
	display: block;
	height: auto;
	
	${breaks.tablet(`
		display: flex;
		width: 100vw;
		height: 100%;
	`)}

    .portfolio-gallery {
		width: 100%;
		
		${breaks.tablet(`
			width: 50vw;
		`)}
    }

    .content {
		padding-top: 0;
		text-align: center;

		${breaks.tablet(`
			height: auto;
			padding-top: calc(3*${padding});
        	padding-bottom: calc(3*${padding});
		`)}
    }

    .header {
        padding-top: calc(3*${padding});
        padding-bottom: calc(3*${padding});
        position: relative;
		text-align: center;
		
		${breaks.tablet(`
			padding-top: 25vh;
			padding-bottom: 15vh;	
		`)}

        h1 {
            margin: 0;
            font-size: 4em;
            line-height: 1em;
            text-align: center;
			text-transform: uppercase;
			${fonts.condensed()}
        }

        .meta {
			font-size: 2em;
            margin-top: 1em;
            text-align: center;

            .meta__tag {
                color: ${colors.lightGray};
            }
        }

        a {
            font-size: 1.75em;
            display: inline-block;
            margin: 0 auto;
            margin-top: .75em;
            text-decoration: none;
            ${animations.highlight(colors.blue, colors.white, colors.blue)}
		}
		
		&:after {
			content: '';
			display: block;
			width: 1rem;
			height: 1rem;
			border-right: 2px solid ${colors.orange};
			border-bottom: 2px solid ${colors.orange};
			margin: 0 auto;
			transform: rotate(45deg);
			margin-top: 2rem;
			${animations.bounce}
		}
    }

    .content {
		width: 100%;
        overflow: scroll;

		${breaks.tablet(`
			width: 50vw;
		`)}
    }

    & + footer {
        position: relative;
        
        &:before {
			display: none;
            content: '';
            position: absolute;
            bottom: 100%;
            right: 0;
            height: calc(${padding}*6);
            width: 50%;
            z-index: 2;
            background: linear-gradient(to top, ${colors.white}, transparent);
			pointer-events: none;
			
			${breaks.tablet(`
				display: block;
			`)}
        }
    }

    .gif-credit {
        ${fonts.condensed()}
        color: ${colors.darkGray};
        display: none;
        text-align: center;
        margin-top: 4rem;

        span { 
            font-weight: bold;
        }
		
		${breaks.phone(`
			display: block;
		`)}
    }
`

export default StyledPortfolioItem;