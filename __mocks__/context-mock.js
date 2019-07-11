import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ThemeOverrideContext, NavContext } from "../src/components/layout/layout.js"
import { defaultTheme } from "../src/config/styles.js"

export const setTheme = jest.fn()
export const handleNavigate = jest.fn()
export const closeAndNavigate = jest.fn()
export const toggleOffCanvas = jest.fn()

const ContextMock = (props) => {
  return (
    <ThemeOverrideContext.Provider value={{
      setTheme: setTheme,
		}}>
      <ThemeProvider theme={props.theme || defaultTheme}>
        <NavContext.Provider value={{
          handleNavigate: handleNavigate,
          closeAndNavigate: closeAndNavigate,
          toggleOffCanvas: toggleOffCanvas,
          currentPage: 'test',
        }}>
          <>{props.children}</>
        </NavContext.Provider>
      </ThemeProvider>
    </ThemeOverrideContext.Provider>
  )
}

export default ContextMock;