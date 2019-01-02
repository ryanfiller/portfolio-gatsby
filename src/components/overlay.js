import React, { Component } from 'react';
import PropTypes from "prop-types";

import styled from 'styled-components';
import { transition } from '../config/styles';

const Overlay = (props) => {

    const {
        background,
        toggleOffCanvas
    } = props;

    const StyledOverlay = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${background};
        opacity: .75;
        z-index: 40;
        transition: ${transition};

        @supports (mix-blend-mode: multiply) {
            opacity: 1;
            mix-blend-mode: multiply;
        }
        
        &.open {
            opacity: 1;
            pointer-events: auto;
        }
    `

    return (
        <StyledOverlay 
            className="page-overlay" 
            onClick={toggleOffCanvas} 
        />
    )
}

Overlay.propTypes = {
    background: PropTypes.string.isRequired,
    toggleOffCanvas: PropTypes.func.isRequired
};

export default Overlay;