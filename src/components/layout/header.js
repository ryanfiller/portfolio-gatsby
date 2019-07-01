import React, { useContext } from 'react'

import styled, { ThemeContext } from 'styled-components'
import MediaQuery from 'react-responsive'
import { containers, navBreak, padding } from '../../config/styles'

import Logo from '../logo'
import Navigation from './navigation'
import Navicon from './navicon'

const Header = () => {

	const color = null
	const active = null
	const background = null

const theme = useContext(ThemeContext)

	return (
		<StyledHeader theme={theme} id="header">
			<Logo />
			
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
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
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

export default Header