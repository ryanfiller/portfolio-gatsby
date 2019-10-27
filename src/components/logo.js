import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import styled from 'styled-components';
import { animations, breaks, darkMode } from '../config/styles';

import RyanFiller from "../images/site-assets/logo.svg";

const Logo = (props) => {

	return (
		<Link className={props.className} to="/" aria-label="to homepage">
			<RyanFiller />
		</Link>
	)
}

const StyledLogo = styled(Logo)`
	position: relative;
	font-size: 2em;
	height: 1em;
	color: currentColor;
	overflow: hidden;

	${darkMode(`
		overflow: visible;
	`)}

	&:hover {
		svg { 
			${animations.float}
		 }
	}

	svg {
		display: block;
		fill: currentColor;
		height: 1em;
		width: auto;
		padding: var(--header-padding);
		
		.client-side-js & {
			height: 1.35em;
			width: 1em;
			margin-top: -0.2em;
			padding: 0;
		}

		* {
				opacity: 0;
				transition: var(--transitionSpeed);
			}
		.r,
		.f {
			opacity: 1;
		}
		
		.f {
			transform: translateX(-39.5%);
		}
	}

	${props => breaks[props.breakpoint](`
		svg {
			width: 100%;

			.client-side-js & {
				height: 1.83em;
				width: auto;
				margin-top: -0.34em;
				margin-bottom: -0.3em;
				padding: var(--header-padding) 0;
			}

			* {
				opacity: 1;
			}
			
			.f {
				transform: none;
			}
		}
	`)}
`

Logo.propTypes = {
	breakpoint: PropTypes.string.isRequired,
};

export default StyledLogo;