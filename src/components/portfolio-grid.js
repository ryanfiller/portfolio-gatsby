import React, { Component } from 'react'
import PortfolioBlock from './portfolio-block.js'


export default class PortfolioGrid extends Component {
  render() {
    return (
      <div className="portfolio-grid">
        {this.props.portfolio.map(({ node }, index) => (
         <PortfolioBlock card={node} key={index}/>
        ))} 
      </div>
    )
  }
}