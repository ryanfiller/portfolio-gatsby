import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive' // be super careful with this

import RootStyles, { navBreak } from '../../config/styles';
import { navigate } from 'gatsby';

import Page from './page'

export const NavContext = React.createContext();
export const LayoutContext = React.createContext();

const Layout = (props) => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

	const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
    
    if (!!props.location.hash) {
      window.history.back()
    }
  }

	const handleNavigate = (e) => {
		e.preventDefault()
    navigate(`/${e.target.getAttribute("href")}`)
    !isMouseMode && setOffCanvasOpen(false);
  }
  
  // arbitrary size, but is js dependent
  const jsLoaded = useMediaQuery({ query: '(min-width: 0px)' })
  const isMouseMode = useMediaQuery({ query: `(min-width: ${navBreak}px)` })
  
  return (
    <NavContext.Provider value={{
      handleNavigate: handleNavigate,
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