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
	min-height: 100%;
	display: block;

	${functions.phoneBreak(`

		display: flex;
		flex-wrap: wrap;

		& > * {
			width: 50%;
		}

		@supports(display: grid) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;

			& > * {
				width: 100%;
			}
		}
	`)}

	${functions.tabletBreak(`
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