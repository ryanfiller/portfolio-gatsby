import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { animations, breaks, containers, fonts } from '../config/styles';

import PortfolioGallery from '../components/portfolio-gallery-old';
import ContentMeta from '../components/content-meta';
import MarkdownBlock from '../components/markdown-block';
import BackButton from '../components/back-button';

export const postQuery = graphql`
	query PortfolioPostOld($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				meta {
					category
					tags
				}
				thumbnail {
					alt
				}
				client {
					name
					website
					color
				}
				# slides {
				# 	slide {
				# 	}
				# }
			}
			body
		}
	}
`

const PortfolioItem = (props) => {

	const post = props.data.mdx;
	const { frontmatter } = post;

	return (
		<article className={props.className}>
			<PortfolioGallery slides={frontmatter.slides} color={frontmatter.client.color} />

			<div className="content">
				<header className="header">
					<h1>
						{frontmatter.title}
					</h1>

					<ContentMeta {...frontmatter.meta} />

					<a className="" href={frontmatter.client.website}>
						{frontmatter.client.name}
					</a>
				</header>

				<MarkdownBlock post={props.data.mdx.body}/>

				<BackButton location={props.location} />

				<cite className="gif-credit">
					Grid Page .gif Credit: <span>{frontmatter.thumbnail.alt}</span>
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
			padding-top: calc(3*var(--padding));
        	padding-bottom: calc(3*var(--padding));
		`)}
    }

    .header {
		${containers.container()};
    	${containers.readable()};
        padding-top: calc(3*var(--padding));
        padding-bottom: calc(3*var(--padding));
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
				color: var(--primary)
        }

        .meta {
			font-size: 2em;
            margin-top: 1em;
            text-align: center;

            .meta__tag {
                color: var(--disabled);
            }
        }

        a {
            font-size: 1.75em;
            display: inline-block;
            margin: 0 auto;
            margin-top: .75em;
            text-decoration: none;
            ${animations.highlight()}
		}
		
		&:after {
			content: '';
			display: block;
			width: 1rem;
			height: 1rem;
			border-right: 2px solid var(--active);
			border-bottom: 2px solid var(--active);
			margin: 0 auto;
			transform: rotate(45deg);
			margin-top: 2rem;
			${animations.float}
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
            height: calc(var(--padding)*6);
            width: 50%;
            z-index: 2;
            background: linear-gradient(to top, var(--light), transparent);
			pointer-events: none;
			
			${breaks.tablet(`
				display: block;
			`)}
        }
    }

    .gif-credit {
        ${fonts.condensed()}
        color: var(--primary);
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