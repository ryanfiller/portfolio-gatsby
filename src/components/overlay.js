import React, { Component } from 'react';
import styled from 'styled-components';

import { colors, transition } from '../config/styles';

export default class Overlay extends Component {
    render() {
        return (
            <StyledOverlay className="page-overlay" onClick={this.props.toggleOffCanvas} />
        )
    }
}

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.black};
    opacity: .66;
    z-index: 40;
    transition: ${transition};
    
    &.open {
        opacity: 1;
        pointer-events: auto;
    }
`