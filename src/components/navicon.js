import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import { NavContext } from './layout';

import styled from 'styled-components'
import { naviconWidth, transition } from '../config/styles'

const Navicon = (props) => {

    const context = useContext(NavContext);
	const {
        toggleOffCanvas, 
	} = context;
    
    return (
        <button 
            id="navicon"
            className={props.className}
            onClick={toggleOffCanvas}
        >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </button>
    )
}

const StyledNavicon = styled(Navicon)`
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
        background-color: ${props => props.color};
        position: absolute;
    }

    &:hover,
	&:focus {
        .top, .middle, .bottom {
            background-color: ${props => props.active};
        }
    }

    .top {
        top: 0;
        transform: rotate(0deg);
        transition: top ${transition} ease ${transition}, transform ${transition} ease 0s, background-color ${transition};
    }

    .middle {
        transition: opacity 0s ease ${transition}, background-color ${transition};
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
    }

    .bottom {
        transition: bottom ${transition} ease ${transition}, transform ${transition} ease 0s, background-color ${transition};
        bottom: 0;
    }

    .site.open & {
        position: relative;
        z-index: 100;

        .top, .middle, .bottom {
            background-color: ${props => props.active};
        }

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

Navicon.propTypes = {
    color: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
};

export default StyledNavicon;