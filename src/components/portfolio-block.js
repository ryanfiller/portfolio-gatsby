import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Link from 'gatsby-link'
import { default as SVG } from 'react-inlinesvg'

import styled from 'styled-components'
import { animations, breaks, fonts, overlays, padding, theme, transition } from '../config/styles'

import ContentMeta from './content-meta'

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const PortfolioBlock = (props) => {

    const frontmatter = props.frontmatter;

    const [hovering, setHovering] = useState(false);

    const style = {
        backgroundImage: hovering ? "url(" + frontmatter.thumbnail.url + ")" : null,
    }

    const Logo = (props) => {
        if (props.logo.white) {
            return (
                <SVG src={props.logo.white} />
            )
        } else {
            return (
                <SVG className='white' src={props.logo.color} />
            )
        } 
    }

    return (
        <Link to={props.fields.slug}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={style}
            className={`${props.className} portfolio-block`}
        >
            <div className="logo">
                <Logo logo={frontmatter.client.logo} />
            </div>
            <div className="content">
                <h2 className="title">
                    {frontmatter.title}
                </h2>
                <ContentMeta {...frontmatter.meta}/>
                <span className="link">
                    Read More
                </span>
            </div>
        </Link>
    )
}

PortfolioBlock.propTypes = {
    fields: PropTypes.object.isRequired,
    frontmatter: PropTypes.object.isRequired,
};

const StyledPortfolioBlock = styled(PortfolioBlock)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center center;
    background-blend-mode: luminosity; //multiply or luminosity?
    background-size: cover;
    padding: ${padding};
    text-decoration: none;
    position: relative;
    overflow: hidden;

    ${props => (`
        background-color: ${props.backgroundColor};
        &:hover {
            background-color: ${theme.highlight};
        }
    `)}

    ${overlays.pixels}
    ${overlays.dark}

    transform-origin: center center;

    .logo {
        flex: 1;
        width: 100%;
        padding: 0 ${padding};
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        backface-visibility: hidden;
        transition: ${transition}ms;
        transition-timing-function: steps(4, end);

        svg {
            width: 100%;
            height: 100%;
            display: block;
            max-height: 100%;
            max-width: 75%;

            ${breaks.phone(`
                max-width: 30vw;
                max-height: 15vw;
            `)}
        }

        .white {
            svg, 
            svg * {
                fill: white;
            }
        }
    }

    .content {
        text-align: center;
        color: ${theme.light};
        max-height: 100%;
        overflow: hidden;
        transition: ${transition}ms;
        font-size: 1rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateX(180deg);
        backface-visibility: hidden;
        transition-timing-function: steps(4, end);

        ${breaks.tablet(`
            // max-height: 0;
            font-size: 1.5rem;
        `)}
    }

    .title {
        ${fonts.condensed()}
        text-transform: uppercase;
        text-align: center;
        line-height: 1em;
        margin: calc(${padding}/2) 0;

        &:hover {
            ${animations.highlight(theme.active, theme.light, theme.active)};
        }
    }

    .meta {
        line-height: 1.125em;
        display: block;
        margin-bottom: calc(${padding}/2);

        span {
            display: inline-block;
        }
    }

    .link {
        ${fonts.inlineLink};

        &:hover {
            ${animations.highlight(theme.active, theme.light, theme.active)};
        }
    }
	
    &:before {
        opacity: 0;
        transition: 0s;
    }

    &:hover, &:focus {  
        cursor: pointer; 
        &:before {
            opacity: .5;
        }
        .logo {
            transform: translate(-50%, -50%) rotateX(180deg);
        }
        .content {
            transform: translate(-50%, -50%);
        }
    }
`

export default StyledPortfolioBlock;