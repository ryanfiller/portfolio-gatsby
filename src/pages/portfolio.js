import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Filter from '../components/filter';
import PortfolioGrid from '../components/portfolio-grid';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

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
						backgroundgif {
							publicURL
						}
						category
						tags
						logowhite {
							publicURL
						}
					}
				}
			}
		}
	}
`

const Portfolio = ( props ) => {

	const { 
		data 
	} = props;

	const [currentFilter, setCurrentFilter] = useState('all');

	const getCategories = (data) => {
		var categories = [];

		data.map(({ node }) => (
			node.frontmatter.category.forEach((item) => {
				categories.push(item);
			})
		));

		return categories.filter(
			(value, index, self) => { 
				return self.indexOf(value) === index;
			}
		).sort();
	};

	return (
		<React.Fragment>

			<Filter 
				currentFilter={currentFilter} 
				setCurrentFilter={setCurrentFilter}
				filters={getCategories(data.allMarkdownRemark.edges)} 
			/>

			<PortfolioGrid 
				currentFilter={currentFilter} 
				portfolio={data.allMarkdownRemark.edges}
			/>

		</React.Fragment>
	);
}

Portfolio.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Portfolio;