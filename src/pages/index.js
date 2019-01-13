import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import { createGlobalStyle } from 'styled-components';
import { breaks } from '../config/styles';

import { arrayZip } from '../helpers/helpers';

import PortfolioBlock from '../components/portfolio-block.js'
import BlogPreview from '../components/blog-preview';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

export const query = graphql`
	query HomepageBlocks {
		portfolio: allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				fields: {slug: { regex: "//portfolio//" }},
				frontmatter: { published: { eq: true } }
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
						color
						backgroundgif {
							relativePath
							publicURL
						}
						category
						tags
						logowhite {
							relativePath
							publicURL
						}
					}
				}
			}
		}
		blog: allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				fields: {slug: { regex: "//blog//" }},
				frontmatter: { published: { eq: true } }
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

const Homepage = (props) => {
	useEffect(() => {

        const scrollDirectionConverter = (e) => {
			var container = document.getElementsByClassName('portfolio-grid');
		
			if (window.innerWidth > breaks.tablet) {
				container[0].scrollLeft += e.deltaY;
				container[0].scrollLeft += e.deltaX;
				e.preventDefault();
			}
		}

        document.addEventListener('wheel', scrollDirectionConverter);

        return () => {
          document.removeEventListener('wheel', scrollDirectionConverter);
        };
	});

	const portfolio = props.data.portfolio.edges;
	const blog = props.data.blog.edges;
	const gridItems = arrayZip(portfolio, blog, 2, 1);

	return (
		<React.Fragment>
			{/* <GlobalStyle /> */}
			{/* <PortfolioGrid 
				portfolio={props.data.allMarkdownRemark.edges}
				currentCategory="all"
			/> */}
			<div>
				{gridItems.map( (chunk, index) => {
					if (index % 2 === 0) { // is even, is porfolio
						return chunk.map( (item, index) => {
							return <PortfolioBlock {...item.node} key={index}/>
						})

					} else { // is odd, is blog
						return chunk.map( (item, index) => {
							return <BlogPreview {...item.node} key={index}/>
						})
					}
				})}
			</div>
		</React.Fragment>
	)
}

Homepage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Homepage;

// TODO - refactor all of this
// const GlobalStyle = createGlobalStyle`
// 	${breaks.tablet(`
// 		@supports(display: grid) {
// 			#site {
// 				#site-content {
// 					display: grid;
// 					grid-template-columns: 80vw 20vw;
// 					grid-template-rows: 1fr auto;

// 					#header, #footer {
// 						grid-column-start: 2;
// 						grid-column-end: 3;
// 						z-index: 10;
// 						box-shadow: 0px 0px 1.25rem $color-black;
// 					}

// 					#header {
// 						grid-row-start: 1;
// 						grid-row-end: 2;
// 					}

// 					#footer {
// 						grid-row-start: 2;
// 						grid-row-end: 3;
// 					}

// 					main {
// 						grid-column-start: 1;
// 						grid-column-end: 2;
// 						grid-row-start: 1;
// 						grid-row-end: 3;
// 						overflow-x: scroll;
// 					}
// 				}

// 				#header {
// 					flex-wrap: wrap;
// 					justify-content: center;
// 					align-items: space-around;

// 					a { //logo
// 						font-size: 2.5em;

// 						.r {
// 							filter: drop-shadow( .25em 0px 0px $color-black ); 
// 							margin-right: -.7em;
// 						}
		
// 						.f {
// 							transform: rotateY(180deg);
// 							margin-right: 0;
// 							margin-left: .15em;
// 						}
		
// 						.yan, .iller {
// 							max-width: 0;
// 						}
// 					}

// 					nav {
// 						width: 100%;
// 						flex: initial;
// 						display: block;
// 						text-align: center;

// 						a {
// 							font-size: 2rem;
// 							display: inline-block !important;
// 							margin: .5em !important;
// 						}
// 					}
// 				}

// 				#portfolio-grid {
// 					height: 100vh;
// 					width: auto;
// 					display: grid;
// 					grid-auto-flow: row;
// 					grid-template-columns: repeat(auto-fill, 50vh);
// 					grid-template-rows: 50vh 50vh;
// 					overflow-x: scroll;

// 					& > * {
// 						width: 100vh;
// 						height: 50vh;
// 						grid-column-end: span 2;

// 						&:first-child, &:last-child {
// 							width: 50vh;
// 							grid-column-end: span 1;
// 						}

// 						&:nth-child(odd) {
// 							grid-row-start: 1;
// 							grid-row-end: 2;
// 						}

// 						&:nth-child(even) {
// 							grid-row-start: 2;
// 							grid-row-end: 3;
// 						}
// 					}
// 				}
			
// 				#footer {
// 					display: block;

// 					.copyright {
// 						text-align: center;
// 						margin-bottom: 1em;
// 					}
					
// 					.socials {
// 						li {
// 							flex: 1;
// 						}
		
// 						li {
// 							width: 100%;
// 						}
// 					}
// 				}
// 			}
// 		}	
// 	`)}
// `