import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { pages } from '../../config/config';

import { NavContext } from './layout';

import styled from 'styled-components';
import { animations, breaks, fonts } from '../../config/styles';

const Navigation = (props) => {

	const nav = useContext(NavContext);

	const links = (props.links || pages); // for testing

	const buildLinks = (links) => {

		return links.map((link) => {

			let click;

			if (link.name === 'contact') {
				click = (e) => {nav.toggleOffCanvas(e, '#contact')};
			} else if(props.navFunction) {
				click = props.navFunction;
			} else {
				click = (e) => {nav.handleNavigate(e)};
			}

			const href = link.url || link.name;

			return (
				<a 
					href={href}
					onClick={ click }
					key={link.name} 
					data-text={link.name}
					className={nav.currentPage.includes(`/${href}`) ? 'active' : null}
				>
					{link.name}
				</a>
			)
		})
	}

	return (
		<nav className={props.className} role="navigation">
			{buildLinks(links)}
		</nav>
	)
}

Navigation.propTypes = {
	// orientation: PropTypes.string.isRequired,
	navFunction: PropTypes.func
};

// media queries should always work
// nav is vertical, turns horizontal at nav breakpoint. 
// make vert() a mixin because you want to use it on homepage too.

const vertical = () => (`
	display: block;


	a {
		display: block;
		text-align: center;
		margin-bottom: 1rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
`)

const horizontal = () => (`
	display: flex;

	a {
		display: block;
		text-align: center;
		margin: 0;
		margin-right: var(--padding);

		&:last-child {
			margin-right: 0;
		}
	}
`)

const StyledNavigation = styled(Navigation)`
	color: ${props => props.color};
	${vertical()}

	${breaks.nav(`
		${horizontal()}
	`)}

	a {
		text-decoration: none;
		${fonts.condensed()}
		text-transform: uppercase;
		font-size: 1em;
		color: currentColor;
		transition: var(--transitionSpeed);
		letter-spacing: var(--letterSpacing);

		&.active {
			color: var(--active);
		}

		&:hover,
		&:focus {
			color: var(--active);
			cursor: pointer;
			${breaks.tablet(`
				${animations.float()}
			`)}
		}

		#site.open & {
			&[href='#contact'] {
				position: relative;
				z-index: 100;
				color: var(--active);
			}
		}

		&[href='#contact'] {
			display: none;

			${breaks.nav(`
				display: block;
			`)}
		}
	}
`

export default StyledNavigation;