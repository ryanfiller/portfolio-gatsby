import React from 'react';
import { graphql } from 'gatsby'
import Link from 'gatsby-link';

import PortfolioFilter from '../components/portfolio-filter'
import PortfolioGrid from '../components/portfolio-grid'

export default ({ data }) => {
  return (
	<React.Fragment>
		
		{/* <PortfolioFilter /> */}
		<PortfolioGrid 
		// currentCategory={this.state.category} 
		portfolio={data.allMarkdownRemark.edges}
		/>

	</React.Fragment>
  );
};

export const query = graphql`
	query HomepagePortfolioList {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				fields: {slug: { regex: "/portfolio//" }},
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
						date
						path
						color
						backgroundgif
						gifattribution
						category
						tags
						logowhite
					}
				}
			}
		}
	}
`