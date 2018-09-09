import React from 'react'
import styled from 'styled-components'

import { colors, containers, fonts, functions } from '../config/styles'

export default class Dropdown extends React.Component {

    render() {

        const { categories, setFilter, currentCategory } = this.props;

        return (
            <StyledPortfolioFilter className="portfolio-filter">
                <li className="default" key="all" onClick={() => setFilter('all')} className="default">
                    <button tabIndex="0" className={currentCategory === 'all' ? 'current' : ''}>
						all					
					</button>
                </li>
                {categories.map((item) => {
                    return (
                        <li key={item} onClick={() => setFilter(item)}>
							<button tabIndex="0" className={currentCategory === item ? 'current' : ''}>
								{item}
							</button>
                        </li>
                    )
                })}
            </StyledPortfolioFilter>
        )
    }
}

const StyledPortfolioFilter = styled.ul`
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

    ${functions.phoneBreak(`
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
                
                ${functions.tabletBreak(`
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