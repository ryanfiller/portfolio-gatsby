import React, { useContext, useLayoutEffect, useRef } from 'react'

import { NavContext } from './layout'

// todo
// import SkipToContent from './skip-to-content';
import OffCanvas from './off-canvas';
import Overlay from './overlay';
import Header from './header'

const Page = (props) => {
  
  const nav = useContext(NavContext)

  const clientSideRef = useRef(null)

  // layout effect wil run before first paint
  useLayoutEffect(() => {
    clientSideRef.current.classList.add("client-side-js")
  }, []);


  return (
    <div
      ref={clientSideRef}
      className={`site ${nav.offCanvasOpen === true ? 'open' : ''} ${props.className}`} 
      id="site"
      tabIndex="0"
    >
      {/* <SkipToContent /> */}

      {nav.offCanvasOpen ? <Overlay /> : null}

      <div id="content">
        {nav.offCanvasOpen ? <OffCanvas /> : null}
        <Header />
        {props.pageContent}
      </div>
    </div>
  )
}

export default Page;