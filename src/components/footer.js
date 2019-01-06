import React from 'react'
import styled from 'styled-components'

import { breaks, colors, containers, fonts } from '../config/styles';

import SocialsList from './socials'

const Footer = (props) => (
    <StyledFooter className="footer">
        <div className="copyright">
            Copyright 2012 - { new Date().getFullYear() }, 
            Built with <a href="https://www.gatsbyjs.org/">GatbyJS</a> and hosted on <a href="https://www.netlify.com/">Netlify</a>
        </div>
        <SocialsList />
    </StyledFooter>
)

export default Footer;

const StyledFooter = styled.footer`
    background-color: ${colors.black};
    color: ${colors.white};
    display: block;
    font-size: 1rem;

    .copyright {
        padding: .25em;
        ${containers.container()}
        ${fonts.condensed()}
        text-transform: uppercase;
        text-align: center;

        &:before {
            content: '\00a9';
            margin-right: .125em;
        }

        a {
            color: ${colors.white};
            text-decoration: none;

            &:hover {
                color: ${colors.orange};
            }
        }
    }

    ${breaks.phone(`
        display: flex;
        justify-content: space-between;
        align-items: center;

        .copyright {
            text-align: left;
        }
    `)}
`
