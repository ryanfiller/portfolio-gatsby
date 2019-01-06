import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'
import { theme, fonts, transition } from '../config/styles';

const Button = (props) => {

    const {
        text,
        color,
        active,
        background,
        disabled,
        onClick,
    } = props;

    const StyledButton = styled.button`
        ${fonts.condensed()}
        font-size: 1em;
        display: block;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1em 2em;
        border: 0;
        transition: ${transition};

        color: ${color || theme.light};
        background-color: ${background || theme.highlight};

        &:hover, &:focus {
            outline: none;
            background-color: ${active || theme.active};
            cursor: pointer;
        }

        &:disabled {
            background-color: ${theme.disabled};
            &:hover {
                cursor: not-allowed;
            }
        }

        &:active {
            transform: translateY(2px);
        }
    `

    return (
        <StyledButton 
            onClick={onClick}
            disabled={disabled}
        >
            <span>
                {text}
            </span>
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
	color: PropTypes.string,
	active: PropTypes.string,
    background: PropTypes.string,
    disabled: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;