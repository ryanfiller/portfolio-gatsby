import React from 'react';
import Link from 'gatsby-link';
import PortfolioFilter from '../components/portfolio-filter.js';
import PortfolioGrid from '../components/portfolio-grid.js';

import { breaks } from '../config/config';

import Form from '../components/form.js';

export default class IndexPage extends React.Component {

	constructor({ data }) {
		super({ data });
	}

	componentDidMount() {
		document.addEventListener('wheel', this.onScroll);
	}

	componentWillUnmount() {
		document.removeEventListener('wheel', this.onScroll);
	  }

	onScroll(e, tablet) {
		var container = document.getElementsByClassName('portfolio-grid');
		var scroll_vert = 0;

		if (window.innerWidth > breaks.tablet) {
			container[0].scrollLeft += e.deltaY;
			container[0].scrollLeft += e.deltaX;

			e.preventDefault();
		}
	}

	render () {

		const { data } = this.props;

		return (
			<main className="page-content">
	
				<PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>
	
			</main>
		);
	}
};

export const query = graphql`
	query HomepagePortfolioListQuery {
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