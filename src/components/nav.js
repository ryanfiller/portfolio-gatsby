import React, { Component } from 'react';
import Link from 'gatsby-link'

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          {console.log(this.props.content)}
          {Array.from(this.props.content).map(({node}, index) =>
            <li className="nav__link">
              <Link key={index} to={node.frontmatter.title}>
                {node.frontmatter.title}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}