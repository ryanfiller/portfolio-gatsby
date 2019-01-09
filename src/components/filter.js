import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { breaks, containers, fonts, theme } from '../config/styles'

const Filter = (props) => {
    const { 
        filters,
        currentFilter,
        setCurrentFilter
    } = props;

    return (
        <ul className={`filter ${props.className}`}>
            <li className="default" key="all" onClick={() => setCurrentFilter('all')} >
                <button tabIndex="0" className={currentFilter === 'all' ? 'current' : ''}>
                    all					
                </button>
            </li>
            {filters.map((item) => {
                return (
                    <li key={item} onClick={() => setCurrentFilter(item)}>
                        <button tabIndex="0" className={currentFilter === item ? 'current' : ''}>
                            {item}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

Filter.propTypes = {
    filters: PropTypes.array.isRequired,
    currentFilter: PropTypes.string.isRequired,
    setCurrentFilter: PropTypes.func.isRequired,
    color: PropTypes.string,
	active: PropTypes.string,
	background: PropTypes.string
};

const StyledFilter = styled(Filter)`
    padding: 0;
    margin: .5rem;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5rem;
    list-style: none;
    ${fonts.sansSerif()}

    li {
        width: 50%;
        padding: .25rem;
        font-size: 1em;
        color: ${props => props.background || theme.light};

        button {
            font-size: 1em;
            display: block;
            width: 100%;
            background: none;
            border: none;
            padding: .66em;
            ${fonts.sansSerif()}
            text-transform: uppercase;
            color: currentColor;
            background-color: ${props => props.color || theme.primary};

            &.current {
                background-color: ${props => props.active || theme.highlight};
            }
        }
    }

    ${breaks.phone(`
        flex-wrap: nowrap;
        margin: 0;
        justify-content: center;
        font-size: 1.75rem;
        padding: 2rem;
        ${containers.container()}
        ${containers.readable()}

        li {
            display: flex;
            align-items: center;
            width: auto;
            text-align: center;
            text-transform: uppercase;
            color: ${props => props.color || theme.primary};

            button {
                cursor: pointer;
                color: currentColor;
                background-color: transparent;

                &.current {
                    color: ${props => props.active || theme.highlight};
                    background-color: transparent;
                }

                &:hover {
                    color: ${props => props.active || theme.highlight};
                    background-color: transparent;
                }
            }

            &:after {
                font-size: 1em;
                content: '|';
                margin: 0 .5em;
                color: currentColor;
                
                ${breaks.tablet(`
                    margin: 0 1em;
                `)}
            }

            &:last-child:after {
                display: none;
            }
        }
    `)}
`

export default StyledFilter;