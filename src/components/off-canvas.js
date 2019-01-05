import React, { useContext } from "react";
import PropTypes from "prop-types";

import { NavContext } from './layout';

import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { theme, breaks, navBreak, naviconWidth, padding } from '../config/styles';

import Navigation from './navigation'
import Form from './contact-form'

const OffCanvas = (props) => {

	const context = useContext(NavContext);
	const {
        closeAndNavigate, 
	} = context;

	return (
		<StyledOffCanvas className="off-canvas">
			<MediaQuery query={`(max-width: ${navBreak}px)`}>
				<Navigation 
					color={theme.light} 
                    active={theme.active}
					background={theme.highlight}
					orientation={'vertical'}
					navFunction={closeAndNavigate}
				/>
			</MediaQuery>
			<Form />
		</StyledOffCanvas>
	);
}

export default OffCanvas;

const StyledOffCanvas = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	left: 100%;
	background-color: ${theme.highlight};
	height: 100%;
	width: 33.33vw;
	padding: ${padding};

	align-items: flex-start;
	width: calc(100% - ((${padding}) + ${naviconWidth}));

	${breaks.phone(`
		align-items: center;
		width: 50%;
	`)}

	${breaks.tablet(`
		width: 33.33vw;
	`)}

	& > * {
		width: 100%;
		margin-bottom: calc(2 * ${padding});

		&:last-child {
			margin-bottom: 0;
		}
	}
`