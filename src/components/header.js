import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components'

import { breaks, colors, containers, navBreak } from '../config/styles';

import Logo from './logo'
import Navigation from './navigation'
import Navicon from './navicon'

export default class Header extends Component {
    render() {
        return (
            <StyledHeader className="header" id="header">
                <Logo />
                
                <MediaQuery query={`(min-width: ${navBreak}px)`}>
                    <Navigation toggleOffCanvas={this.props.toggleOffCanvas} />
                </MediaQuery>

                <MediaQuery query={`(max-width: ${navBreak}px)`}>
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
    ${containers.container()}
` 