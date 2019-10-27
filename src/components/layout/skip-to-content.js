import React from 'react';

import styled from 'styled-components';
import { fonts } from '../../config/styles';

// todo tabs are generally broken in firefox

const SkipToContent = (props) => {
    return(
        <a className={props.className} href="#content" tabIndex="1">
            Skip to Content
        </a>
    )
}

const StyledSkipToContent = styled(SkipToContent)`
    display: block;
    transition: var(--transitionSpeed);
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 1.5rem;
    padding: 0 .5rem;
    text-align: center;
    background: var(--highlight);
    color: var(--light);
    ${fonts.condensed};
    text-decoration: none;
    text-transform: uppercase;

    &:focus {
        padding: .5rem;
        max-height: 100%;
    }
`

export default StyledSkipToContent;