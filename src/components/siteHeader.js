import React, { Component } from 'react';
import Link from 'gatsby-link'

import styled from 'styled-components';
import styles, { colors, breaks } from '../config/styles.js';

import RfLogo from './rfLogo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = styled.header`
    background-color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    ${styles.container}

    .logo {
        max-width: 20rem;
    }

    @media only screen and (max-width: ${breaks.phone}) {
        .nav {
            display: none;
        }
        
        .navicon {
            display: block;
        }
    }
`;

export default class SiteHeader extends Component {
    render() {
        return (
            <Header className="header" id="header">
                <RfLogo />
                <Navigation />
                <Navicon />
            </Header>
        )
    }
}
