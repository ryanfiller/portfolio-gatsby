import React from 'react'
import Link from 'gatsby-link'

import Dropdown from '../components/dropdown'
import PortfolioGrid from '../components/portfolio-grid'

export default class Portfolio extends React.Component {
	
	constructor({ data }) {
		super({ data });
		this.setFilter = this.setFilter.bind(this);
		this.state = {
			category: '',
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

		console.log(this.state)

		return (
			<main className="page-content">

				<Dropdown title={'Filter...'} items={this.getCategories(data.allMarkdownRemark.edges)} itemOnClick={this.setFilter} />

				<PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>

			</main>
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