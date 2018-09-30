import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { button, colors, fonts, transition } from '../config/styles';

const Button = (props) => (
    <StyledButton 
        onClick={props.onClick}
        disabled={props.disabled}
    >
        <span>
            {props.children}
        </span>
    </StyledButton>
)

export default Button;

const StyledButton = styled.button`
    ${fonts.condensed()}
    font-size: 1em;
    display: block;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 2em;
    border: 0;
    transition: ${transition};

    color: ${colors.black};
    background-color: ${colors.orange};

    &:hover {
        background-color: ${darken(.05, colors.orange)};
    }

    &:disabled {
        color: ${colors.white};
        background-color: ${colors.lightGray};
        &:hover {
            cursor: not-allowed;
            background-color: ${colors.lightGray};
        }
    }
`