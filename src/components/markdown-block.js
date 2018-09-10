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

    a {
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
`