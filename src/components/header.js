import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'gatsby-link'

import { breaks } from '../config/config';

import Logo from './logo'
import Navigation from './navigation'
import Navicon from './navicon'

export default class Header extends Component {
    render() {
        return (
            <header className="header" id="header">
                <Logo />
                
                <MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
                    <Navigation toggleOffCanvas={this.props.toggleOffCanvas} navigateAndClose={this.props.navigateAndClose} />
                </MediaQuery>

                <MediaQuery query={`(max-width: ${breaks.tablet}px)`}>
                    <Navicon toggleOffCanvas={this.props.toggleOffCanvas} />
                </MediaQuery>
            </header>
        )
    }
}