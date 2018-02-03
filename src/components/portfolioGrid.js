import React, { Component } from 'react'
import PortfolioBlock from './portfolioBlock.js'

export default class PortfolioGrid extends Component {
  render() {
    return (
      <div className="portfolio-grid">
        {this.props.portfolio.map(({ node }) => (
        <PortfolioBlock card={node} />
      ))}
      </div>
    )
  }
}