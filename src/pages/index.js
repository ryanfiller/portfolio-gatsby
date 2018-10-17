import React from 'react';
import { graphql } from 'gatsby'

import { injectGlobal } from 'styled-components'
import { breaks, functions } from '../config/styles'

import PortfolioGrid from '../components/portfolio-grid'

export default class Homepage extends React.Component {

	componentDidMount() {
		document.addEventListener('wheel', this.onScroll);
	}
	
	componentWillUnmount() {
		document.removeEventListener('wheel', this.onScroll);
	  }
	
	onScroll(e) {
		var container = document.getElementsByClassName('portfolio-grid');
	
		if (window.innerWidth > breaks.tablet) {
			container[0].scrollLeft += e.deltaY;
			container[0].scrollLeft += e.deltaX;
	
			e.preventDefault();
		}
	}

  	render() {
		return (
			<PortfolioGrid 
				portfolio={this.props.data.allMarkdownRemark.edges}
				currentCategory="all"
			/>
		)
	}
}

export const query = graphql`
	query HomepagePortfolioList {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				fields: {slug: { regex: "//portfolio//" }},
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
						color
						backgroundgif {
							relativePath
						}
						category
						tags
						logowhite {
							relativePath
						}
					}
				}
			}
		}
	}
`

injectGlobal`
	${functions.tabletBreak(`
		@supports(display: grid) {
			.site.horizontal {
				.site-content {
					display: grid;
					grid-template-columns: 80vw 20vw;
					grid-template-rows: 1fr auto;

					.header, .footer {
						grid-column-start: 2;
						grid-column-end: 3;
						z-index: 10;
						box-shadow: 0px 0px 1.25rem $color-black;
					}

					.header {
						grid-row-start: 1;
						grid-row-end: 2;
					}

					.footer {
						grid-row-start: 2;
						grid-row-end: 3;
					}

					main{
						grid-column-start: 1;
						grid-column-end: 2;
						grid-row-start: 1;
						grid-row-end: 3;
						overflow-x: scroll;
					}
				}

				.header {
					flex-wrap: wrap;
					justify-content: center;
					align-items: space-around;

					.rf-logo {
						font-size: 2.5em;

						.r {
							filter: drop-shadow( .25em 0px 0px $color-black ); 
							margin-right: -.7em;
						}
		
						.f {
							transform: rotateY(180deg);
							margin-right: 0;
							margin-left: .15em;
						}
		
						.yan, .iller {
							max-width: 0;
						}
					}

					.nav {
						width: 100%;
						flex: initial;
						display: block;
						text-align: center;

						a {
							display: inline-block;
							margin: .5em;
						}
					}
				}

				.portfolio-grid {
					height: 100vh;
					width: auto;
					display: grid;
					grid-auto-flow: row;
					grid-template-columns: repeat(auto-fill, 50vh);
					grid-template-rows: 50vh 50vh;
					overflow-x: scroll;

					& > * {
						width: 100vh;
						height: 50vh;
						grid-column-end: span 2;

						&:first-child, &:last-child {
							width: 50vh;
							grid-column-end: span 1;
						}

						&:nth-child(odd) {
							grid-row-start: 1;
							grid-row-end: 2;
						}

						&:nth-child(even) {
							grid-row-start: 2;
							grid-row-end: 3;
						}
					}
				}
			
				.footer {
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
`