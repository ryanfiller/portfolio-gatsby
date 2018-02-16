import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

const pages = ['blog', 'about', 'contact']

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          { pages.map((page) =>
            {if(page != 'contact'){
              return(<li className="nav__link" key={page}>
                <Link to={page} data-text={page} activeClassName="active">
                  {page}
                </Link>
              </li>)
            } else {
              return(<li className="nav__link" key={page}>
                <a href="#contact-form" data-text={page} id={page} onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} >
                  {page}
                </a>
              </li>)
            }}
          )}
        </ul>
      </nav>
    )
  }
}