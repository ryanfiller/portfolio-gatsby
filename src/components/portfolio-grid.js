import React, { Component } from 'react'

import PortfolioBlock from './portfolio-block.js'

export default class PortfolioGrid extends Component {
	render() {

		const { portfolio, currentCategory } = this.props;

		return (
			<div className="portfolio-grid">
				{portfolio.map(({ node }, index) => (
					<div>
						asdfasdf
					</div>
					// currentCategory === 'all' || node.frontmatter.category.includes(currentCategory) ?
					// 	<PortfolioBlock card={node} key={index}/>
					// : ''
				))} 
			</div>
		)
	}
}