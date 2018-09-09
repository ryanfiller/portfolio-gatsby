import React from 'react'

import PortfolioFilter from '../components/portfolio-filter'
import PortfolioGrid from '../components/portfolio-grid'

export default class Portfolio extends React.Component {
	
	setFilter = this.setFilter.bind(this);
	state = {
		category: 'all',
	};

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

				<PortfolioFilter currentCategory={this.state.category} categories={this.getCategories(data.allMarkdownRemark.edges)} setFilter={this.setFilter} />

				<PortfolioGrid currentCategory={this.state.category} portfolio={data.allMarkdownRemark.edges}/>

			</React.Fragment>
		);
	}
};

export const query = graphql`
	query PortfolioListQuery {
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