import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import styled from 'styled-components';
import { animations, breaks } from '../config/styles';

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
	overflow: hidden;
	font-size: 1em;
	height: 1em;
	color: currentColor;

	&:hover {
		color: red;
	}

	svg {
		display: block;
		fill: currentColor;
		height: 1em;
		width: 0.55em;

		* {
				opacity: 0;
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
		font-size: 2em;
		
		svg {
			width: 100%;
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