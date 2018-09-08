import React, { Component } from 'react'
import styled from 'styled-components'

import { functions } from '../config/styles'

import PortfolioBlock from './portfolio-block.js'

export default class PortfolioGrid extends Component {
	render() {

		const { portfolio, currentCategory } = this.props;

		return (
			<StyledPortfolioGrid className="portfolio-grid">
				{portfolio.map(({ node }, index) => (
					currentCategory === 'all' || node.frontmatter.category.includes(currentCategory) ?
						<PortfolioBlock card={node} key={index}/>
					: ''
				))} 
			</StyledPortfolioGrid>
		)
	}
}

const StyledPortfolioGrid = styled.div`
	width: 100%;
	display: block;

	${functions.phoneBreak(`
		display: flex;
		flex-wrap: wrap;
	`)}

	& > * {
		flex: 1;
		min-height: 75vw;

		${functions.phoneBreak(`
			min-width: 50%;
			height: 50vw;
		`)}

		${functions.tabletBreak(`
			&:nth-child(4n-2), &:nth-child(4n-1) {
				min-width: 66.666%;
			}
		`)}

		/* ${functions.desktopBreak(`

			&:nth-child(4n-2), &:nth-child(4n-1) {
				min-width: 66.666%;
			}
		`)} */
	}

	/* & > * {
		flex: 1;
		height: 33.333vw;
		min-width: 33.333%;

		&:nth-child(4n-2), &:nth-child(4n-1) {
			min-width: 66.666%;
		}

		@media (max-width: $tablet) {
			&:nth-child(even), &:nth-child(odd) {
				min-width: 50%;
				height: 50vw;
			}
		}

		@media (max-width: $phone) {
			&:nth-child(even), &:nth-child(odd) {
				min-width: 100%;
				height: 75vw;
			}
		}
	} */

	${functions.phoneBreak(`
	
	`)}

	${functions.tabletBreak(`
	
	`)}
`