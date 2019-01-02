import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components'
import { naviconWidth, transition } from '../config/styles'

const Navicon = (props) => {
    
    const {
        color,
        toggleOffCanvas
    } = props;

    const StyledNavicon = styled.button`
        cursor: pointer;
        background: transparent;
        padding: 0;
        border: 0;
        align-self: stretch;
        height: auto;
        position: relative !important;
        margin-left: 2rem;
        display: block;
        width: ${naviconWidth};

        .top, .middle, .bottom {
            display: block;
            height: .25rem;
            width: 100%;
            background-color: ${color};
            position: absolute;
        }
        
        .top {
            top: 0;
            transform: rotate(0deg);
            transition: top ${transition} ease ${transition}, transform ${transition} ease 0s;
        }

        .middle {
            transition: opacity 0s ease ${transition};
            top: 50%;
            transform: translateY(-50%);
            opacity: 1;
        }

        .bottom {
            transition: bottom ${transition} ease ${transition}, transform ${transition} ease 0s;
            bottom: 0;
        }

        .site.open & {
            position: relative;
            z-index: 100;

            .top {
                transition: top ${transition} ease 0s, transform ${transition} ease ${transition};
                top: calc(50% - .125rem);
                transform: rotate(45deg);
            }

            .middle {
                transition: opacity 0s ease ${transition};
                opacity: 0;
            }

            .bottom {
                transition: bottom ${transition} ease 0s, transform ${transition} ease ${transition};
                bottom: calc(50% - .125rem);
                transform: rotate(-45deg);
            }
        }
    `
    
    return (
        <StyledNavicon 
            id="navicon"
            className="navicon"
            onClick={toggleOffCanvas}
        >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </StyledNavicon>
    )
}

Navicon.propTypes = {
	color: PropTypes.string.isRequired,
	toggleOffCanvas: PropTypes.func.isRequired,
};

export default Navicon;