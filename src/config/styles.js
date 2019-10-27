import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

// style helpers
// todo move all declarations to var()

export const colors = {
	white: '#fff7ff',
	black: '#1e053f',
	orange: '#ed6554',
	blue: '#192368',
	purple: '#7c1863',
	grayLight: lighten(.30, '#2f323a'),
	gray: lighten(.15, '#2f323a'),
	grayDark: '#2f323a',
}

// delete this theme later
export const theme = {
	dark: colors.black,
	light: colors.white,
	primary: colors.blue,
	active: colors.orange,
	highlight: colors.purple,
	disabled: colors.gray,
}

export const defaultTheme = {
	darkNav: true,
	dark: colors.black,
	light: colors.white,
	primary: colors.blue,
	active: colors.orange,
	highlight: colors.purple,
	disabled: colors.gray,
}

var overlay = (styles) => {
	return `
			position: relative;
					
			> * {
					position: relative; 
					z-index: 2;
			}

			&:before {
					content: '';
					display: block;
					position: absolute;
					top: 0; right: 0; bottom: 0; left: 0;
					z-index: 1;
					${styles}
			}
	`;
}

export const overlays = {
	dark: overlay(`
		background-color: var(--grayDark));
		opacity: .5;
		@supports (mix-blend-mode: multiply) {
			background-color: var(--gray));
			opacity: .25;
			mix-blend-mode: multiply;
		}
	`),

	pixels: overlay(`
			background-image: url(var(--pixels));
			background-size: var(--pixelSize);
	`),

	rgb: overlay(`
			background-image: var(--rgb);
			background-size: var(--pixelSize);
	`),

	rgbPixels: overlay(`
			background-image: url(var(--pixels)), var(--rgb);
			background-size: var(--pixelSize);
	`),

}

export const arrows = (direction='right') => {

	return`
			position: relative;
			padding-right: 1.25em;
			
			&:before, &:after {
					content: '';
					display: block;
					width: 0; 
					height: 0; 
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					border-top: .4em solid transparent;
					border-bottom: .4em solid transparent;
					border-left: .4em solid currentColor;
			}
	
			&:before {
					right: .5em;
			}
	
			&:after {
					right: 0;
			}

			${direction === 'left' ? `
					padding-right: 0;
					padding-left: 1.25em;

					&:before, &:after {
							transform: translateY(-50%) rotate(180deg);
					}

					&:before {
							left: .5em;
					}
			
					&:after {
							left: 0;
					}
			` : null}
	`
}

require("typeface-raleway/index.css")
require("typeface-dosis/index.css")

export const fonts = {
	sansSerif: () => {
		return `
			font-family: 'Raleway', sans-serif;
			font-weight: 300;
		`;
	},

	condensed: () => {
		return `
			font-family: 'Dosis', sans-serif;
			font-weight: 400;
		`;
	},

	inlineLink: (direction='right') => {
		return`
			text-transform: uppercase;
			text-decoration: none;
			position: relative;
			padding-right: 1.25em;
			${arrows(direction)}
		`
	},

	sizes: (small, medium, large) => {
		return `
			@media (min-width: ${breakPoints.phone}px) {
				font-size: ${small}
			}
			@media (min-width: ${breakPoints.tablet}px) {
				font-size: ${medium}
			}
			@media (min-width: ${breakPoints.desktop}px) {
				font-size: ${large}
			}
		`
	}
}


export const transitionSpeed = 200; //ms KEEP THIS ONE

export const breakPoints = {
	large: 1200,
	tablet: 768,
	phone: 480, 
}

export const naviconSize = '40px';
export const navBreak = breakPoints.tablet;

export const breaks = {
	nav: (styles) => {
		return `
			@media (min-width: ${navBreak}px) {
				${styles}
			}
		`
	},
	phone: (styles) => {
		return `
			@media (min-width: ${breakPoints.phone}px) {
				${styles}
			}
		`
	},
	
	tablet: (styles) => {
		return `
			@media (min-width: ${breakPoints.tablet}px) {
				${styles}
			}
		`
	},
	
	desktop: (styles) => {
		return `
			@media (min-width: ${breakPoints.desktop}px) {
				${styles}
			}
		`
	},

	desktopLarge: (styles) => {
		return `
			@media (min-width: ${breakPoints.large}px) {
				${styles}
			}
		`
	}
}

export const darkMode = (styles) => {
	return `
		@media (prefers-color-scheme: dark) {
				${styles}
		}
	`
}

export const containers = {
	container: () => {
		return `
				padding-left: 1rem;
				padding-right: 1rem;
		`;
	},
	readable: () => {
		return `
				max-width: 70rem;
				margin-left: auto;
				margin-right: auto;
		`;
	}
}

export const animations = {

	float: () => {
		return `
			@keyframes float {
				0%, 50%, 100% {
					transform: translateY(0);
				}
				25% {
					transform: translateY(-.125rem);
				}
				75% {
					transform: translateY(.125rem);
				}
			}

			animation: float .5s infinite;
			transition-timing-function: var(--transitionTiming);
		`
	},

	highlight: (
		color = 'var(--active)',
		hoverColor = 'var(--background)',
		backgroundColor = 'var(--active)'
	) => {
		return `
			color: ${color};
			transition: color var(--transitionSpeed), background var(--transitionSpeed);
			background-image: linear-gradient(to right, transparent 51%, ${backgroundColor} 49%);
			background-position: 0;
			background-size: 200%;
	
			&:hover {
				color: ${hoverColor};
				background-image: linear-gradient(to right, transparent 50%, ${backgroundColor} 50%);
				background-position: -100%;
			}
		`
	}
}

// component

const RootStyles = createGlobalStyle`

	/* theme */
	:root {
		--white: #fff7ff;
		--black: #1e053f;
		--orange: #ed6554;
		--blue: #192368;
		--purple: #7c1863;
		--grayLight: ${lighten(.30, '#2f323a')};
		--gray: ${lighten(.15, '#2f323a')};
		--grayDark: #2f323a;

		--dark: var(--black);
		--light: var(--white);
		--primary: var(--blue);
		--active: var(--orange);
		--highlight: var(--purple);
		--disabled: var(--gray);

		--pixelSize: .25rem;
		--pixels: /images/site-assets/screendoor.png;
		--r: rgba(255, 0, 0, .10);
		--g: rgba(0, 255, 0, .10);
		--b: rgba(0, 0, 255, .10);
		--rgb: repeating-linear-gradient(
			to bottom,
			var(--r) calc(0*var(--pixelSize)), var(--r) calc(1*var(--pixelSize)),
			var(--g) calc(1*var(--pixelSize)), var(--g) calc(2*var(--pixelSize)),
			var(--b) calc(2*var(--pixelSize)), var(--b) calc(3*var(--pixelSize))
		);

		/* spacing */

		--padding: 2rem;

		/* animations */

		--transitionSpeed: ${transitionSpeed}ms
		--transitionTiming: 'steps(2, end)',

		/* defaults / themes */

		--background: var(--light);
		--color: var(--dark);

		${darkMode(`
				--background: var(--dark);
				--color: var(--light);
		`)}

		--font: font-family: 'Raleway', sans-serif, font-weight: 300;
	}

	html, 
	body {
		padding: 0;
		margin: 0;
		font-size: 12px;
		${fonts.sansSerif()}
			background-color: var(--background);
			color: var(--color);
	}

	main,
	article,
	aside,
	blockquote,
	caption,
	header,
	footer {
		display: block;
	}

	* {
		box-sizing: border-box;
		&:focus {
			outline: none;
		}
		&::selection {
			background: var(--highlight);
			color: var(--light);
		}
	}

	noscript#gatsby-noscript {
		width: 100%;
		padding: .25em;
		width: 100%;
		display: block;
		text-align: center;
		background-color: var(--active);
		color: var(--dark);
	}	

	img {
			image-rendering: pixelated !important;
	}

	a {
		transition: var(--transitionSpeed);
	}

	svg, svg * {
		transition: fill var(--transitionSpeed);
	}

	#site {
		position: relative;
		will-change: transform;
		transition: var(--transitionSpeed);

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
		background-color: var(--background);
		color: var(--color);
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

export default RootStyles;