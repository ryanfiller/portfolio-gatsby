import React, { Component } from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import SVG  from 'react-inlinesvg'

import { colors, functions, transition } from '../config/styles'

export default class Logo extends Component {
	render() {
		return (
			<StyledLink className="rf-logo" to="/">
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
	display: inline-flex;
	justify-content: flex-start;
	position: relative;
	overflow: hidden;
	font-size: 1.5em;

	svg {
		display: block;
		width: auto;
		height: 1em;	
		fill: ${colors.white};
		transition: ${transition};
	}

	.r, .yan, .f, .iller {
		pointer-events: none;
	}

	.r {
		filter: drop-shadow( .25em 0px 0px ${colors.black} ); 
		margin-right: -.1675em;
		position: relative;
		z-index: 2;
	}

	.f {
		transform: rotateY(180deg);
		margin-right: 0;
		margin-left: .15em;
	}

	.yan, .iller {
		max-width: 0;
		overflow: hidden
	}

	&:before, &:after {
		content: '';
		display: block;
		background-image:url('/images/logo/gradient.svg');
		background-size: contain;
		width: 100%;
		height: 1em;
		position: absolute;
		z-index: 2;
		transition: ${transition};
	}

	&:before {
		top: -1em;
		left: -1em;
		transform: rotate(-5deg);
	}

	&:after {
		bottom: -1em;
		right: -1em;
		transform: rotate(-5deg) rotatex(180deg);
	}

	&:hover {
		svg {
			fill: ${colors.orange};
		}

		&:before {
			top: -.85em;
			left: -.85em;
		}

		&:after {
			bottom: -.85em;
			right: -.85em;
		}
	}

	${functions.phoneBreak(`
			.r {
				filter: none;
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
				transform: none;
				margin-right: .15em;
			}

			.iller {
				max-width: 100%;
				overflow: hidden;
			}
	`)}
	
`