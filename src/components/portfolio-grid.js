import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class PortfolioGrid extends Component {
  render() {
    return (
      <div className="portfolio-grid">
        {this.props.portfolio.map(({ node }) => (
        <Link className="portfolio-grid-block" key={node.id}to={node.frontmatter.path}>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
          </Link>
      ))}
      </div>
    )
  }
}