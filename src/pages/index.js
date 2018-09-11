import React from 'react';
import { graphql } from 'gatsby'

import { breaks } from '../config/styles'

import PortfolioFilter from '../components/portfolio-filter'
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
		var scroll_vert = 0;
	
		if (window.innerWidth > breaks.tablet) {
			container[0].scrollLeft += e.deltaY;
			container[0].scrollLeft += e.deltaX;
	
			e.preventDefault();
		}
	}

  	render() {
		return (
			<main class="page-content">
				
				<PortfolioGrid 
					portfolio={this.props.data.allMarkdownRemark.edges}
					currentCategory="all"
				/>
		
			</main>
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
						backgroundgif
						category
						tags
						logowhite
					}
				}
			}
		}
	}
`