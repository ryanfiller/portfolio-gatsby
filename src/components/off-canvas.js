import React from "react";
import MediaQuery from 'react-responsive';

import styled from 'styled-components';
import { colors, functions, navBreak, naviconWidth, padding, transition } from '../config/styles';

import Navigation from './navigation'
import Form from './contact-form'

export default class OffCanvas extends React.Component {

	render() {
		return (
			<StyledOffCanvas className="off-canvas">
				<MediaQuery query={`(max-width: ${navBreak}px)`}>
					<Navigation 
						handleNavigate={this.props.handleNavigate} 
						currentPage={this.props.currentPage}
					/>
				</MediaQuery>
				<Form />
			</StyledOffCanvas>
		);
	}
}

const StyledOffCanvas = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* transition: ${transition} * 2; */
	position: absolute;
	top: 0;
	left: 100%;
	background-color: ${colors.blue};
	height: 100%;
	width: 33.33vw;
	padding: ${padding};

	align-content: start;
	width: calc(100% - ((${padding} * 2) + ${naviconWidth}));

	${functions.phoneBreak(`
		align-content: center;
		width: 50%;
	`)}

	${functions.tabletBreak(`
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