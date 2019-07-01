import React from 'react';
import PropTypes from "prop-types";

import { socialMedia } from '../config/config';
import { icons } from '../images/socials/icons'
import SVG  from 'react-inlinesvg';

import styled from 'styled-components';
import { breaks, transition } from '../config/styles';

const SocialList = (props) => {

	const{
		active,
		oneColor
	} = props;

	return (
		<nav className={`socials-list ${props.className}`}>
			{socialMedia.map((social) => 
				<a 
					key={social.name}
					className={`social social--${social.name.toLowerCase()}`}
					href={social.url}
					style={{color: oneColor === true ? active : social.color}}
				>
					<SVG src={icons[social.name.toLowerCase()]}/>
				</a>
			)}
		</nav> 
	)
}

const StyledSocialList = styled(SocialList)`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	
	a {
		position: relative;
		flex: 1;
		width: auto;
		width: 100%;
		display: block;

		svg {
			display: block;
			height: auto;
			width: 100%;
			position: relative;
			z-index: 2;

			${props => props.oneColor === true ? 
				`fill: ${props.color};`
			:
				`fill: currentColor;`
			}

			/* TODO something is funky with this when oneColor = true */
			${breaks.phone(`
				fill: ${props => props.color};
			`)}
		}

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
			transition: ${transition}ms;

			${breaks.phone(`
				display: block;
			`)}
		}

		${breaks.phone(`
			width: 2rem;
			&:hover:after {
				margin-top: 0;
			}
		`)}
		}
`

SocialList.propTypes = {
    color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	oneColor: PropTypes.bool
};

export default StyledSocialList;