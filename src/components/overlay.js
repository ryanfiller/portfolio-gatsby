import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NavContext } from './layout';

import styled from 'styled-components';
import { overlays, transition } from '../config/styles';

const Overlay = (props) => {

    const context = useContext(NavContext);
	const {
        toggleOffCanvas, 
	} = context;

    const {
        background
    } = props;

    const StyledOverlay = styled.div`
        /* TODO use an include here */
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
};

export default Overlay;