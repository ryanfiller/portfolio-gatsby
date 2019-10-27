import React from 'react'

import styled from 'styled-components';
import { overlays } from '../config/styles'

import Image from './mdx/image'

const Banner = (props) => {
	const {
		alt,
    src,
    children
	} = props

	return (
    <header className={props.className}>
      <section className="content">
        {children}
      </section>
      <Image src={src} alt={alt} align="full" />
    </header>
	)
}

const StyledBanner = styled(Banner)`
  position: relative;

  .content {
    padding: var(--padding);
    position: relative;
    ${overlays.pixels}
    ${overlays.dark}
  }


  ${Image} {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    picture * {
      min-width: 100%;
      width: auto;
      min-height: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
 
export default StyledBanner