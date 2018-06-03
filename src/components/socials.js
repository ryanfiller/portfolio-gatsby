import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';

import config from '../config/site-info';

import { breaks, colors, transition } from '../config/config';

import styled from 'styled-components';


export default class Socials extends Component {

	render() {

	return (
		<StyledSocial className="socials">
			{config.socialMedia.map((social) =>
				<li key={social.name}>
				<a 
				className={`social social--${social.name.toLowerCase()}`}
				key={social.name} 
				href={social.url}
				target="_blank"
				style={{color: social.color}}
				>
					<SVG src={`../images/socials/${social.name.toLowerCase()}.svg`}/>
				</a>
				</li>
			)}
		</StyledSocial> 
	)
	}
}

const StyledSocial = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	
	li {
		position: relative;
	}

	.social {
		width: 1.75rem;
		display: block;

		&:after {
			content: '';
			display: block;
			position: absolute;
			z-index: 1;
			background: currentColor;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin-top: 100%;
			transition: ${transition};

			@media(max-width: ${breaks.tablet}px) {
				display: none;
			}
		}

		&:hover:after {
			margin-top: 0;
		}

		@media(max-width: ${breaks.phone}px) {
			flex: 1;
			width: auto;
		}
	}

	svg {
		fill: ${colors.white};
		display: block;
		height: auto;
		width: 100%;
		position: relative;
		z-index: 2;

		@media(max-width: ${breaks.tablet}px) {
			fill: currentColor;
		}
	}

	.horizontal & {
		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
				li {
					flex: 1;
				}

				.social {
					width: 100%;
				}
			}
		}
	}
`