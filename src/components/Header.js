import React, { Component } from 'react';
import Link from 'gatsby-link'
import Nav from './nav'


export default class Header extends Component {
  render() {
    return (
        <header className="header">

            <a href="/" className="header__logo">
            </a>

            <Nav content={this.props.content}/>

            <div className="navicon">
                <div className="navicon--top"></div>
                <div className="navicon--middle"></div>
                <div className="navicon--bottom"></div>
            </div>

        </header>
    )
  }
}
