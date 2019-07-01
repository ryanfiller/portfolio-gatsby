import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import styled from 'styled-components';
import { breaks, naviconWidth, transition, theme } from '../config/styles';

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

	const [match, reset] = useKonamiListener();
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
				<Helmet
					title="ryanfiller.com"
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
					
				<SkipToContent />

				{/* {offCanvasOpen === true ? 
					<OffCanvas 
						color={theme.light}
						active={theme.active}
						background={theme.primary}
					/>
				: null} */}

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
						{props.children}
					</main>

					<Pokemon show={match} reset={reset} />

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

const StyledLayout = styled(Layout)`

	/* TODO WHY ISN'T THIS WORKING HERE?? */
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