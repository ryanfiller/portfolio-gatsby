import React from 'react'
import Link from 'gatsby-link'

import Socials from './socials'

import styled from 'styled-components';
import styles, { colors, breaks, fonts } from '../config/styles.js';

const Footer = styled.footer`
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
        ${styles.container}
        ${fonts.condensed}
        font-size: 1rem;
        text-transform: uppercase;
    }

    @media only screen and (max-width: ${breaks.phone}) {
        display: block;

        .copyright {
            text-align: center;
            font-size: 1.25rem;
            padding: .25em;

            &:before {
                content: '\00a9';
                margin-right: .125em;
            }
        }
    }
    
`;

const SiteFooter = () => (
    <Footer className="footer" id="footer">
        <div className="copyright">
            Copyright 2012 - { new Date().getFullYear() }
        </div>
        <Socials />
    </Footer>
)

export default SiteFooter
