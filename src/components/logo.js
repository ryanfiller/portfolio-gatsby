import React, { Component } from 'react'
import Link from 'gatsby-link'
import SVG  from 'react-inlinesvg';

export default class Logo extends Component {
  render() {
    return (
        <Link className="rf-logo" to="/">
          <SVG src="../images/svgs/logo.svg" />
        </Link>
    )
  }
}