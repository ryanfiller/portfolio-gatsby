import React, { Component } from 'react'

import PortfolioBlock from './portfolio-block.js'

export default class PortfolioGrid extends Component {
	render() {

		const { currentCategory } = this.props;

		return (
			<div className="portfolio-grid">
				{this.props.portfolio.map(({ node }, index) => (
					currentCategory === 'all' || node.frontmatter.category.includes(currentCategory) ?
						<PortfolioBlock card={node} key={index}/>
					: ''
				))} 
			</div>
		)
	}
}