import React from 'react';
import PropTypes from 'prop-types';

import rehypeReact from 'rehype-react'
import Headshot from './headshot'
import CompareImages from './compare-images'

import styled from 'styled-components';

import { animations, breaks, containers, fonts, padding, theme } from '../config/styles'

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
        'headshot': Headshot,
        'compare-images': CompareImages
    }
}).Compiler

const MarkdownBlock = (props) => {
    return (
        <article className={props.className}>
            {renderAst(props.post)}
        </article>
    )
}

MarkdownBlock.propTypes = {
    post: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired,
      ]),
};

const StyledMarkdownBlock = styled(MarkdownBlock)`
    min-height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    line-height: 1.6em;
    background: ${theme.light};
    padding-top: calc(3*${padding});
    padding-bottom: calc(2*${padding});
    ${containers.container()};
    ${containers.readable()};
    text-align: left;

    & > div {
        height: auto;
        width: 100%;
    }

    p {
        margin: 0;
        margin-bottom: ${padding};
    }

    /* TODO style header links */
    p a { /* so it doesn't grab h2 headers */
        color: ${theme.light};
        text-decoration: none;
        border-bottom: 0;
        background: ${theme.active};

        ${breaks.tablet(`
            background: transparent;
            border-bottom: 2px ${theme.active} dotted;
            ${animations.highlight(theme.active, theme.light, theme.active)};
        `)}
    }

    ol {
        list-style: none;
        counter-reset: li;
        li {
            counter-increment: li;

            &:before {
                content: counter(li);
                color: ${theme.primary};
                position: relative;
                left: -.5em;
            }
        }
    }

    ul {
        list-style: none;

        li {
            &:before {
                content: '\2022';
                color: ${theme.primary};
                position: relative;
                left: -.5em;
            }
        }
    }
    
    h2 {
        ${fonts.condensed()};
        color: ${theme.primary};
        ${fonts.sizes('1.75em', '2em, 2.25em')}
    }
    
    h3 {
        ${fonts.condensed()};
        color: ${theme.highlight};
        ${fonts.sizes('1.5em', '2em, 2.5em')}
    }
    
    h4 {
        ${fonts.sansSerif()};
        color: ${theme.highlight};
        font-weight: bold;
        ${fonts.sizes('1em', '1em, 1.5em')}
        font-size: 1.5em;
        line-height: 1.5em;
    }
    
    blockquote {
        font-size: 1.125em;
        line-height: 1.75em;
        border-left: 1.5em solid ${theme.highlight};
        padding-left: .5em;
        margin: 1em 0;
        position: relative;
        color: ${theme.highlight};
    
        &:before {
            content: '"';
            color: ${theme.light};
            position: absolute;
            font-size: 4em;
            top: 0.5em;
            left: -0.33em;
            line-height: 0;
            ${fonts.condensed()};
        }
    
        cite {
            color: ${theme.highlight};
            display: block;
            text-align: right;
            margin-top: .75em;
            font-size: .75em;
    
            &:before {
                content: '-';
                margin-right: .5em;
            }
        }
    }

    img {
        height: auto;
    }

    /* img.center */
    .image-center {
        display: block;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
    }

    .image-left, .image-right, .image-full {
        width: calc(100% + (2 * ${padding}));
        height: auto;
        margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});

        img {
            width: 100%;
        }
    }

    .image-left {
        ${breaks.phone(`
            float: left;
            margin: 0 ${padding} ${padding} calc(-1*${padding});
            width: 50%;
        `)}
    }

    .image-right {
        ${breaks.phone(`
            float: right;
            margin: 0 calc(-1*${padding}) ${padding} ${padding};
            width: 50%;
        `)}
    }

    .image-full {
        ${breaks.phone(`
            display: block;
            width: calc(100% + (2 * ${padding}));
            height: auto;
            margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});
        `)}
    }

    .image-small {
        width: 50%;

        ${breaks.tablet(`
            width: 25%;

            &.image-left {
                margin: 0 ${padding} 0 0;
            }
            &.image-right {
                margin: 0 0 ${padding} 0;
            }
        `)}

        ${breaks.desktop(`
            width: 25%;

            &.image-left {
                margin: 0;
            }
            &.image-right {
                margin: 0;
            }
        `)}
    }

    /* TODO see if it is possible to make a component out of this */
    /* https://using-remark.gatsbyjs.org/custom-components/#mapping-from-generic-html-elements */
    .gatsby-highlight {
        width: calc(100% + (2 * ${padding}));
        margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});
        
        pre {
            overflow: scroll;
        }
    }

    iframe {
        margin-bottom: ${padding};
    }

    .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
        width: calc(100% + (2 * ${padding}));
        margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    /* TODO re-style code block better */

    ${require("typeface-cutive-mono")}

    code[class*="language-"],
    pre[class*="language-"] {
        font-family: 'Cutive Mono', monospace;
        font-size: 1.125em;
        line-height: 1.5;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        /* background:#2a2734; */
        background: ${theme.active};
        /* color: #afa0fe */
        color: ${theme.primary};
    }

    code.language-text {
        background: transparent;
        color: ${theme.highlight};
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"]::selection,
    code[class*="language-"]::selection,
    code[class*="language-"]::selection,
    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection {
        text-shadow: none;
        /* background: #6a51e6; */
        background: auto;
    }

    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto
    }

    :not(pre)>code[class*="language-"] {
        padding: .1em;
        border-radius: .3em
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        /* color: #6c6783 */
        color: ${theme.light}
    }

    .token.punctuation {
        /* color: #6c6783 */
        color: ${theme.dark}
    }

    .token.namespace {
        opacity: .7
    }

    .token.tag,
    .token.operator,
    .token.number {
        /* color: #e09142 */
        color: ${theme.primary}
    }

    .token.property,
    .token.function {
        /* color: #c4b9fe */
        color: ${theme.primary};
    }

    .token.tag-id,
    .token.selector,
    .token.atrule-id {
        /* color: #eeebff */

    }

    code.language-javascript,
    .token.attr-name {
        /* color: #c4b9fe */
        color: ${theme.highlight};
    }

    code.language-css,
    code.language-scss,
    .token.boolean,
    .token.string,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .language-scss .token.string,
    .style .token.string,
    .token.attr-value,
    .token.keyword,
    .token.control,
    .token.directive,
    .token.unit,
    .token.statement,
    .token.regex,
    .token.atrule {
        /* color: #fc9 */
        color: ${theme.primary}
    }

    .token.placeholder,
    .token.variable {
        /* color: #fc9 */
        color: ${theme.primary}
    }

    .token.deleted {
        text-decoration: line-through
    }

    .token.inserted {
        /* border-bottom: 1px dotted #eeebff; */
        border-bottom: 1px dotted ${theme.light};
        text-decoration: none
    }

    .token.italic {
        font-style: italic
    }

    .token.important,
    .token.bold {
        font-weight: bold
    }

    .token.important {
        /* color: #c4b9fe */
        color: ${theme.highlight};
    }

    .token.entity {
        cursor: help
    }

    pre>code.highlight {
        /* outline: 0.4em solid #8a75f5; */
        outline: 0.4em solid ${theme.primary};
        outline-offset: .4em
    }

    .line-numbers .line-numbers-rows {
        /* border-right-color: #2c2937 */
        border-right-color: ${theme.primary};
    }

    .line-numbers-rows>span:before {
        /* color: #3c3949 */
        color: ${theme.primary};
    }

    .line-highlight {
        /* background: rgba(224, 145, 66, 0.2); */
        background: ${theme.highlight};
        /* background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0)) */
        background: linear-gradient(to right, ${theme.highlight} 70%, ${theme.highlight})

    }
`

export default StyledMarkdownBlock;