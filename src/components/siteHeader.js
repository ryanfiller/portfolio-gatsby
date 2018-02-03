import React, { Component } from 'react';
import Link from 'gatsby-link'

import styled from 'styled-components';
import styles, { colors } from '../config/styles.js';

import Socials from './socials';
import Logo from './logo'
import Nav from './nav'

const Header = styled.header`
    background-color: ${colors.black};
    display: flex;
    justify-conten: space-between;
    align-items: center;
    ${styles.container}
`;

export default class SiteHeader extends Component {
    render() {
        return (
            <Header className="header" id="header">
                <Logo />

                <Nav/>

                <div className="navicon">
                    <div className="navicon--top"></div>
                    <div className="navicon--middle"></div>
                    <div className="navicon--bottom"></div>
                </div>

            </Header>
        )
    }
}
