import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';

import styled from 'styled-components';

import { socialMedia } from '../config/config';
import { icons } from '../images/socials/icons'
import { colors, functions, transition } from '../config/styles';

const Social = ( props ) => {
	return (
	<StyledSocial 
		className={`social social--${props.social.name.toLowerCase()}`}
		key={props.social.name} 
		href={props.social.url}
		style={{color: props.social.color}}
	>
		<SVG src={icons[props.social.name.toLowerCase()]}/>
	</StyledSocial>
	)
}

class SocialsList extends Component {

	render() {
		return (
			<StyledSocialList className="socials-list">
				{socialMedia.map((social) => 
					<li key={social.name}>
						<Social social={social}/>
					</li>
				)}
			</StyledSocialList> 
		)
	}
}

export default SocialsList;

const StyledSocial = styled.a`
	width: 100%;
	position: relative;
	display: block;

	svg {
		display: block;
		height: auto;
		width: 100%;
		position: relative;
		z-index: 2;
		fill: currentColor;

		${functions.phoneBreak(`
			fill: ${colors.white};
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
		transition: ${transition};

		${functions.phoneBreak(`
			display: block;
		`)}
	}

	${functions.phoneBreak(`
		&:hover:after {
			margin-top: 0;
		}
	`)}
`

const StyledSocialList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	
	li {
		position: relative;
		flex: 1;
		width: auto;

		${functions.phoneBreak(`
			width: 2rem;
		`)}
	}
`