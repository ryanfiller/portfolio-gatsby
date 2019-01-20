import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

// import { CSSTransition, TransitionGroup } from "react-transition-group"

import styled, { createGlobalStyle } from 'styled-components';
import { breaks, fonts, naviconWidth, transition, theme } from '../config/styles';
import { lighten, transparentize } from 'polished';

import SkipToContent from './skip-to-content';
import Header from './header';
import Footer from './footer';
import OffCanvas from './off-canvas';
import Overlay from './overlay';
// import Transition from './transition';
import Pokemon from './pokemon';

import useKonamiListener from 'react-hook-konami-code-listener';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

export const NavContext = React.createContext();

const Layout = (props) => {

	const [match ] = useKonamiListener();
	const [offCanvasOpen, setOffCanvasOpen] = useState(false);

	const toggleOffCanvas = (e, target) => {
		e.preventDefault();
		setOffCanvasOpen(!offCanvasOpen);
		
		// TODO use ref to target contact form somehow
		// if (window.location.hash.length) {
		// 	window.history.back()
		// } else {
		// 	window.location.hash = target;
		// }
	}

	const handleNavigate = (e) => {
		e.preventDefault()
		navigate(`/${e.target.getAttribute("href")}`)
	}

	const closeAndNavigate = (e) => {
		e.preventDefault()
		navigate(`/${e.target.getAttribute("href")}`)
		setOffCanvasOpen(false);
	}

	useEffect(() => {
        const handleKeydown = (e) => {
			if (e.keyCode === 27) { // escape key
				setOffCanvasOpen(false);
			}
		}

        document.addEventListener('keydown', handleKeydown);

        return () => {
          document.removeEventListener('keydown', handleKeydown);
        };
	});
	  
	return (
		<NavContext.Provider value={{
			handleNavigate: handleNavigate,
			closeAndNavigate: closeAndNavigate,
			toggleOffCanvas: toggleOffCanvas,
			currentPage: props.location.pathname,
		}}>

			<div 
				className={`site ${offCanvasOpen === true ? 'open' : null} ${props.className}`} 
				id="site"
				tabIndex="0"
			>
				<GlobalStyle />

				<Helmet
					title="ryanfiller.com"
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
					
				<SkipToContent />

				{offCanvasOpen === true ? 
					<OffCanvas 
						color={theme.light}
						active={theme.active}
						background={theme.primary}
					/>
				: null}

				<div id="site-content">

					{offCanvasOpen === true ? 
						<Overlay 
							background={theme.disabled}
						/> 
					: null}

					<Header 
						color={theme.light}
						active={theme.active}
						background={theme.dark}
					/>


					<main id="content">
						{/* <Transition location={props.location}> */}
							{props.children}
						{/* </Transition> */}
					</main>

					<Pokemon show={match} />

					<Footer 
						color={theme.light}
						active={theme.active}
						background={theme.dark}
					/>

				</div>
			</div>
		</NavContext.Provider>
	)
}

Layout.propTypes = {
	children: PropTypes.object.isRequired,
};

const GlobalStyle = createGlobalStyle`
  	html, body {
		padding: 0;
		margin: 0;
		font-size: 12px;
		background-color: ${theme.dark};
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
			background: ${theme.highlight};
			color: ${theme.light};
		}
	}

	img {
    	image-rendering: pixelated !important;
	}

	a {
		transition: ${transition};
	}

	svg, svg * {
		transition: fill ${transition};
	}
	
	.gatsby-resp-image-wrapper img {
		box-shadow: none !important;
	}

	#site {
		position: relative;
		will-change: transform;
		transition: ${transition};

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
		background-color: ${theme.light};
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

const StyledLayout = styled(Layout)`

	/* TODO WHY ISN'T THIS WORKING HERE?? */
	#site {
		position: relative;
		will-change: transform;
		transition: ${transition};

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
		background-color: ${theme.light};
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

export default StyledLayout;