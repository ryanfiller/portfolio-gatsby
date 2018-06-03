import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Link, { navigateTo } from 'gatsby-link'
import SVG  from 'react-inlinesvg';

import { breaks, colors, transition } from '../config/config';

import styled from 'styled-components';

export default class Logo extends Component {
	render() {
		return (
			<StyledLink href="" className="rf-logo" to="/">
				<div className="r"><SVG src="../images/logo/r.svg" /></div>
				<div className="yan"><SVG src="../images/logo/yan.svg" /></div>
				<div className="f"><SVG src="../images/logo/f.svg" /></div>
				<div className="iller"><SVG src="../images/logo/iller.svg" /></div>
			</StyledLink>
		)
	}
}

const StyledLink = styled(Link)`
	height: 1em;
	width: auto;
	display: flex;
	justify-content: flex-start;
	position: relative;
	overflow: hidden;

		svg {
			display: block;
			width: auto;
			height: 1em;
			fill: ${colors.white};
			transition: 0s; /* dunno why the transition is getting doulbed, but this fixes it. */
		}

		.r {
			margin-right: -.033em;    
			position: relative;
			z-index: 1;       
		}

		.yan {
			margin-right: .5em;
			max-width: 100%;
			overflow: hidden;
		}

		.f {
			margin-right: .215em;
		}

		.iller {
			max-width: 100%;
			overflow: hidden;
		}

		&:before, &:after {
			content: '';
			display: block;
			background-image:url('/images/logo/gradient.svg');
			background-size: contain;
			width: 100%;
			height: 1.5em;
			position: absolute;
			z-index: 2;
			transition: ${transition};
		}

		&:before {
			top: -1.25em;
			left: -1em;
			transform: rotate(-5deg);
		}

		&:after {
			bottom: -1.25em;
			right: -1em;
			transform: rotate(-5deg) rotatex(180deg);
		}

		@media(max-width: ${breaks.phone}px) {
			.r {
				filter: drop-shadow( .25em 0px 0px ${colors.black} ); 
				margin-right: -.7em;
			}

			.f {
				transform: rotateY(180deg);
				margin-right: 0;
				margin-left: .15em;
			}

			.yan, .iller {
				max-width: 0;
			}
		}

	&:hover {
		svg {
			fill: ${colors.orange};
		}

		&:before {
			top: -1.5em;
			left: -1.25em;
		}

		&:after {
			bottom: -1.5em;
			right: -1.25em;
		}
	}
`;