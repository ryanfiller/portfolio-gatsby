import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { pages } from '../config/config';

import { NavContext } from './layout';

import styled from 'styled-components';
import { animations, breaks, fonts, navBreak, transition } from '../config/styles';

const Navigation = (props) => {
	
	const context = useContext(NavContext);
	const {
		handleNavigate,
        toggleOffCanvas, 
        currentPage,
	} = context;
	
	return (
		<nav className={props.className} role="navigation">
			{ pages.map((page) => {

				let click;

				if (page.name === 'contact') {
					click = (e) => {toggleOffCanvas(e, '#contact')};
				} else if(props.navFunction) {
					click = props.navFunction;
				} else {
					click = (e) => {handleNavigate(e)};
				}

				return (
					<a 
						href={page.url || page.name}
						onClick={ click }
						key={page.name} 
						data-text={page.name}
						className={currentPage.includes(`/${page.name}`) ? 'active' : ''}
					>
						{page.name}
					</a>
				)
			})}
		</nav>
	)
}

Navigation.propTypes = {
	color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
	orientation: PropTypes.string.isRequired,
	navFunction: PropTypes.func
};

const StyledNavigation = styled(Navigation)`
	display: flex;
	color: ${props => props.color};

	${props => props.orientation === 'vertical' ? `
		flex-direction: column;
		align-items: center;
	` : null}

	a {
		text-decoration: none;
		${fonts.condensed()}
		text-transform: uppercase;
		font-size: 1em;
		color: currentColor;
		transition: ${transition}ms;

		${props => props.orientation === 'horizontal' ? `
			margin-right: 2rem;

			&:last-child() {
				margin-right: 0;
			}
		` : null}

		${props => props.orientation === 'vertical' ? `
			margin-bottom: 1rem;

			&:last-child() {
				margin-bottom: 0;
			}
		` : null}

		&.active {
			color: ${props => props.active};
		}

		&:hover,
		&:focus {
			color: ${props => props.active};
			cursor: pointer;
			${breaks.tablet(`
				${animations.glitch(props => props.active, props => props.background)}
			`)}
		}

		#site.open & {
			${breaks.tablet(`
				color: ${props => props.color};
			`)}

			&[href='#contact'] {
				position: relative;
				z-index: 100;
				color: ${props => props.active};
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