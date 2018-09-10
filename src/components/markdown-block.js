import React, { Component } from 'react';
import styled from 'styled-components';

import { animations, colors, containers, fonts, functions, padding, transition } from '../config/styles'

export default class MarkdownBlock extends Component {
    render() {

        if (this.props.post) {
            return (
                <StyledMarkdown className="markdown" dangerouslySetInnerHTML={{ __html: this.props.post }} />
            )
        } else {
            return (
                <StyledMarkdown className="markdown">
                    {this.props.children}
                </StyledMarkdown>
            )
        }
    }
}

const StyledMarkdown = styled.div`
    font-size: 1.5rem;
    line-height: 1.6em;
    background: ${colors.white};
    ${containers.container()};
    ${containers.readable()};

    p {
        margin: 0;
        margin-bottom: ${padding};
    }

    p a { /* so it doesn't grab h2 headers */
        color: ${colors.black};
        text-decoration: none;
        padding: 0 .125em;
        border-bottom: 0;
        background: ${colors.orange};

        ${functions.tabletBreak(`
            background: transparent;
            border-bottom: 2px ${colors.orange} dotted;
            ${animations.highlight('currentColor', 'currentColor', colors.orange)};
        `)}
    }

    ol {
        list-style: none;
        counter-reset: li;
        li {
            counter-increment: li;

            &:before {
                content: counter(li);
                color: ${colors.blue};
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
                color: ${colors.blue};
                position: relative;
                left: -.5em;
            }
        }
    }
    
    h2 {
        ${fonts.condensed()};
        color: ${colors.blue};
        /* @include font-size(2.25em, 2em, 1.75em); */
    }
    
    h3 {
        ${fonts.condensed()};
        color: ${colors.lightGray};
        /* @include font-size(2.5em, 2em, 1.5em); */
    }
    
    h4 {
        ${fonts.sansSerif()};
        color: ${colors.gray};
        font-weight: bold;
        /* @include font-size(1.5em, 1em, 1em); */
        font-size: 1.5em;
        line-height: 1.5em;
    }
    
    blockquote {
        font-size: 1.125em;
        line-height: 1.75em;
        border-left: 1.5em solid ${colors.blue};
        padding-left: .5em;
        margin: 1em 0;
        position: relative;
    
        &:before {
            content: '"';
            color: ${colors.white};
            position: absolute;
            font-size: 4em;
            top: 0.5em;
            left: -0.33em;
            line-height: 0;
            ${fonts.condensed()};
        }
    
        cite {
            color: ${colors.gray};
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

    img.center {
        display: block;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
    }

    img.left, figure.left {
        float: left;
        margin: 0 ${padding} ${padding} calc(-1*${padding});
        width: 50%;
    }

    img.right, figure.right {
        float: right;
        margin: 0 calc(-1*${padding}) ${padding} ${padding};
        width: 50%;
    }

    img.full {
        display: block;
        width: calc(100% + (2 * ${padding}));
        height: auto;
        margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});
    }

    img.left, img.right, img.full {
        @include phone-break {
            width: calc(100% + (2 * ${padding}));
            height: auto;
            margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});
        }
    }

    img.small {
        width: 25%;
        @include desktop-break {
            &.left {
                margin-left: 0;
            }
            &.right {
                margin-right: 0;
            }
        }
        @include tablet-break {
            width: 25%;
            &.left {
                margin: 0 ${padding} 0 0;
            }
            &.right {
                margin: 0 0 ${padding} 0;
            }
        }

        @include phone-break {
            width: 50%;
        }
    }

    figure.compare {
        position: relative;

        img {
            width: 100%;
            display: block;

            &:first-child {
                position: absolute;
                opacity: 0;
                transition: ${transition};
            }

            &:last-child {
                opacity: 1;
                transition: ${transition};
            }
        }

        &:hover {
            img {

                &:first-child {
                    opacity: 1;
                }

                &:last-child {
                    opacity: 0;
                }
            }

        }

        figcaption {
            background-color: ${colors.gray};
            font-size: .75em;
            padding: .125em;
            text-align: center;
            color: ${colors.white};
            &:after {
                content: ' (Hover)';
            }
        }

        /* @include tablet-break {
            width: calc(100% + (2 * ${padding}));
            height: auto;
            margin: 0 calc(-1*${padding}) ${padding} calc(-1*${padding});
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;

            img, img:first-child {
                position: initial;
                width: 50%;
                height: 50vw;
                opacity: 1;
                transition: 0s;
            }

            figcaption {
                width: 100%;
                &:after {
                    display: none;
                }
            }
        } */
    }

    pre {
        width: calc(100% + (2 * ${padding}));
        margin: 0 calc(-1*${padding}) ${padding}g calc(-1*${padding});
        padding: ${padding};
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

    ${require("typeface-ibm-plex-mono")}

    code[class*="language-"],
    pre[class*="language-"] {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1em;
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
        background: ${colors.darkGray};
        /* color: #afa0fe */
        color: ${colors.white};
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection {
        text-shadow: none;
        /* background: #6a51e6; */
        background: ${colors.blue};
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"]::selection,
    code[class*="language-"]::selection,
    code[class*="language-"]::selection {
        text-shadow: none;
        /* background: #6a51e6; */
        background: ${colors.blue};
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
        color: ${colors.lightGray}
    }

    .token.punctuation {
        /* color: #6c6783 */
        color: ${colors.lightGray}
    }

    .token.namespace {
        opacity: .7
    }

    .token.tag,
    .token.operator,
    .token.number {
        /* color: #e09142 */
        color: ${colors.orange}
    }

    .token.property,
    .token.function {
        /* color: #c4b9fe */
        color: ${colors.white};
    }

    .token.tag-id,
    .token.selector,
    .token.atrule-id {
        color: #eeebff
    }

    code.language-javascript,
    .token.attr-name {
        /* color: #c4b9fe */
        color: ${colors.white};
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
        color: ${colors.orange}
    }

    .token.placeholder,
    .token.variable {
        /* color: #fc9 */
        color: ${colors.orange}
    }

    .token.deleted {
        text-decoration: line-through
    }

    .token.inserted {
        /* border-bottom: 1px dotted #eeebff; */
        border-bottom: 1px dotted ${colors.white};
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
        color: ${colors.white};
    }

    .token.entity {
        cursor: help
    }

    pre>code.highlight {
        /* outline: 0.4em solid #8a75f5; */
        outline: 0.4em solid ${colors.blue};
        outline-offset: .4em
    }

    .line-numbers .line-numbers-rows {
        /* border-right-color: #2c2937 */
        border-right-color: ${colors.lightGray};
    }

    .line-numbers-rows>span:before {
        /* color: #3c3949 */
        colors: ${colors.lightGray};
    }

    .line-highlight {
        /* background: rgba(224, 145, 66, 0.2); */
        background: ${colors.orange};
        /* background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0)) */
        background: linear-gradient(to right, ${colors.orange} 70%, ${colors.orange})

    }
`