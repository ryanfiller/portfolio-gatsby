import React from 'react';

import Link from 'gatsby-link';

import styled from 'styled-components';
import { animations, fonts } from '../config/styles';

const ReadMore = (props) => {
    return(
        <div className={props.className}>
            <Link to="/portfolio/">See More Work</Link>
            <Link to="/blog/">Read More Blogs</Link>
        </div>
    )
}

const StyledReadMore = styled(ReadMore)`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light);
    background-color: var(--dark);
    font-size: 2rem;

    a {
        display: block;
        margin-bottom: var(--padding);
        ${fonts.inlineLink()}
        color: var(--light);
        ${animations.highlight('var(--light)', 'var(--light)', 'var(--active)')};

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default StyledReadMore;