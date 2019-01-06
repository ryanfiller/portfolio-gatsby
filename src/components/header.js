import React from 'react';
import PropTypes from "prop-types";

import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { theme, containers, navBreak, padding } from '../config/styles';

import Logo from './logo';
import Navigation from './navigation';
import Navicon from './navicon';

 const Header = (props) => {

    const {
        color,
	    active,
	    background,
    } = props;

    const StyledHeader = styled.header`
        background-color: ${background};
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
                color={color}
                active={active}
                background={background}
            />
            
            <MediaQuery query={`(min-width: ${navBreak}px)`}>
                <Navigation 
                    color={color} 
                    active={active}
                    background={background}
                    orientation={'horizontal'}
                />
            </MediaQuery>

            <MediaQuery query={`(max-width: ${navBreak - 1}px)`}>
                <Navicon 
                    color={color}
                    active={active}
                />
            </MediaQuery>
        </StyledHeader>
    )
}

Header.propTypes = {
    color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
};

export default Header;