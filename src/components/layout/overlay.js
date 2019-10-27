import React, { useContext, useEffect } from 'react';

import { NavContext } from './layout';

import styled from 'styled-components';
import { overlays } from '../../config/styles';

const Overlay = (props) => {

	const nav = useContext(NavContext);

	useEffect(() => {
		const handleKeydown = (e) => {
			switch(e.which) {
				case 27: // escape key
				nav.toggleOffCanvas()
				break;
	
				default: return; // regular keys
			}
			e.preventDefault();
		}

		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	return (
		<div 
			className={props.className}
			onClick={nav.toggleOffCanvas} 
		/>
	)
}

const StyledOverlay = styled(Overlay)`
	position: absolute !important;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 40;
	transition: var(--transitionSpeed);
	opacity: 0;
	mix-blend-mode: multiply;
	${overlays.dark}
	
	.open & {
			opacity: 1;
			pointer-events: auto;
	}
`

export default StyledOverlay;