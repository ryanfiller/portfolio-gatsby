import React, { useContext } from "react";

import { NavContext } from './layout';

import styled, { ThemeContext } from 'styled-components'
import MediaQuery from 'react-responsive';
import { breaks, navBreak, naviconSize, padding } from '../../config/styles';

import Navigation from './navigation';
import Form from '../form';
import { ContactForm } from '../../config/forms';

const OffCanvas = (props) => {

	const theme = useContext(ThemeContext)
	const nav = useContext(NavContext);

	return (
		<div className={props.className} id="off-canvas">
			<MediaQuery query={`(max-width: ${navBreak}px)`}>
				<Navigation 
					color={theme.light} 
					active={theme.active}
					background={theme.primary}
					orientation={'vertical'}
					navFunction={nav.closeAndNavigate}
				/>
			</MediaQuery>
			<Form 
				form={ContactForm}
				color={theme.light} 
				active={theme.highlight}
				background={theme.primary}
			/>
		</div>
	);
}

const StyledOffCanvas = styled(OffCanvas)`
	display: block;
	position: absolute;
	top: 0;
	left: 100%;
	background-color: ${props => props.theme.primary};
	height: 100%;
	width: 33.33vw;
	padding: ${padding};
	font-size: 2rem;
	width: calc(100% - ((${padding}) + ${naviconSize}));

	${breaks.phone(`
		width: 50%;
	`)}

	${breaks.tablet(`
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 33.33vw;
	`)}

	& > * {
		width: 100%;
		margin-bottom: ${padding};

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export default StyledOffCanvas;