import React from 'react'

import styled from 'styled-components';
import styles, { colors } from '../config/styles.js';

const Hamburger = styled.div`
    align-self: stretch;
    width: 50px;
    height: auto;
    position: relative;
    margin-left: 2rem;
    display: none;

    .top, .middle, .bottom {
        display: block;
        height: .25rem;
        width: 100%;
        background-color: ${colors.white};
        position: absolute;
    }

    .top {
        top: 0;
        transform: rotate(0deg);
        transition: top ${styles.transition} ease ${styles.transition}, transform ${styles.transition} ease 0s;
    }

    .middle {
        transition: opacity 0s ease ${styles.transition};
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
    }

    .bottom {
        transition: bottom ${styles.transition} ease ${styles.transition}, transform ${styles.transition} ease 0s;
        position: absolute;
        bottom: 0;
    }

    &.open {
        .top {
            transition: top ${styles.transition} ease 0s, transform ${styles.transition} ease ${styles.transition};
            top: calc(50% - .125rem);
            transform: rotate(45deg);
        }

        .middle {
            transition: opacity 0s ease ${styles.transition};
            opacity: 0;
        }

        .bottom {
            transition: bottom ${styles.transition} ease 0s, transform ${styles.transition} ease ${styles.transition};
            bottom: calc(50% - .125rem);
            transform: rotate(-45deg);
        }
    }

`;

function toggleMobileNav() {
    document.getElementById("navicon").classList.toggle("open")
    document.getElementById("site").classList.toggle("open")
}

const Navicon = () => (
    <Hamburger className="navicon" id="navicon" 
    onClick={toggleMobileNav}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
    </Hamburger>
)

export default Navicon
