import React, { Component } from 'react'
import PortfolioCard from './portfolioCard.js'

export default class PortfolioGrid extends Component {
  render() {
    return (
      <div className="portfolio-grid">
        {this.props.portfolio.map(({ node }) => (
        <PortfolioCard card={node} />
      ))}
      </div>
    )
  }
}