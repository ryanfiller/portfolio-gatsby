import React from 'react'

import styled from 'styled-components'

import { colors, navBreak } from '../config/styles'

// TODO fiiix meee

export default (props) => {
	return (
		<StyledCompareImages className={`image-compare ${props.alignment}`}>
            {props.children}
            <figcaption>
                {props.caption}
            </figcaption>
        </StyledCompareImages>
        
	)
}

const StyledCompareImages = styled.figure`
    position: relative;
    width: calc(100% + (2 * var(--padding)));
    margin: 0 calc(-1*var(--padding)) var(--padding) calc(-1*var(--padding));
    display: flex;
    flex-wrap: wrap;

    &.left {
        width: 50%;
        float: left;
        margin: 0 var(--padding) var(--padding) calc(-1*var(--padding));
    }

    &.right {
        width: 50%;
        float: right;
        margin: 0 calc(-1*var(--padding)) var(--padding) var(--padding);
    }

    .gatsby-resp-image-wrapper {
        width: 50%;
        max-width: none !important;
        display: block;

        img {
            width: 100%;
        }
    }

    figcaption {
        width: 100%;
        background-color: ${colors.gray};
        font-size: .75em;
        padding: .125em;
        text-align: center;
        color: ${colors.white};

        &:after {
            content: ' (Hover)';
        }
    }

    @media (min-width: ${navBreak}px) {
        .gatsby-resp-image-wrapper {
            width: 100%;

            &:nth-child(1) {
                opacity: 1;
                transition: var(--transitionSpeed);
                z-index: 2;
            }

            &:nth-child(2) {
                position: absolute !important;
                top: 0;
                left: 0;
                z-index: 1;
            }
        }

        &:hover {
            .gatsby-resp-image-wrapper {
                &:nth-child(1) {
                    opacity: 0;
                }
            }
        }
    }
`