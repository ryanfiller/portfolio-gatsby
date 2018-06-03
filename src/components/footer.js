import React from 'react'
import Link from 'gatsby-link'

import Socials from './socials'

import { breaks, colors, fonts, container } from '../config/config';

import styled from 'styled-components';


const Footer = () => (
    <StyledFooter className="footer">
        <div className="copyright">
            Copyright 2012 - { new Date().getFullYear() }, 
            Built with <a target="_blank" href="https://www.gatsbyjs.org/">GatbyJS</a> and <a target="_blank" href="https://www.netlifycms.org/">NetlifyCMS</a>
        </div>
        <Socials />
    </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
        ${container}
        ${fonts.condensed};
        font-size: 1rem;
        text-transform: uppercase;

        a {
            color: ${colors.white};
            text-decoration: none;

            &:hover {
                color: ${colors.orange};
            }
        }
    }

    @media (max-width: ${breaks.phone}px) {
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

    .horizontal & {
		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
                display: block;
                text-align: center;

                .copyright {
                    margin-bottom: 1em;
                }
            }
        }
    }
`
