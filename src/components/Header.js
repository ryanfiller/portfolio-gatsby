import React, { Component } from 'react';
import Link from 'gatsby-link'
import Socials from './socials';
import Logo from './logo'
import Nav from './nav'

export default class Header extends Component {
  render() {
    return (
        <header className="header">

            <div className="header__pre">
                <Socials />
            </div>

            <div className="header__main">
            <Logo />

                <Nav content={this.props.content}/>

                <div className="navicon">
                    <div className="navicon--top"></div>
                    <div className="navicon--middle"></div>
                    <div className="navicon--bottom"></div>
                </div>
            </div>

        </header>
    )
  }
}
