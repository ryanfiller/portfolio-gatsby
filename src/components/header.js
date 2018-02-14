import React, { Component } from 'react';
import Link from 'gatsby-link'

import Logo from './logo'
import Navigation from './navigation'
import Navicon from './navicon'

export default class Header extends Component {
    render() {
        return (
            <header className="header" id="header">
                <Logo />
                <Navigation toggleOffCanvas={this.props.toggleOffCanvas} />
                <Navicon toggleOffCanvas={this.props.toggleOffCanvas} />
            </header>
        )
    }
}
