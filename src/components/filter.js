import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { breaks, colors, containers, fonts } from '../config/styles'

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

        button {
            font-size: 1em;
            display: block;
            width: 100%;
            background: none;
            border: none;
            padding: .66em;
            ${fonts.sansSerif()}
            text-transform: uppercase;
            color: ${colors.white};
            background-color: ${colors.blue};

            &.current {
                color: ${colors.white};
                background-color: ${colors.orange};
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

            button {
                cursor: pointer;
                background-color: transparent;
                color: ${colors.blue};

                &.current {
                    color: ${colors.orange};
                    background-color: transparent;
                }

                &:hover {
                    color: ${colors.black};
                    background-color: transparent;
                }
            }

            &:after {
                font-size: 1em;
                content: '|';
                margin: 0 .5em;
                
                ${breaks.tablet(`
                    margin: 0 1em;
                `)}
            }

            &:last-child:after {
                display: none;
            }
        }
    `)}
    }
`

Filter.propTypes = {
    filters: PropTypes.array.isRequired,
    currentFilter: PropTypes.string.isRequired,
    setCurrentFilter: PropTypes.func.isRequired,
};

export default StyledFilter;