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
	font-size: 2rem;
	padding: 2em;
	${container}
	${readable}

	li {
		text-align: center;
		text-transform: uppercase;

		a {
			${fonts.condensed}
			text-transform: uppercase;
			text-decoration: none;

			&.current {
				color: ${colors.orange};
			}
		}

		&:after {
			content: '|';
			margin: 0 1em;
		}

		&:last-child:after {
			display: none;
		}
	}
`


{/* <nav class="subnav js-subnav-mobile">
    <div class="subnav__title js-expander">
        <span>Categories</span>
    </div>
    <ul class="subnav__list js-expandee">
        {% for tag in tags %}
            <li class="subnav__link {% if page.filter == tag %}active{% endif %}">
                <a href="/{{ tag }}/">
                    {{ tag }}
                </a>
            </li>
        {% endfor %}
        <li class="subnav__link {% if page.filter == tag %}active{% endif %}">
            <a href="/{{ page.parent }}/">
                all
            </a>
        </li>
    </ul>
</nav> */}