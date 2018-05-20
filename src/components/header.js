import React, { Component } from 'react';
import Link from 'gatsby-link'

import MediaQuery from 'react-responsive';
import { breaks, colors, container } from '../config/config';

import Logo from './logo'
import Navigation from './navigation'
import Navicon from './navicon'

import styled from 'styled-components';

const StyledHeader = styled.header`
    /* ${ container() } */
`;

// .header {
//     background-color: $color-black;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     font-size: 2rem;

//     .rf-logo {
//         font-size: 1em;

//         @include tablet-break {
//             font-size: .65em;
//         }

//         @include phone-break {
//             font-size: 1em;
//         }
//     }
// }

export default class Header extends Component {
    render() {
        return (
            <StyledHeader className="header" id="header">
                <Logo />
                
                <MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
                    <Navigation toggleOffCanvas={this.props.toggleOffCanvas} />
                </MediaQuery>

                <MediaQuery query={`(max-width: ${breaks.tablet}px)`}>
                    <Navicon toggleOffCanvas={this.props.toggleOffCanvas} />
                </MediaQuery>
            </StyledHeader>
        )
    }
}
