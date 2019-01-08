import React from 'react'
import PropTypes from "prop-types";

import styled from 'styled-components'
import { breaks } from '../config/styles'

import PortfolioBlock from './portfolio-block.js'

const PortfolioGrid = (props) => {

	const { 
		portfolio, 
		currentFilter 
	} = props;

	return (
		<section className={`portfolio-grid ${props.className}`}>
			{portfolio.map(({ node }, index) => (
				!currentFilter || currentFilter === 'all' || node.frontmatter.category.includes(currentFilter) ?
					<PortfolioBlock card={node} key={index}/>
				: null
			))} 
		</section>
	)
}

const StyledPortfolioGrid = styled(PortfolioGrid)`

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
`

PortfolioGrid.propTypes = {
    portfolio: PropTypes.array.isRequired,
	currentFilter: PropTypes.string,
};

export default StyledPortfolioGrid;