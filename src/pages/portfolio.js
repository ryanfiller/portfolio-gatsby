import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { breaks } from '../config/styles';

import { colorizeBlocks } from '../helpers';

import Filter from '../components/filter';
import PortfolioBlock from '../components/portfolio-block';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

export const query = graphql`
	query PortfolioListQuery {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___meta___date]},
			filter: {
				fields: {slug: { regex: "//portfolio//" }},
				frontmatter: { options: { published: { eq: true } } }
			},
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
							tags
						}
						thumbnail {
							url
						}
						client {
							logo {
								color
								white
							}
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

	const portfolio = data.allMdx.edges;

	const [currentFilter, setCurrentFilter] = useState('all');

	const getCategories = (data) => {
		var categories = [];

		data.map(({ node }) => (
			node.frontmatter.meta.category.forEach((item) => {
				categories.push(item);
			})
		));

		return categories.filter(
			(value, index, self) => { 
				return self.indexOf(value) === index;
			}
		).sort();
	};

	const gridColors = useMemo(() => colorizeBlocks(0, 4, '#192368', portfolio));

	return (
		<section className={props.className}>

			<Filter 
				currentFilter={currentFilter} 
				setCurrentFilter={setCurrentFilter}
				filters={getCategories(data.allMdx.edges)} 
			/>

			<section className="portfolio-grid">
				{portfolio.map(({ node }, index) => (
					!currentFilter || currentFilter === 'all' || node.frontmatter.meta.category.includes(currentFilter) ?
						<PortfolioBlock {...node} key={index} backgroundColor={gridColors[index]}/>
					: null
				))} 
			</section>

		</section>
	);
}

Portfolio.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledPortfolio = styled(Portfolio)`
	width: 100%;

	.portfolio-grid {
		width: 100%;
		display: block;

		& > * {
			width: 100%;
			height: 75vw;
		}

		${breaks.phone(`

			display: flex;
			flex-wrap: wrap;

			& > * {
				width: 50%;
				height: 50vw;
			}

			@supports(display: grid) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: auto;

				& > * {
					width: 100%;
					height: 33.333vw;
				}
			}
		`)}

		${breaks.tablet(`
			@supports(display: grid) {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-rows: auto;

				& > * {
					&:nth-child(4n-2), &:nth-child(4n-1) {
						grid-column: span 2;
					}
				}
			}
		`)}	
	}
`

export default StyledPortfolio;