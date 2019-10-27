import React, { useContext, useEffect, useRef } from 'react'

import styled from 'styled-components'
import { breaks } from '../../config/styles';

import { NavContext } from './layout'

import SkipToContent from './skip-to-content';
import OffCanvas from './off-canvas';
import Overlay from './overlay';
import Header from './header'
import Footer from './footer'

const Page = (props) => {
  
  const nav = useContext(NavContext)

  const clientSideRef = useRef(null)

  useEffect(() => {
    clientSideRef.current.classList.add("client-side-js")
  });

  return (
    <div
      ref={clientSideRef}
      className={`site ${nav.offCanvasOpen === true ? 'open' : ''} ${props.className}`} 
      id="site"
      tabIndex="0"
    >
      <SkipToContent />

      {nav.offCanvasOpen ? <Overlay /> : null}
      {nav.offCanvasOpen ? <OffCanvas /> : null}

      <Header />
      <main id="content">
        {props.pageContent}
      </main>
      <Footer />
    </div>
  )
}

const StyledPage = styled(Page)`
  &#site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #content {
    flex: 1;
    display: flex;
    align-items: center;
  }
`

export default StyledPage;