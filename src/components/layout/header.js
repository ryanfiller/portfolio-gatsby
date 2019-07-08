import React, { useContext } from 'react'

import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { containers, navBreak, padding } from '../../config/styles'

import { NavContext } from './layout';

import Logo from '../logo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = (props) => {
	const nav = useContext(NavContext)

	return (
		<header className={props.className} id="header">
			<Logo breakpoint={nav.currentPage === '/' ? 'desktop' : 'phone'}/>
			
			<MediaQuery query={`(min-width: ${navBreak}px)`}>
				<Navigation orientation={'horizontal'} />
			</MediaQuery>

			<MediaQuery query={`(max-width: ${navBreak - 1}px)`}>
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
	font-size: 2rem;
	${containers.container()}
` 

export default StyledHeader