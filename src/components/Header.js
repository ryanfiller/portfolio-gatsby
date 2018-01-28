import React, { Component } from 'react';
import Link from 'gatsby-link'
import Logo from './logo'
import Nav from './nav'


export default class Header extends Component {
  render() {
    return (
        <header className="header">

            <Logo />

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
