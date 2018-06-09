import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Link, { navigateTo } from 'gatsby-link';

import { breaks, colors, fonts, container } from '../config/config';
import { pages } from '../config/site-info';

import styled from 'styled-components';

export default class Navigation extends Component {

	render() {
		return (
			<StyledNav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<Link 
							to={ page } 
							key={page} 
							data-text={page} 
							activeClassName="active">
								{page}
							</Link>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
								<a
								href="#contact-form"
								onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} 
								key={page} 
								data-text={page} 
								id={page} >
									{page}
								</a>
							</MediaQuery>
						)
					}}
				)}
			</StyledNav>
		)
	}
}

const StyledNav = styled.nav`
	color: ${colors.white};
	flex: 1;
	display: flex;
	justify-content: flex-end;

	a {
		text-decoration: none;
		margin-left: 2rem;
		${fonts.condensed};
		text-transform: uppercase;
		font-size: 1em;
		color: ${colors.white};

		&.active {
			color: ${colors.orange};
		}

		&:hover {
			color: ${colors.orange};
			cursor: pointer;
		}

		#site.open & {
			color: ${colors.white};
			
			&#contact {
				position: relative;
				z-index: 100;
				color: ${colors.orange};
			}
		}
	}

	.off-canvas & {
		display: block;
		${container}

		a {
			display: block;
			padding: 1em 0;
			margin: 0;
		}
	}

	.horizontal & {
		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
				width: 100%;
                flex: initial;
				display: block;

				a {
					display: block;
					text-align: center;
					margin: .5em;
				}
            }
        }
    }
`;