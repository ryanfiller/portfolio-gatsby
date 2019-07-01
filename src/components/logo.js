import React, { useContext } from 'react';

import Link from 'gatsby-link';
import SVG  from 'react-inlinesvg';

import styled, { ThemeContext } from 'styled-components';
import { breaks } from '../config/styles';

import r from "../images/logo/r.svg";
import yan from "../images/logo/yan.svg";
import f from "../images/logo/f.svg";
import iller from "../images/logo/iller.svg";

const Logo = () => {

	const theme = useContext(ThemeContext)

	return (
		<StyledLogo theme={theme} to="/">
			<SVG className="r" src={r} />
			<SVG className="yan" src={yan} />
			<SVG className="f" src={f} />
			<SVG className="iller" src={iller} />
		</StyledLogo>
	)
}

const StyledLogo = styled(Link)`
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
		pointer-events: none;
		fill: ${props => props.theme.darkNav ? props.theme.light : props.theme.dark};
	}

	.r { 
		filter: ${props => (
			props.theme.darkNav ? 
				`drop-shadow(.25em 0px 0px ${props.theme.dark})`
			:
				`drop-shadow(.25em 0px 0px ${props.theme.light})`
		)};
		margin-right: -.1675em;
		position: relative;
		z-index: 2;
	}

	.f {
		transform: rotateY(180deg);
		margin-right: 0;
		margin-left: .025em;
	}

	.yan, .iller {
		max-width: 0;
		overflow: hidden
	}

	&:hover,
	&:focus {
		svg {
			fill: ${props => props.theme.active};
		}
	}

	${breaks.phone(`
		font-size: 1.25em;

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

export default Logo;