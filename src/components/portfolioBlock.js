import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

import styled from 'styled-components'
import style, { colors, breaks, fonts } from '../config/styles.js';

const Block = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: currentColor;
  background-position: center center;
  background-blend-mode: luminosity; //multiply or luminosity?
  background-size: cover;
  padding: ${style.padding};
  box-sizing: border-box;
  text-decoration: none;
  
  .portfolio-block{
    &__logo {
      flex: 1;
      width: 100%;
      padding: 0 ${style.padding};
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        display: block;
        max-width: 30vw;
        max-height: 15vw;
      }
    }

    &__content {
        text-align: center;
        color: ${colors.white};
        max-height: 0;
        overflow: hidden;
        transition: .4s;
    }

    &__title {
      ${fonts.condensed};
      text-transform: uppercase;
      text-align: center;
      line-height: 1em;
      margin: 0;
      margin-bottom: ${style.padding}/2;
    }

    &__meta {
      font-size: 1.25em;
      line-height: 1.125em;
      display: block;
      margin-bottom: ${style.padding}/2;

      span {
          display: inline-block;
      }
    }
  }

  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-image: url('images/site-assets/screendoor.png');
    background-position: center center;
    z-index: 1;
    opacity: 0;
    transition: 0;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    .portfolio-block__content {
      max-height: 100%;
    }
    /* background-image:url('https://media2.giphy.com/media/9CffOPMLx0Hf2/giphy.gif');     */
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

    let tags;
    if(this.props.card.frontmatter.tags != null){
      tags = this.props.card.frontmatter.tags.map(function(name, index){
        return <span className="tag" key={ index }>{name}</span>;
      })
    }

    return (
      <Block onClick={ (e) => (e.preventDefault(), navigateTo(this.props.card.frontmatter.path))} 
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
            <div className="meta">
              {this.props.card.frontmatter.category}  
              {tags}       
            </div>
            <span className="portfolio-block__link">
              Read More
            </span>
          </div>
      </Block>
    )
  }
}