import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import styled from 'styled-components';
import { breaks, transition2 } from '../config/styles';

import RyanFiller from "../images/site-assets/logo.svg";

const Logo = (props) => {

	return (
		<Link className={props.className} to="/" aria-label="to homepage">
			<RyanFiller />
		</Link>
	)
}

const StyledLogo = styled(Logo)`
	display: inline-flex;
	justify-content: flex-start;
	position: relative;
	overflow: hidden;
	font-size: 1em;
	height: 1em;
	width: auto;
	color: currentColor;

	svg {
		display: block;
		height: 1em;	
		width: 1.3em;
		pointer-events: none;
		transition: ${transition2.speed}ms;

		path {
			transform-origin: center center;
			fill: currentColor;
			transition: ${transition2.speed}ms;
			transition-timing-function: ${transition2.timing};
		}

		mask path {
			color: white;
		}
	}

	.r { 
		transform: translateX(0);
	}

	.yan {
		transform: translateX(0);
		opacity: 0;
	}

	.f {
		transform: rotateY(180deg) translateX(85%);
		mask: url(#mask);
	}

	.iller {
		transform: translateX(0);
		opacity: 0;
	}

	&:hover,
	&:focus {
			color: ${props => props.theme.active};
	}

	${props => breaks[props.breakpoint](`
		svg {
			width: 8.45em;

			.r {
				filter: none;
				transform: translateX(0);
			}

			.yan {
				transform: translateX(10%);
				opacity: 1;
			}
		
			.f {
				transform: translateX(50%);
				mask: none;
			}

			.iller {
				transform: translateX(60%);
				opacity: 1;
			}
		}
	`)}
`

Logo.propTypes = {
	breakpoint: PropTypes.string.isRequired,
};

export default StyledLogo;