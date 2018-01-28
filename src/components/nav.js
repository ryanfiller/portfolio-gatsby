import React, { Component } from 'react';
import Link from 'gatsby-link'

export default class Nav extends Component {
  render() {
    return (
      <ul>
        {console.log(this.props.content)}
        {Array.from(this.props.content).map(({node}, index) =>
            <Link className="link" 
            key={index}
            to={node.frontmatter.title}>
              {node.frontmatter.title}
            </Link>
          )}
      </ul>
    )
  }
}