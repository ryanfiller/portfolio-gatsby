import React, { useContext } from 'react'

import { NavContext } from './layout'

import SkipToContent from './skip-to-content';
import OffCanvas from './off-canvas';
import Overlay from './overlay';
import Header from './header'

const Page = (props) => {

  const nav = useContext(NavContext)

  return (
    <div
      className={`site ${nav.offCanvasOpen === true ? 'open' : null} ${props.className}`} 
      id="site"
      tabIndex="0"
    >
      <SkipToContent />

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