import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import { pages } from '../config/config';
import { colors, containers, fonts, functions, navBreak, transition } from '../config/styles';

export default class Navigation extends Component {

	render() {
		return (
			<StyledNav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<StyledNavLink 
								href={page}
								onClick={(e) => {this.props.handleNavigate(e)}}
								key={page} 
								data-text={page}
								className={this.props.currentPage.includes(`/${page}`) ? 'active' : ''}
							>
								{page}
							</StyledNavLink>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${navBreak}px)`}>
								<StyledNavLink
									href="#contact-form"
									onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} 
									key={page} 
									data-text={page} 
									id={page} 
								>
									{page}
								</StyledNavLink>
							</MediaQuery>
						)
					}}
				)}
			</StyledNav>
		)
	}
}

const StyledNav = styled.nav`
	.header & {
		color: ${colors.white};
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}

	.off-canvas & {
		color: ${colors.white};
		display: flex;
		flex-direction: column;
		align-items: center;
		${containers.container()}

		a {
			font-size: 2em;
			margin: .5em 0;
		}
	}
`

const StyledNavLink = styled.a`
	text-decoration: none;
	margin-left: 2rem;
	${fonts.condensed()}
	text-transform: uppercase;
	font-size: 1em;
	color: ${colors.white};
	transition: ${transition};

	&.active {
		color: ${colors.orange};
	}

	&:hover {
		color: ${colors.orange};
		cursor: pointer;
		/* TODO */
		/* @include glitch($color-orange, $color-black); */
	}

	#site.open & {
		${functions.tabletBreak(`
			color: ${colors.white};
		`)}
		
		&#contact {
			position: relative;
			z-index: 100;
			color: ${colors.orange};
		}
	}
`