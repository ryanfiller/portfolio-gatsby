import React, { useContext } from 'react'

import { NavContext } from './layout';

import styled from 'styled-components'
import { naviconSize } from '../../config/styles'

const Navicon = (props) => {

const nav = useContext(NavContext);

	return (
		<button 
				id="navicon"
				aria-label="mobile nav toggle"
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
	display: block;
	cursor: pointer;
	color: currentColor;
	background: transparent;
	padding: 0;
	border: 0;
	align-self: stretch;
	height: auto;
	position: relative !important;
	margin-left: 2rem;
	width: ${naviconSize};
	min-width: ${naviconSize};
	height: ${naviconSize};

	.top, .middle, .bottom {
		display: block;
		height: .25rem;
		width: 100%;
		background-color: currentColor;
		position: absolute;
	}

	&:hover,
	&:focus {
		.top, .middle, .bottom {
				background-color: var(--active);
		}
	}

	.top {
		top: 0;
		transform: rotate(0deg);
		transition: top var(--transitionSpeed) ease var(--transitionSpeed), transform var(--transitionSpeed) ease 0s, background-color var(--transitionSpeed);
	}

	.middle {
		transition: opacity 0s ease var(--transitionSpeed), background-color var(--transitionSpeed);
		top: 50%;
		transform: translateY(-50%);
		opacity: 1;
	}

	.bottom {
		transition: bottom var(--transitionSpeed) ease var(--transitionSpeed), transform var(--transitionSpeed) ease 0s, background-color var(--transitionSpeed);
		bottom: 0;
	}

	.site.open & {
		position: relative;
		z-index: 100;

		.top, .middle, .bottom {
				background-color: var(--active);
		}

		.top {
				transition: top var(--transitionSpeed) ease 0s, transform var(--transitionSpeed) ease var(--transitionSpeed);
				top: calc(50% - .125rem);
				transform: rotate(45deg);
		}

		.middle {
				transition: opacity 0s ease var(--transitionSpeed);
				opacity: 0;
		}

		.bottom {
				transition: bottom var(--transitionSpeed) ease 0s, transform var(--transitionSpeed) ease var(--transitionSpeed);
				bottom: calc(50% - .125rem);
				transform: rotate(-45deg);
		}
	}
`

export default StyledNavicon;