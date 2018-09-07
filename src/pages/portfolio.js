import React from 'react'
import Link from 'gatsby-link'

import PortfolioFilter from '../components/portfolio-filter'
import PortfolioGrid from '../components/portfolio-grid'

export default class Portfolio extends React.Component {
	
	constructor({ data }) {
		super({ data });
		this.setFilter = this.setFilter.bind(this);
		this.state = {
			category: 'all',
		};
	}

	getCategories(data) {
		var categories = [];

		data.map(({ node }) => (
			node.frontmatter.category.map((item) => {
				categories.push(item);
			})
		));

		return categories.filter(
			(value, index, self) => { 
				return self.indexOf(value) === index;
			}
		).sort();
	}

	setFilter(category) {
		this.setState({
			category: category,
		});
	}

	render () {

		const { data } = this.props;

		return (
			<React.Fragment>

			porfolio

				{/* <PortfolioFilter currentCategory={this.state.category} categories={this.getCategories(data.allMarkdownRemark.edges)} setFilter={this.setFilter} /> */}

				{/* <PortfolioGrid currentCategory={this.state.category} portfolio={data.allMarkdownRemark.edges}/> */}

			</React.Fragment>
		);
	}
};


export const query = graphql`
	query PortfolioListQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: {
				id: { regex: "/portfolio//" },
				frontmatter: { published: { eq: true } }
			},
		) {
		edges {
			node {
				id
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