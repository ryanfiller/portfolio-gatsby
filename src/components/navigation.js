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

	const {
		color,
		active,
		background,
		orientation,
		navFunction
	} = props;

	const StyledNav = styled.nav`
		display: flex;
		color: ${color};

		${orientation === 'horiontal' ? `
			justify-content: flex-end;
		` : null}

		${orientation === 'vertical' ? `
			flex-direction: column;
			align-items: center;
		` : null}
	`

	const StyledNavLink = styled.a`
		text-decoration: none;
		${fonts.condensed()}
		text-transform: uppercase;
		font-size: 1em;
		color: currentColor;
		transition: ${transition};

		${orientation === 'horiontal' ? `
			margin-left: 2rem;
		` : null}

		&.active {
			color: ${active};
		}

		&:hover {
			color: ${active};
			cursor: pointer;
			${breaks.tablet(`
				${animations.glitch(active, background)}
			`)}
		}

		#site.open & {
			${breaks.tablet(`
				color: ${color};
			`)}

			&[href='#contact-form'] {
				position: relative;
				z-index: 100;
				color: ${active};

				&:before, &:after { /* for glitch hover */
					background-color: transparent;
				}
			}
		}

		&[href='#contact-form'] {
			display: none;

			@media(min-width: ${navBreak}px) {
				display: block;
			}
		}
	`
	
	return (
		<StyledNav className="nav" role="navigation">
			{ pages.map((page) => {

				let click;

				if (page === 'contact') {
					click = (e) => {toggleOffCanvas(e, '#contact-form')};
				} else if(navFunction) {
					click = navFunction;
				} else {
					click = (e) => {handleNavigate(e)};
				}

				return (
					<StyledNavLink 
						href={page === 'contact' ? '#contact-form' : page}
						onClick={ click }
						key={page} 
						data-text={page}
						className={currentPage.includes(`/${page}`) ? 'active' : ''}
					>
						{page}
					</StyledNavLink>
				)
			})}
		</StyledNav>
	)
}

Navigation.propTypes = {
	color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
	orentation: PropTypes.string.isRequired,
	navFunction: PropTypes.func
};

export default Navigation;