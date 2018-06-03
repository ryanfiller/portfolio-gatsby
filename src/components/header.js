import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'gatsby-link'

import { breaks, colors, container } from '../config/config';

import Logo from './logo'
import Navigation from './navigation'
import Navicon from './navicon'

import styled from 'styled-components';

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

const StyledHeader = styled.header`
    background-color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
    ${container() }

    .horizontal & {
		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
                flex-wrap: wrap;
                justify-content: center;
                align-items: space-around;
            }
        }
    }
`;