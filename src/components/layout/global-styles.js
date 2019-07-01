import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { breaks, fonts, naviconWidth, transition, theme } from '../../config/styles';
import { lighten, transparentize } from 'polished';

const Styles = createGlobalStyle`
  	html, body {
		padding: 0;
		margin: 0;
		font-size: 12px;
		background-color: ${props => props.theme.dark};
		${fonts.sansSerif()}
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
			transform: translateX(-100%) translateX(2rem) translateX(${naviconWidth});

			${breaks.phone(`
				transform: translateX(-50vw);
			`)}

			${breaks.tablet(`
				transform: translateX(-33.33vw);
			`)}
		}
	}

	#site-content {
		background-color: ${props => props.theme.light};
		min-height: 100vh;
		height: auto;
		width: 100vw;
		overflow: hidden;
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