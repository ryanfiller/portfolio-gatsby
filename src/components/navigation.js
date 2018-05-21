import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Link, { navigateTo } from 'gatsby-link';

import { breaks, colors, fonts } from '../config/config';
import { pages } from '../config/site-info';

import styled from 'styled-components';

const StyledNav = styled.nav`
	color: ${ colors.white };
	flex: 1;
	display: flex;
	justify-content: flex-end;

	a {
		text-decoration: none;
		margin-left: 2rem;
		${ fonts.condensed };
		text-transform: uppercase;
		font-size: 1em;
		color: ${ colors.white };

		&.active {
			color: ${ colors.orange };
		}

		&:hover {
			color: ${ colors.orange };
			cursor: pointer;
		}

		&#contact {
			#site.open & {
				position: relative;
				z-index: 100;
				color: ${ colors.orange };
			}
		}
	}
`;

export default class Navigation extends Component {

	render() {
		return (
			<StyledNav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<a href="" // font tab-index
							onClick={ () => navigateTo(page)} 
							key={page} 
							data-text={page} 
							activeClassName="active">
								{page}
							</a>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
								<a href="" // font tab-index
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