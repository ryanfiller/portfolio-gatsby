import React from 'react';
import PropTypes from "prop-types";

import Img from 'gatsby-image'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { animations, fonts, padding, transition, theme } from '../config/styles'

import Image from './mdx/image'
import ContentMeta from './content-meta'

const BlogPreview = (props) => {

    const {
        thumbnail,
        title,
        meta
    } = props.frontmatter

    const frontmatter = props.frontmatter;
    
    return (
        <article className={`${props.className} blog-preview`}>
            {thumbnail ? 
                <Link to={props.fields.slug}>
                    <Image
                        src={thumbnail.url}
                        alt={thumbnail.alt}
                    />
                </Link>
            : null}
            <div className="content">
                <header className="header">
                    <Link to={props.fields.slug} className="header__text">
                        {title}
                    </Link>
                </header>
                <span className="date">
                    {meta.date}
                </span>
                <p className="excerpt">
                    {meta.excerpt}
                </p>
                <ContentMeta
                    category={meta.category}
                    tags={meta.tags}
                />
                <Link to={props.fields.slug} className="link">
                    Read More
                </Link>
            </div>
        </article>
    )
}

BlogPreview.propTypes = {
    fields: PropTypes.object.isRequired,
    frontmatter: PropTypes.object.isRequired,
};

const StyledBlogPreview = styled(BlogPreview)`
    font-size: 1.5rem;
    transition: ${transition}ms;
    text-decoration: none;
    padding: ${padding};

    display: flex;
    flex-direction: column;
    justify-content: center;

    .content {
        position: relative;
    }

    ${Image} {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
    }

    .header {
        display: block;
        font-size: 1.5em;
        margin-right: 2.75em;
        
        &__text {
            display: inline;
            font-size: 1em;
            line-height: 1.125em;
            text-align: left;
            ${fonts.sanSerif}
            text-decoration: none;
            color: currentColor;
            ${animations.highlight(theme.active, theme.light, theme.active)};
        }
    }

    .date {
        text-transform: uppercase;
        ${fonts.condensed}
        font-size: 1em;
        line-height: 1em;
        position: absolute;
        top: .80rem;
        right: 0rem;
        color: ${theme.disabled};
    }

    .excerpt {
        ${fonts.sanSerif}
        font-size: 1em;
        margin: 1rem 0;
        color: ${theme.dark};
    }

    ${ContentMeta} {
        font-size: .8em;
        ${fonts.condensed}
        margin: 1.5rem 10em 1rem 0;
        color: ${theme.disabled};
    }

    .link {
        color: currentColor;
        ${animations.highlight(theme.active, theme.light, theme.active)};
        ${fonts.inlineLink}
        position: absolute;
        right: 0;
        bottom: 0;
    }

    ${props => (props.backgroundColor ? `
        background-color: ${props.backgroundColor};

        * {
            color: ${theme.light} !important;
        }

        &:hover {
            background-color: ${theme.highlight};
        }
    ` : null)}
`

export default StyledBlogPreview;