import React from 'react'

import styled from 'styled-components'
import { animations, breaks, containers, fonts } from '../../config/styles';

import SocialsList from '../socials'

const Footer = (props) => {
	return (
		<footer id="footer" className={props.className}>
			<p>
				Copyright 2012 - { new Date().getFullYear() }, 
				Built with <a href="https://www.gatsbyjs.org/">GatbyJS</a> and hosted on <a href="https://www.netlify.com/">Netlify</a>
			</p>
			<SocialsList />
		</footer>
	)
}

const StyledFooter = styled(Footer)`
	/* overrider footer switching for dark mode */
	--background: var(--dark);
	--color: var(--light);
	--footer-padding: calc(var(--padding) / 4);
	background-color: var(--background);    
	color: var(--color);
	display: block;
	font-size: 1rem;
	padding: var(--footer-padding);
	${containers.container()}

	${breaks.nav(`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`)}

	p {
		text-transform: uppercase;
		text-align: center;
		margin: 0;
		margin-bottom: var(--footer-padding);
		${fonts.condensed()}

		${breaks.nav(`
			margin-bottom: 0;
			margin-right: var(--footer-padding);
		`)}
		
		a {
			background: red;
			transition: var(--transitionSpeed);
			color: var(--active);
			text-decoration: none;

			${breaks.tablet(`
					background: transparent;
					border-bottom: 2px var(--active) dotted;
					${animations.highlight()};
			`)}			
		}
	}
	
	${breaks.phone(`
		display: flex;
		justify-content: space-between;
		align-items: center;

		.copyright {
			text-align: left;
		}
	`)}
`

export default StyledFooter;