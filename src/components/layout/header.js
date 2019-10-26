import React, { useContext } from 'react'

import styled from 'styled-components'
import { breaks, containers } from '../../config/styles'

import { NavContext, LayoutContext } from './layout';

import Logo from '../logo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = (props) => {
	const nav = useContext(NavContext)
	const layout = useContext(LayoutContext)

	const {
		jsLoaded,
		isMouseMode,
	} = layout

		return (
			<header className={props.className} id="header">
				<Logo breakpoint={nav.currentPage === '/' ? 'desktop' : 'phone'}/>

				{!jsLoaded && <Navigation />}

				{jsLoaded &&
					<>
						{isMouseMode &&
							<Navigation />
						}
						{!isMouseMode &&
							<Navicon />
						}
					</>
				}
			</header>
		)
}

const StyledHeader = styled(Header)`
	/* overrider header switching for dark mode */
	--background: var(--dark);
	--color: var(--light);

	display: flex;
	align-items: center;
	justify-content: start;
	flex-direction: column;
	background-color: var(--background);
	color: var(--color);

	padding: calc(var(--padding) / 2);
	font-size: 3rem;
	${containers.container()}

	.client-side-js & {
		flex-direction: row;
		justify-content: space-between;
	}

	${breaks.nav(`
		font-size: 1rem;
		flex-direction: row;
		font-size: 2rem;
		justify-content: space-between;
	`)}
` 

export default StyledHeader