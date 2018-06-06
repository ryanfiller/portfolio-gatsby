import React from 'react'

import { breaks, colors, fonts, container, readable } from '../config/config';
import styled from 'styled-components';

export default class Dropdown extends React.Component {

    render() {

        const { categories, setFilter, currentCategory } = this.props;

        return (
            <StyledDropdown className="dropdown">
                <li className="default" key="all" onClick={() => setFilter('all')} className="default">
                    <a href="#" tabindex="0" className={currentCategory === 'all' ? 'current' : ''}>
						all					
					</a>
                </li>
                {categories.map((item) => {
                    return (
                        <li key={item} onClick={() => setFilter(item)}>
							<a href="#" tabindex="0" className={currentCategory === item ? 'current' : ''}>
								{item}
							</a>
                        </li>
                    )
                })}
            </StyledDropdown>
        )
    }
}

const StyledDropdown = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: center;
	font-size: 1.75rem;
	padding: 2em;
	${container}
	${readable}
    ${fonts.sansSerif}

	li {
		text-align: center;
		text-transform: uppercase;

		a {
			text-transform: uppercase;
			text-decoration: none;
            color: ${colors.blue};

			&.current {
				color: ${colors.orange};
			}

            &:hover {
				color: ${colors.black};
			}
		}

		&:after {
			content: '|';
			margin: 0 1em;

            @media (max-width: ${breaks.tablet}px) {
                margin: 0 .5em;
            }
		}

		&:last-child:after {
			display: none;
		}
	}

    @media (max-width: ${breaks.phone}px) {
        padding: 0;
        margin: .5rem;
        flex-wrap: wrap;
        font-size: 1.5rem;

        li {
            width: 50%;
            padding: .25rem;

            a {
                display: block;
                padding: .66em;
                color: ${colors.white};
                background-color: ${colors.blue};

                &.current {
                    color: ${colors.white};
				    background-color: ${colors.orange};
			    }
            }

            &:after {
                display: none;
            }
        }
    }
`