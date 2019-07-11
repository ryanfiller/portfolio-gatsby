import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { pages } from '../../config/config';

import { NavContext } from './layout';

import styled from 'styled-components';
import { animations, breaks, fonts, navBreak, transition } from '../../config/styles';

const Navigation = (props) => {

	const nav = useContext(NavContext);

	return (
		<nav className={props.className} role="navigation">
			{ pages.map((page) => {

				let click;

				if (page.name === 'contact') {
					click = (e) => {nav.toggleOffCanvas(e, '#contact')};
				} else if(props.navFunction) {
					click = props.navFunction;
				} else {
					click = (e) => {nav.handleNavigate(e)};
				}

				return (
					<a 
						href={page.url || page.name}
						onClick={ click }
						key={page.name} 
						data-text={page.name}
						className={nav.currentPage.includes(`/${page.name}`) ? 'active' : ''}
					>
						{page.name}
					</a>
				)
			})}
		</nav>
	)
}

Navigation.propTypes = {
	orientation: PropTypes.string.isRequired,
	navFunction: PropTypes.func
};

const StyledNavigation = styled(Navigation)`
	display: flex;
	color: ${props => props.color};

	${props => props.orientation === 'vertical' ? 
		`
			flex-direction: column;
			align-items: center;
		` 
	: null}


	a {
		text-decoration: none;
		${fonts.condensed()}
		text-transform: uppercase;
		font-size: 1em;
		color: currentColor;
		transition: ${transition}ms;

		${props => props.orientation === 'horizontal' ? 
		`
			margin-right: 2rem;

			&:last-child() {
				margin-right: 0;
			}
		` 
		: null}

		${props => props.orientation === 'vertical' ?
		`
			margin-bottom: 1rem;

			&:last-child() {
				margin-bottom: 0;
			}
		` 
		: null}

		&.active {
			color: ${props => props.theme.active};
		}

		&:hover,
		&:focus {
			color: ${props => props.theme.active};
			cursor: pointer;
			${breaks.tablet(`
				// todo fix the glitch animation 
				${animations.glitch(props => props.theme.active, 'transparent')}
			`)}
		}

		#site.open & {
			&[href='#contact'] {
				position: relative;
				z-index: 100;
				color: ${props => props.theme.active};
			}
		}

		&[href='#contact'] {
			display: none;

			@media(min-width: ${navBreak}px) {
				display: block;
			}
		}
	}
`

export default StyledNavigation;