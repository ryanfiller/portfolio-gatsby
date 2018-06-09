import React from "react";

import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import config, { breaks, colors } from '../config/config';

import Navigation from '../components/navigation'
import Form from '../components/form.js'

export default class OffCanvas extends React.Component {

	render() {
		return (
			<StyledOverlay className="off-canvas">
				<MediaQuery query={`(max-width: ${breaks.tablet}px)`}>
					<Navigation />
				</MediaQuery>
				<Form />
			</StyledOverlay>
		);
	}
}

const StyledOverlay = styled.div`
	display: none;
	transition: ${config.transition}*2;
	position: absolute;
	top: 0;
	left: 100%;
	width: 33.33vw;
	background-color: ${colors.blue};
	box-sizing: border-box;
	height: 100%;

	@media (max-width: ${breaks.tablet}px) {
		background-color: green;
		width: calc(100% - ((2 * ${config.padding})) - ${config.naviconWidth});
	}

	.open & {
		display: block;
	}
`