import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

import styled from 'styled-components'
import style, { colors, breaks, fonts } from '../config/styles.js';


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