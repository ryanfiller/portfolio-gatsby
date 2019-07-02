import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import { NavContext } from './layout';

import styled from 'styled-components'
import { naviconWidth, transition } from '../../config/styles'

const Navicon = (props) => {

const nav = useContext(NavContext);

	return (
		<button 
				id="navicon"
				className={props.className}
				onClick={nav.toggleOffCanvas}
		>
				<span className="top"></span>
				<span className="middle"></span>
				<span className="bottom"></span>
		</button>
	)
}

const StyledNavicon = styled(Navicon)`
	cursor: pointer;
	background: transparent;
	padding: 0;
	border: 0;
	align-self: stretch;
	height: auto;
	position: relative !important;
	margin-left: 2rem;
	display: block;
	width: ${naviconWidth};

	.top, .middle, .bottom {
		display: block;
		height: .25rem;
		width: 100%;
		background-color: ${props => props.color};
		position: absolute;
	}

	&:hover,
	&:focus {
		.top, .middle, .bottom {
				background-color: ${props => props.active};
		}
	}

	.top {
		top: 0;
		transform: rotate(0deg);
		transition: top ${transition}ms ease ${transition}ms, transform ${transition}ms ease 0s, background-color ${transition}ms;
	}

	.middle {
		transition: opacity 0s ease ${transition}ms, background-color ${transition}ms;
		top: 50%;
		transform: translateY(-50%);
		opacity: 1;
	}

	.bottom {
		transition: bottom ${transition}ms ease ${transition}ms, transform ${transition}ms ease 0s, background-color ${transition}ms;
		bottom: 0;
	}

	.site.open & {
		position: relative;
		z-index: 100;

		.top, .middle, .bottom {
				background-color: ${props => props.active};
		}

		.top {
				transition: top ${transition}ms ease 0s, transform ${transition}ms ease ${transition}ms;
				top: calc(50% - .125rem);
				transform: rotate(45deg);
		}

		.middle {
				transition: opacity 0s ease ${transition}ms;
				opacity: 0;
		}

		.bottom {
				transition: bottom ${transition}ms ease 0s, transform ${transition}ms ease ${transition}ms;
				bottom: calc(50% - .125rem);
				transform: rotate(-45deg);
		}
	}
`

Navicon.propTypes = {
	color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
};

export default StyledNavicon;