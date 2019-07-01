import React from 'react'
import PropTypes from "prop-types";

import styled from 'styled-components'
import { breaks, containers, fonts, theme, transition } from '../config/styles';

import SocialsList from './socials'

const Footer = (props) => {
    const {
        color
    } = props;

    return (
        <footer id="footer" className={props.className}>
            <div className="copyright">
                Copyright 2012 - { new Date().getFullYear() }, 
                Built with <a href="https://www.gatsbyjs.org/">GatbyJS</a> and hosted on <a href="https://www.netlify.com/">Netlify</a>
            </div>
            <SocialsList 
                color={color}
                active={theme.highlight}
                oneColor={true}
            />
        </footer>
    )
}

const StyledFooter = styled(Footer)`
    background-color: ${props => props.background};
    color: ${props => props.color};
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
            transition: ${transition}ms;
            color: currentColor;
            text-decoration: none;

            &:hover {
                color: ${props => props.active};
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

Footer.propTypes = {
    color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
};

export default StyledFooter;