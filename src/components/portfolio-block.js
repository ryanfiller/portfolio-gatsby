import React, { Component } from 'react'
import Link from 'gatsby-link'

import ContentMeta from './content-meta'


export default class PortfolioBlock extends Component {
  render() {

    var color = {
      color: this.props.card.frontmatter.color,
    };

    return (
      <Link to={this.props.card.frontmatter.path} 
      href={this.props.card.frontmatter.path}
      style={color}
      className="portfolio-block">
          <div className="portfolio-block__logo">
            <img src={this.props.card.frontmatter.logowhite} />
          </div>
          <div className="portfolio-block__content">
            <h2 className="portfolio-block__title">
              {this.props.card.frontmatter.title}
            </h2>
            <ContentMeta 
            category={this.props.card.frontmatter.category} 
            tags={this.props.card.frontmatter.tags} 
            />
            <span className="portfolio-block__link">
              Read More
            </span>
          </div>
      </Link>
    )
  }
}