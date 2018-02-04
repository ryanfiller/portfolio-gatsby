import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import styles, { colors, fonts } from '../config/styles.js';

const pages = ['blog', 'about']

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          { pages.map((page, index) =>
            <li className="nav__link" key={index}>
              <Link to={page}>
                {page}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}