import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { animations, colors, fonts, padding, functions } from '../config/styles'

import PortfolioGallery from '../components/portfolio-gallery'
import ContentMeta from '../components/content-meta'
import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {

	const post = data.markdownRemark.frontmatter;

	return (
		<StyledPortfolioItem>
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

				<MarkdownBlock post={data.markdownRemark.htmlAst}/>

				{/* TODO */}
				{/* <a className="back-link" href="/{{ page.parent }}"> Back to {{ page.parent }}</a> */}

				<cite className="gif-credit">
					Grid Page .gif Credit: <span>{post.gifattribution}</span>
				</cite>
			</div>
		</StyledPortfolioItem>
	);
};

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

const StyledPortfolioItem = styled.div`
	display: block;
	height: auto;
	
	${functions.tabletBreak(`
		display: flex;
		width: 100vw;
		height: 100%;
	`)}

    .portfolio-gallery {
		width: 100%;
		
		${functions.tabletBreak(`
			width: 50vw;
		`)}
    }

    .content {
		padding-top: 0;

		${functions.tabletBreak(`
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
		
		${functions.tabletBreak(`
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

		${functions.tabletBreak(`
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
			
			${functions.tabletBreak(`
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
		
		${functions.phoneBreak(`
			display: block;
		`)}
    }
`