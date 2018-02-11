import React, { Component } from 'react';
import Link from 'gatsby-link';

const pages = ['blog', 'about']


export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          { pages.map((page, index) =>
            <li className="nav__link" key={index}>
              <Link to={page} data-text={page} activeClassName="active">
                {page}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}