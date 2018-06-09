import React, { Component } from 'react';

import { colors } from '../config/config';

import styled from 'styled-components';

export default class Overlay extends Component {
    render() {
        return (
            <StyledOverlay className="mobile-nav-overlay" onClick={this.props.toggleOffCanvas} />

        )
    }
}

const StyledOverlay = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.black};
    opacity: .5;
    z-index: 40;
    
    &.open {
        opacity: 1;
        pointer-events: auto;
    }
`;