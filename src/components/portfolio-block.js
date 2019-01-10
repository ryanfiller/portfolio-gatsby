import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Link from 'gatsby-link'

import styled from 'styled-components'
import { arrows, breaks, fonts, overlays, padding, theme, transition } from '../config/styles'

import ContentMeta from './content-meta'

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const PortfolioBlock = (props) => {

    const frontmatter = props.frontmatter;

    const [hovering, setHovering] = useState(false);

    // TODO maybe remove color?
    const style = {
        color: frontmatter.color,
        backgroundImage: hovering ? "url(" + frontmatter.backgroundgif.publicURL + ")" : null,
    }

    return (
        <Link to={props.fields.slug}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={style}
            className={`${props.className} portfolio-block`}
        >
            <div className="logo">
                <img src={frontmatter.logowhite.publicURL} alt="TODO" />
            </div>
            <div className="content">
                <h2 className="title">
                    {frontmatter.title}
                </h2>
                <ContentMeta
                    category={frontmatter.category}
                    tags={frontmatter.tags}
                />
                <span className="link">
                    Read More
                </span>
            </div>
        </Link>
    )
}

PortfolioBlock.propTypes = {
    // background: PropTypes.string.isRequired,
};

const StyledPortfolioBlock = styled(PortfolioBlock)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: currentColor;
    background-position: center center;
    background-blend-mode: luminosity; //multiply or luminosity?
    background-size: cover;
    padding: ${padding};
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &:nth-child(4n+1) {
        background-color: ${theme.primary};
    }

    &:nth-child(4n+2) {
        background-color: ${theme.highlight};
    }

    &:nth-child(4n+3) {
        background-color: ${theme.active};
    }

    &:nth-child(4n+4) {
        background-color: ${theme.dark};
    }

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
        transition: ${transition};

        img {
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
    }

    .content {
        text-align: center;
        color: ${theme.light};
        max-height: 100%;
        overflow: hidden;
        transition: ${transition};
        font-size: 1rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateX(180deg);
        backface-visibility: hidden;

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
        ${fonts.sansSerif()}
        ${arrows()}
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