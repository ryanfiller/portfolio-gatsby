import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive' // be super careful with this

import RootStyles, { navBreak } from '../../config/styles';
import { navigate } from 'gatsby';

import Page from './page'

export const ThemeOverrideContext = React.createContext();
export const NavContext = React.createContext();
export const LayoutContext = React.createContext();

const Layout = (props) => {
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
  
  // arbitrary size, but is js dependent
  const jsLoaded = useMediaQuery({ query: '(min-width: 0px)' })
  const isMouseMode = useMediaQuery({ query: `(min-width: ${navBreak}px)` })
  
  return (
    <NavContext.Provider value={{
      handleNavigate: handleNavigate,
      closeAndNavigate: closeAndNavigate,
      toggleOffCanvas: toggleOffCanvas,
      offCanvasOpen: offCanvasOpen,
      currentPage: props.location.pathname,
    }}>
      <LayoutContext.Provider value={{
        jsLoaded: jsLoaded,
        isMouseMode: isMouseMode,
      }}>
        <RootStyles />
        <Page pageContent={props.children} />
      </LayoutContext.Provider>
    </NavContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;