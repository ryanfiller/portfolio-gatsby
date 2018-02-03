import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Logo extends Component {
  render() {
    return (
      <Link className="link"
        className="header__logo" 
        to="/">
           <img src="../images/svgs/logo.svg" />
        </Link>
    )
  }
}