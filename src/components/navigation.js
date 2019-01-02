import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { pages } from '../config/config';
import { animations, containers, fonts, functions, navBreak, transition } from '../config/styles';

const Navigation = (props) => {

	const {
		color,
		active,
		background
	} = props;

	const StyledNav = styled.nav`
		display: flex;
		color: ${color};
		font-size: 1em;

		.header & {
			justify-content: flex-end;
		}

		.off-canvas & {
			flex-direction: column;
			align-items: center;
		}
	`

	const StyledNavLink = styled.a`
		text-decoration: none;
		margin-left: 2rem;
		${fonts.condensed()}
		text-transform: uppercase;
		font-size: 1em;
		color: currentColor;
		transition: ${transition};

		&.active {
			color: ${active};
		}

		&:hover {
			color: ${active};
			cursor: pointer;
			${functions.tabletBreak(`
				${animations.glitch(active, background)}
			`)}
		}

		#site.open & {
			${functions.tabletBreak(`
				color: ${color};
			`)}

			&[href='#contact-form'] {
				position: relative;
				z-index: 100;
				color: ${active};
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
				return(
					<StyledNavLink 
						href={page === 'contact' ? '#contact-form' : page}
						onClick={ page === 'contact' ? 
							(e) => {props.toggleOffCanvas(e, '#contact-form')} :
							(e) => {props.handleNavigate(e)}
						}
						key={page} 
						data-text={page}
						className={props.currentPage.includes(`/${page}`) ? 'active' : ''}
					>
						{page}
					</StyledNavLink>
				)
			})}
		</StyledNav>
	)
}

export default Navigation;