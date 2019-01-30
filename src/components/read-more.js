import React from 'react';

import Link from 'gatsby-link';

import styled from 'styled-components';
import { animations, fonts, theme, padding } from '../config/styles';

const ReadMore = (props) => {
    return(
        <div className={props.className}>
            <Link to="/portfolio/">See More Work</Link>
            <Link to="/blog/">Read More Blogs</Link>
        </div>
    )
}

const StyledReadMore = styled(ReadMore)`
    padding: ${padding};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.light};
    background-color: ${theme.dark};
    font-size: 2rem;

    a {
        display: block;
        margin-bottom: ${padding};
        ${fonts.inlineLink()}
        color: ${theme.light};
        ${animations.highlight(theme.light, theme.light, theme.active)};

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default StyledReadMore;