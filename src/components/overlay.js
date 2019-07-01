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

    return (
        <div 
            className={props.className}
            id="page-overlay" 
            onClick={toggleOffCanvas} 
        />
    )
}

Overlay.propTypes = {
    background: PropTypes.string.isRequired,
};

const StyledOverlay = styled(Overlay)`
        position: absolute !important;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 40;
        transition: ${transition}ms;
        opacity: 0;
        mix-blend-mode: multiply;
        ${overlays.dark}
        
        .open & {
            opacity: 1;
            pointer-events: auto;
        }
    `

export default StyledOverlay;