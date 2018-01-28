import React from 'react'
import Link from 'gatsby-link'
import Nav from './nav'

const Header = () => (
  <header className="header">

    <a href="/" className="header__logo">
    </a>

    <Nav />

    <div className="navicon">
        <div className="navicon--top"></div>
        <div className="navicon--middle"></div>
        <div className="navicon--bottom"></div>
    </div>

    </header>
)

export default Header
