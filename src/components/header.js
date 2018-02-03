import React, { Component } from 'react';
import Link from 'gatsby-link'
import Socials from './socials';
import Logo from './logo'
import Nav from './nav'

export default class Header extends Component {
  render() {
    return (
        <header className="header" id="header">

        <Logo />

        <Nav/>

        <div className="navicon">
            <div className="navicon--top"></div>
            <div className="navicon--middle"></div>
            <div className="navicon--bottom"></div>
        </div>

        </header>
    )
  }
}
