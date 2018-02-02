import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class PortfolioCard extends Component {
  render() {
    return (
      <Link className="portfolio-card" key={this.props.card.id}
      to={this.props.card.frontmatter.path}>
        <h3>
          {this.props.card.frontmatter.title}
        </h3>
      </Link>
    )
  }
}