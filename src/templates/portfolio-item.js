import React, { useRef, useState } from "react"
import PropTypes from "prop-types";
import { graphql } from 'gatsby';

import MediaQuery from 'react-responsive';
import styled from 'styled-components'
import { animations, breaks, breakPoints, containers, fonts, padding, theme } from '../config/styles'

import { formatPortfolioObject } from '../helpers/helpers'

import PortfolioGallery from '../components/portfolio-gallery'
import ContentMeta from '../components/content-meta'
import MarkdownBlock from '../components/markdown-block'
import BackButton from '../components/back-button';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

export const postQuery = graphql`
	query PortfolioPost($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				meta {
					category
					tags
				}
				thumbnail {
					attribution
				}
				client {
					name
					website
					color
				}
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
			body
			rawBody
			mdxAST
		}
	}
`

export const GalleryContext = React.createContext();

const PortfolioItem = (props) => {

	const post = props.data.mdx;
	const { frontmatter } = post; 

	const portfolioItems = formatPortfolioObject(post);

	const [current, setCurrent] = useState(0);
	const [scroll, setScroll] = useState(0);
	const [mode, setMode] = useState('');

	const scrollRef = useRef(null);
	let last_known_scroll_position = 0;
	let ticking = false;

	const scrollListener = () => {
		if (mode !== 'scroll') {setMode('scroll')}
		
		last_known_scroll_position = scrollRef.current.scrollTop;
			if (!ticking) {
				window.requestAnimationFrame(function() {
					let halfway = last_known_scroll_position + scrollRef.current.offsetHeight / 2;
					setScroll(halfway);
					ticking = false;
				});
			ticking = true;
		}
	}

	const galleryValue = {
		current: current,
		setCurrent: setCurrent,
		portfolioItems: portfolioItems,
		scroll: scroll,
		mode: mode,
		setMode: setMode
	};

	// return (
	// 	<GalleryContext.Provider value={galleryValue}>
	// 		<article className={props.className}>
	// 			{/* <MediaQuery query={`(min-width: ${breakPoints.tablet}px)`}>
	// 				<PortfolioGallery 
	// 					slides={portfolioItems}
	// 					color={frontmatter.color} 
	// 				/>
	// 			</MediaQuery> */}

	// 			{console.log(portfolioItems)}
				
	// 			<div className="content" 
	// 				ref={scrollRef}
	// 				onScroll={scrollListener}
	// 			>
	// 				<header className="header">
	// 					<h1>
	// 							{frontmatter.title}
	// 					</h1>

	// 					<ContentMeta tags={frontmatter.tags} />

	// 					<a className="" href={frontmatter.clienturl}>
	// 							{frontmatter.client}
	// 					</a>
	// 				</header>

	// 				<MarkdownBlock post={post.body}/>

	// 				<BackButton location={props.location} />

	// 				<cite className="gif-credit">
	// 						Grid Page .gif Credit: <span>{frontmatter.gifattribution}</span>
	// 				</cite>
	// 			</div>
	// 		</article>
	// 	</GalleryContext.Provider>
	// )

	return (
		<div>
			<MarkdownBlock post={post.body}/>
		</div>
	)
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
			${containers.container()};
    	${containers.readable()};
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
			color: ${theme.primary}
        }

        .meta {
			font-size: 2em;
            margin-top: 1em;
            text-align: center;

            .meta__tag {
                color: ${theme.disabled};
            }
        }

        a {
            font-size: 1.75em;
            display: inline-block;
            margin: 0 auto;
            margin-top: .75em;
            text-decoration: none;
            ${animations.highlight(theme.active, theme.light, theme.active)}
		}
		
		&:after {
			content: '';
			display: block;
			width: 1rem;
			height: 1rem;
			border-right: 2px solid ${theme.active};
			border-bottom: 2px solid ${theme.active};
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
            background: linear-gradient(to top, ${theme.light}, transparent);
			pointer-events: none;
			
			${breaks.tablet(`
				display: block;
			`)}
        }
    }

    .gif-credit {
        ${fonts.condensed()}
        color: ${theme.primary};
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