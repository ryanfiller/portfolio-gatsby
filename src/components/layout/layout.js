import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../config/styles';
import { navigate } from 'gatsby';

import GlobalStyles from './global-styles'
import Page from './page'

export const ThemeOverrideContext = React.createContext();
export const NavContext = React.createContext();

const Layout = (props) => {

  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

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
  
  return (
    <ThemeOverrideContext.Provider value={{
      setTheme: theme => setCurrentTheme(theme),
		}}>
      <ThemeProvider theme={currentTheme}>
        <>
          <GlobalStyles />
          <NavContext.Provider value={{
            handleNavigate: handleNavigate,
            closeAndNavigate: closeAndNavigate,
            toggleOffCanvas: toggleOffCanvas,
            currentPage: props.location.pathname,
          }}>
            <Page pageContent={props.children} />
          </NavContext.Provider>
        </>
      </ThemeProvider>
    </ThemeOverrideContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;