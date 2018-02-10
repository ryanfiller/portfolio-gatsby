import React, { Component } from 'react'
import PortfolioBlock from './portfolioBlock.js'

import styled from 'styled-components'
import { breaks } from '../config/styles.js';

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 1;
    height: 33.333vw;
    
    min-width: 33.333%;
    &:nth-child(4n-2), &:nth-child(4n-1) {
      min-width: 66.666%;
    }

    @media only screen and (max-width: ${breaks.tablet}) {
      &:nth-child(even), &:nth-child(odd) {
        min-width: 50%;
      }
    }

    @media only screen and (max-width: ${breaks.phone}) {
      &:nth-child(even), &:nth-child(odd) {
        min-width: 100%;
      }
    }
  }
`;

export default class PortfolioGrid extends Component {
  render() {
    return (
      <Grid className="portfolio-grid">
        {this.props.portfolio.map(({ node }, index) => (
        <PortfolioBlock card={node} key={index}/>
      ))}
      </Grid>
    )
  }
}