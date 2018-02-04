import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import styles, { colors, fonts, breaks } from '../config/styles.js';

const pages = ['blog', 'about']

const Nav = styled.nav`
  color: ${colors.white};
  flex: 1;
  
  .nav{
    &__list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: flex-end;
      
    }

    &__link {
      a {
        text-decoration: none;
        margin-left: 2rem;
        ${fonts.condensed};
        text-transform: uppercase;
        font-size: 2em;
        color: ${colors.white};
  
        &.active {
          color: ${colors.orange};
        }

        &:hover {
          color: ${colors.orange};
        }
      }
    }
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      <Nav className="nav" role="navigation">
        <ul className="nav__list">
          { pages.map((page, index) =>
            <li className="nav__link" key={index}>
              <Link to={page} data-text={page} activeClassName="active">
                {page}
              </Link>
            </li>
          )}
        </ul>
      </Nav>
    )
  }
}