import React from 'react';

import { socialMedia } from '../config/config';
import { icons } from '../images/socials/icons'

import styled from 'styled-components';
import { breaks } from '../config/styles';

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
					{icons[social.name.toLowerCase()]()}
				</a>
			)}
		</nav> 
	)
}

const StyledSocialList = styled(SocialList)`
	display: flex;
	justify-content: center;
	font-size: 2em;
	width: 100%;

	${breaks.nav(`
		width: auto;
	`)}

	a {
		display: inline-block;
		height: 1.25em;
		width: 1.25em;
		position: relative;
		overflow: hidden;

		svg {
			display: block;
			height: 100%;
			width: 100%;
			position: relative;
			z-index: 2;
			fill: var(--color);
		}

		&:after {
			content: '';
			display: block;
			position: absolute;
			z-index: 1;
			background: var(--active);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin-top: 100%;
			transition: var(--transitionSpeed);
		}

		/* todo bounce animation here*/
		${breaks.phone(`
			&:hover:after {
				margin-top: 0;
			}
		`)}
	}
`

export default StyledSocialList;