import React, { useContext } from 'react'

import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { breaks, containers, navBreak, padding } from '../../config/styles'

import { NavContext } from './layout';

import Logo from '../logo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = (props) => {
	const nav = useContext(NavContext)

	// values={window.testMediaQueryValues} is for testing react-responsive

	return (
		<header className={props.className} id="header">
			<Logo breakpoint={nav.currentPage === '/' ? 'desktop' : 'phone'}/>
			
			<MediaQuery query={`(min-width: ${navBreak}px)`} 
			// values={window.testMediaQueryValues}
			>
				<Navigation orientation={'horizontal'} />
			</MediaQuery>

			<MediaQuery query={`(max-width: ${navBreak - 1}px)`} 
			// values={window.testMediaQueryValues}
			>
				<Navicon />
			</MediaQuery>
		</header>
	)
}

const StyledHeader = styled(Header)`
	${props => (
		props.theme.darkNav ? 
		`background-color: ${props.theme.dark};
		color: ${props.theme.light};`
		:
		`background-color: ${props.theme.light};
		color: ${props.theme.dark};`
	)}
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: calc(${padding} / 2);
	font-size: 3rem;
	${containers.container()}

	${props => breaks.nav(`
		font-size: 2rem;
	`)}
` 

export default StyledHeader