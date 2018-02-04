import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';

import styled from 'styled-components';
import config from '../config/site-info';
import styles, { colors, breaks } from '../config/styles.js';

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
  }

  .social {
    width: 1.75rem;
    display: block;

    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      background: currentColor;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin-top: 100%;
      transition: ${styles.transition};

      @media only screen and (max-width: ${breaks.tablet}) {
        display: none;
      }
    }

    &:hover:after {
      margin-top: 0;
    }

    @media only screen and (max-width: ${breaks.phone}) {
      flex: 1;
      width: auto;
    }
  }

  svg {
    fill: ${colors.white};
    display: block;
    height: auto;
    width: 100%;
    position: relative;
    z-index: 2;

    @media only screen and (max-width: ${breaks.tablet}) {
      fill: currentColor;
    }
  }
`;


export default class Socials extends Component {


  render() {
    
    return (
      <List className="socials">
        {config.socialMedia.map((social) =>
          <li key={social.name}>
            <a 
            className={`social social--${social.name.toLowerCase()}`}
            key={social.name} 
            href={social.url}
            target="_blank"
            style={{color: social.color}}
            >
              <SVG src={`../images/svgs/socials/${social.name.toLowerCase()}.svg`}/>
            </a>
          </li>
        )}
      </List> 
    )
  }
}