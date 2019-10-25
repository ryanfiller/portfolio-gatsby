/* eslint-disable */

import React, { useContext, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import styled, { createGlobalStyle } from 'styled-components';
import { breaks, breakPoints, theme } from '../config/styles';

import { LayoutContext } from '../components/layout/layout';

import { arrayZip, colorizeBlocks } from '../helpers';

import PortfolioBlock from '../components/portfolio-block.js'
import BlogPreview from '../components/blog-preview';
import ReadMore from '../components/read-more';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

export const query = graphql`
	query HomepageBlocks {
		portfolio: allMdx(
			sort: { order: DESC, fields: [frontmatter___meta___date]},
			filter: {
				fields: {slug: { regex: "//portfolio//" }},
				frontmatter: { options: { published: { eq: true } } }
			},
			# limit: 4,
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						meta {
							category
						}
						client {
							logo {
								color
								white
							}
						}
						thumbnail {
							url
							alt
						}
					}
				}
			}
		}
		blog: allMdx(
			sort: { order: DESC, fields: [frontmatter___meta___date]},
			filter: {
				fields: {slug: { regex: "//blog//" }},
				frontmatter: { options: { published: { eq: true } } }
			},
		# limit: 2,
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
							# excerpt
						}
					}
				}
			}
		}
	}
`

const Homepage = (props) => {

	const layout = useContext(LayoutContext)

	const {
		jsLoaded
	} = layout

	const gridRef = useRef(null);
	const scrollDirectionConverter = (e) => {
		if (window.innerWidth > breakPoints.tablet) {
			e.preventDefault();
			gridRef.current.scrollLeft += e.deltaY;
			gridRef.current.scrollLeft += e.deltaX;
		}
	}
	if(jsLoaded) {
		useEffect(() => {
			document.addEventListener('wheel', scrollDirectionConverter);
			return () => document.removeEventListener('wheel', scrollDirectionConverter)
		})
	}

	const portfolio = props.data.portfolio.edges;
	const blog = props.data.blog.edges;
	const gridData = arrayZip(portfolio, blog, 2, 1);
	const gridBlocks = [];
	gridData.map( (chunk, index) => {
		if (index % 2 === 0) { // is even, is porfolio
			return chunk.map( (item) => {
				gridBlocks.push({
					component: 'PortfolioBlock',
					node: item.node
				})
			})
		} else { // is odd, is blog
			return chunk.map( (item) => {
				gridBlocks.push({
					component: 'BlogPreview',
					node: item.node
				})
			})
		}
	})
	
	const gridColors = useMemo(() => colorizeBlocks(0, 4, theme.primary, portfolio));

	return (
		<>

			<Helmet>
				<body className="homepage" />
			</Helmet>

			{/* <HomepageGlobalStyle /> */}

			<section 
				ref={gridRef}
				className={`homepage-grid ${props.className}`}
			>
				{gridBlocks.map( (block, index) => {
					return block.component === 'PortfolioBlock' ? 
						<PortfolioBlock {...block.node} key={index} backgroundColor={gridColors[index]} /> : 
						<BlogPreview {...block.node} key={index} backgroundColor={gridColors[index]} />
				})}
				<ReadMore />
			</section>
		</>
	)
}

Homepage.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledHomepage = styled(Homepage)`

	width: 100%;
	display: block;

	& > * {
		width: 100%;
		height: 75vw;
	}

	${breaks.phone(`

		.blog-preview .excerpt {
			display: none !important;
		}

		display: flex;
		flex-wrap: wrap;

		& > * {
			flex: 1;
			flex-basis: 50%;
			height: 50vw;
		}
	`)}

	.client-side-js & {
		${breaks.tablet(`

			.blog-preview .excerpt {
				display: block !important;
			}

			@supports(display: grid) {
				height: 100vh;
				width: auto;
				overflow-x: auto;
				overflow-y: hidden;

				display: grid;
				grid-template-columns: repeat(auto-fill, 50vh);
				grid-template-rows: 50vh 50vh;
				grid-auto-flow: column;

					& > * {
						width: 100vh;
						grid-column: span 2;
						grid-row: span 1;
						height: 100%;
						min-width: 50vh;
						
						&:first-child,
						&:last-child {
							width: 50vh;
							grid-column: span 1;
						}
					}
				}
		`)}	
	}
`

const HomepageGlobalStyle = createGlobalStyle`
	body.homepage {
		${breaks.tablet(`
			@supports(display: grid) {
				#site {
					#content {
						display: grid;
						// TODO use named areas for this
						grid-template-columns: 20vw 80vw;
						grid-template-rows: 1fr auto;

						#header, #footer {
							grid-column-start: 1;
							grid-column-end: 2;
							z-index: 10;
							box-shadow: 0px 0px 1.25rem $color-black;
						}

						#header {
							grid-row-start: 1;
							grid-row-end: 2;
						}

						#footer {
							grid-row-start: 2;
							grid-row-end: 3;
						}

						main {
							grid-column-start: 2;
							grid-column-end: 3;
							grid-row-start: 1;
							grid-row-end: 3;
							overflow-x: scroll;
						}
					}

					#header {
						flex-wrap: wrap;
						justify-content: center;
						align-items: space-around;

						// TODO - fix this style
						a { //logo
							font-size: 2.5em;
						}

						nav {
							width: 100%;
							flex: initial;
							display: block;
							text-align: center;

							a {
								font-size: 2rem;
								display: inline-block !important;
								margin: .5em !important;
							}
						}
					}
				
					#footer {
						display: block;

						.copyright {
							text-align: center;
							margin-bottom: 1em;
						}
						
						.socials {
							li {
								flex: 1;
							}
			
							li {
								width: 100%;
							}
						}
					}
				}
			}	
		`)}
	}
`

export default StyledHomepage;