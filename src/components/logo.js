import React from 'react';
import PropTypes from "prop-types";

import Link from 'gatsby-link';
import SVG  from 'react-inlinesvg';

import styled from 'styled-components';
import { breaks, transition } from '../config/styles';

import r from "../images/logo/r.svg";
import yan from "../images/logo/yan.svg";
import f from "../images/logo/f.svg";
import iller from "../images/logo/iller.svg";

const Logo = (props) => {

	const {
		color,
		active,
		background
	} = props;

	const StyledLink = styled(Link)`
		display: inline-flex;
		justify-content: flex-start;
		position: relative;
		overflow: hidden;
		font-size: 1.5em;
		height: 1em;
		width: auto;

		svg {
			display: block;
			width: auto;
			height: 1em;	
			fill: ${color};
			pointer-events: none;
		}

		.r, .yan, .f, .iller {
			transition: ${transition};
		}

		.r {
			filter: drop-shadow( .25em 0px 0px ${background} ); 
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

		&:hover {
			svg {
				fill: ${active};
			}

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
		}

		${breaks.phone(`
			font-size: 1.25em;
		`)}
	`

	return (
		<StyledLink className="rf-logo" to="/">
			<SVG className="r" src={r} />
			<SVG className="yan" src={yan} />
			<SVG className="f" src={f} />
			<SVG className="iller" src={iller} />
		</StyledLink>
	)
}

Logo.propTypes = {
	color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired
};

export default Logo;