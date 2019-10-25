import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { breaks, fonts, naviconSize, transition, theme } from '../../config/styles';
import { lighten, transparentize } from 'polished';

const Styles = createGlobalStyle`
	html, body {
		padding: 0;
		margin: 0;
		font-size: 12px;
		${fonts.sansSerif()}
		${props => (
			props.theme.darkNav ? 
			`background-color: ${props => props.theme.dark};`
			:
			`background-color: ${props => props.theme.light};`
		)}
	}

	main, article, aside, blockquote, caption, header, footer {
		display: block;
	}

	* {
		box-sizing: border-box;
		&:focus {
			outline: none;
		}
		&::selection {
			/* background: ${lighten(.30, theme.highlight)}; */
			/* background: ${transparentize(.25, theme.highlight)}; */
			background: ${props => props.theme.highlight};
			color: ${props => props.theme.light};
		}
	}

	noscript#gatsby-noscript {
		width: 100%;
		padding: .25em;
		width: 100%;
		display: block;
		text-align: center;

		${props => (
			`background-color: ${props.theme.active};
			color: ${props.theme.dark};`
		)}
	}	

	img {
    	image-rendering: pixelated !important;
	}

	a {
		transition: ${transition}ms;
	}

	svg, svg * {
		transition: fill ${transition}ms;
	}
	
	.gatsby-resp-image-wrapper img {
		box-shadow: none !important;
	}

	#site {
		position: relative;
		will-change: transform;
		transition: ${transition}ms;

		&.open {
			transform: translateX(-100%) translateX(2rem) translateX(${naviconSize});

			${breaks.phone(`
				transform: translateX(-50vw);
			`)}

			${breaks.tablet(`
				transform: translateX(-33.33vw);
			`)}
		}
	}

	#content {
		background-color: ${props => props.theme.light};
		min-height: 100vh;
		height: auto;
		width: 100vw;
		display: flex;
		flex-direction: column;

		main {
			flex: 1;
			overflow-x: hidden;
			overflow-y: auto;
		}

		${breaks.phone(`
			height: 100vh;
		`)}
	}
`

const GlobalStyles = () => <Styles />

export default GlobalStyles;