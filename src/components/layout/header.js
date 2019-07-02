import React, { useContext } from 'react'

import styled, { ThemeContext } from 'styled-components'
import MediaQuery from 'react-responsive'
import { containers, navBreak, padding } from '../../config/styles'

import { NavContext } from './layout';

import Logo from '../logo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = (props) => {

	const theme = useContext(ThemeContext)
	const color = theme.darkNav ? theme.light : theme.dark;
	const background = theme.darkNav ? theme.dark : theme.light;
	const active = theme.active;

	const nav = useContext(NavContext)

	return (
		<header className={props.className} id="header">
			<Logo
				breakpoint={nav.currentPage === '/' ? 'desktop' : 'phone'}
				color={color} 
				active={active}
				background={background}
			/>
			
			<MediaQuery query={`(min-width: ${navBreak}px)`}>
				<Navigation 
					color={color} 
					active={active}
					background={background}
					orientation={'horizontal'}
				/>
			</MediaQuery>

			<MediaQuery query={`(max-width: ${navBreak - 1}px)`}>
				<Navicon 
						color={color}
						active={active}
				/>
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