import React, { Component } from 'react';
import Link from 'gatsby-link'

const pages = ['work', 'blog', 'about', 'contact']

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          {pages.map((page, index) =>
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