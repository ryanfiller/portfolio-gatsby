import React, { Component } from 'react'

import styled from 'styled-components'
import { breaks } from '../config/config';

import PortfolioBlock from './portfolio-block.js'

export default class PortfolioGrid extends Component {
	render() {

		const { currentCategory } = this.props;

		return (
			<StyledPfolioGrid className="portfolio-grid">
				{this.props.portfolio.map(({ node }, index) => (
					currentCategory === 'all' || node.frontmatter.category.includes(currentCategory) ?
						<PortfolioBlock card={node} key={index}/>
					: ''
				))} 
			</StyledPfolioGrid>
		)
	}
}

const StyledPfolioGrid = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	& > * {
		flex: 1;
		height: 33.333vw;
		min-width: 33.333%;

		&:nth-child(4n-2), &:nth-child(4n-1) {
			min-width: 66.666%;
		}

		@media (max-width: ${breaks.tablet}px) {
			&:nth-child(even), &:nth-child(odd) {
				min-width: 50%;
				height: 50vw;
			}
		}

		@media (max-width: ${breaks.phone}px) {
			&:nth-child(even), &:nth-child(odd) {
				min-width: 100%;
				height: 75vw;
			}
		}
	}

	.horizontal & {
		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
				height: 100vh;
				width: auto;
				display: grid;
				grid-auto-flow: row;
				grid-template-columns: repeat(auto-fill, 50vh);
				grid-template-rows: 50vh 50vh;
				overflow-x: scroll;

				& > * {
					width: 100vh;
					height: 50vh;
					grid-column-end: span 2;

					&:first-child, &:last-child {
						width: 50vh;
						grid-column-end: span 1;
					}

					&:nth-child(odd) {
						grid-row-start: 1;
						grid-row-end: 2;
					}

					&:nth-child(even) {
						grid-row-start: 2;
						grid-row-end: 3;
					}
				}
			}
		}
	}
`