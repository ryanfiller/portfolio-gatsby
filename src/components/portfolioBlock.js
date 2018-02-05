import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

import styled from 'styled-components'
import { colors, breaks, fonts } from '../config/styles.js';

const Block = styled.article`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: currentColor;
  background-blend-mode: luminosity; //multiply or luminosity?
  background-size: cover;
  padding: $spacing;
  
  .portfolio-block{
    &__logo {
      display: block;
      height: 50%;
      width: auto;
    }

    &__content {
        text-align: center;
        color: ${colors.white};
        max-height: 0;
        overflow: hidden;
    }
  }

  &:hover {
    .portfolio-block__content {
      max-height: 100%;
    }
    background-image:url('https://78.media.tumblr.com/a1758bfb457b4d83b6989c2e405cb748/tumblr_np564uq7sJ1ripbvlo1_500.gif');
  }

  @media only screen and (max-width: ${breaks.phone}) {
    .portfolio-block__content {
      max-height: 100%;
    }
  }
`;

export default class PortfolioBlock extends Component {
  render() {

    var color = {
      color: this.props.card.frontmatter.color,
    };

    return (
      <Block onClick={ () => navigateTo('/example')} 
      to={this.props.card.frontmatter.path}
      style={color}
      className="portfolio-block">
          <img className="portfolio-block__logo" src="../images/portfolio/steel-tek/steel-tek.svg" />
          <div className="portfolio-block__content">
            {this.props.card.frontmatter.title}

            {this.props.card.frontmatter.category}

            <span className="portfolio-block__link">
              Read More
            </span>
          </div>
      </Block>
    )
  }
}