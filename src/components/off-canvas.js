import React from "react";
import MediaQuery from 'react-responsive';

import styled from 'styled-components';
import { breaks, colors, navBreak, transition } from '../config/styles';

import Navigation from '../components/navigation'
import Form from '../components/form.js'

export default class OffCanvas extends React.Component {

	render() {
		return (
			<StyledOffCanvas className="off-canvas">
				<MediaQuery query={`(max-width: ${navBreak}px)`}>
					<Navigation handleNavigate={this.props.handleNavigate} />
				</MediaQuery>
				{/* <Form /> */}
			</StyledOffCanvas>
		);
	}
}

const StyledOffCanvas = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	/* transition: ${transition} * 2; */
	position: absolute;
	top: 0;
	left: 100%;
	background-color: ${colors.blue};
	height: 100%;
	width: 33.33vw;
	/* padding: $spacing; */

	@include tablet-break {
		width: 50%;
	}

	@include phone-break {
		align-content: start;
		/* width: calc(100% - ((#{$spacing} * 2) + #{$navicon-width})); */
	}

	& > * {
		width: 100%;
		/* margin-bottom: $spacing; */

		&:last-child {
			margin-bottom: 0;
		}
	}
`