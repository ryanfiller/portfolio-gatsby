import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'



export default class PortfolioFilter extends Component {
  render() {
    return (
      <div>
          {this.props.categories.map(({ node }, index) => (
          <div key={index}>
            {node.frontmatter.category}
          </div>
        ))}
      </div>
    )
  }
}