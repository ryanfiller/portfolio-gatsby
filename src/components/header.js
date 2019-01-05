import React from 'react';
import PropTypes from "prop-types";

import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { theme, containers, navBreak, padding } from '../config/styles';

import Logo from './logo';
import Navigation from './navigation';
import Navicon from './navicon';

 const Header = (props) => {

    const StyledHeader = styled.header`
        background-color: ${theme.dark};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: calc(${padding} / 2);
        font-size: 2rem;
        ${containers.container()}
    ` 

    return (
        <StyledHeader className="header" id="header">
            <Logo 
                color={theme.light}
                active={theme.active}
                background={theme.dark}
            />
            
            <MediaQuery query={`(min-width: ${navBreak}px)`}>
                <Navigation 
                    color={theme.light} 
                    active={theme.active}
                    background={theme.dark}
                    orientation={'horizontal'}
                />
            </MediaQuery>

            <MediaQuery query={`(max-width: ${navBreak - 1}px)`}>
                <Navicon 
                    color={theme.light}
                />
            </MediaQuery>
        </StyledHeader>
    )
}

Header.propTypes = null;

export default Header;