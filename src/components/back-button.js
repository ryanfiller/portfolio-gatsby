import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link'
import { getParent } from '../helpers/helpers';

import styled from 'styled-components';
import { animations, fonts, theme } from '../config/styles';


const BackButton = (props) => {

    const parent = getParent(props.location.pathname);

    return(
        <Link 
            className={props.className}
            to={parent.url}
        >
            Back To All {parent.title}
        </Link>
    )
}

BackButton.propTypes = {
    location: PropTypes.object.isRequired,
};

const StyledBackButton = styled(BackButton)`
    display: inline-block;
    font-size: 1.25rem;
    margin: 0 auto;
    ${fonts.inlineLink('left')}
    ${animations.highlight(theme.active, theme.light, theme.active)};
`

export default StyledBackButton;