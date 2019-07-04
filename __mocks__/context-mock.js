import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ThemeOverrideContext, NavContext } from "../src/components/layout/layout.js"
import { defaultTheme } from "../src/config/styles.js"

// const ThemeOverrideContext = React.createContext();
// const NavContext = React.createContext();

const ContextMock = (props) => {
  return (
    <ThemeOverrideContext.Provider value={{
      setTheme: jest.fn(),
		}}>
      <ThemeProvider theme={defaultTheme}>
        <NavContext.Provider value={{
          handleNavigate: jest.fn(),
          closeAndNavigate: jest.fn(),
          toggleOffCanvas: jest.fn(),
          currentPage: 'test',
        }}>
          <>{props.children}</>
        </NavContext.Provider>
      </ThemeProvider>
    </ThemeOverrideContext.Provider>
  )
}

export default ContextMock;