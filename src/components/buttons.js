import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'
import { fonts } from '../config/styles';

const Button = (props) => {

    const {
        text,
        disabled,
        onClick,
    } = props;

    return (
        <button 
            className={props.className}
            onClick={onClick}
            disabled={disabled}
        >
            <span>
                {text}
            </span>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
	color: PropTypes.string,
	active: PropTypes.string,
    background: PropTypes.string,
    disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

const StyledButton = styled(Button)`
        ${fonts.condensed()}
        font-size: 1em;
        display: block;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1em 2em;
        border: 0;
        transition: var(--transitionSpeed);

        color: ${props => props.color || 'var(--light)'};
        background-color: ${props => props.background || 'var(--highlight)'};

        &:hover,
	    &:focus {
            background-color: ${props => props.active || 'var(--active)'};
            cursor: pointer;
        }

        &:disabled {
            background-color: var(--disabled);
            &:hover {
                cursor: not-allowed;
            }
        }

        &:active {
            transform: translateY(2px);
        }
    `

export default StyledButton;