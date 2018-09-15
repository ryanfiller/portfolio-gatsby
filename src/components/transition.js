/* eslint-disable */

import React from "react"
// import { CSSTransition, TransitionGroup, Transition } from "react-transition-group"
import styled from 'styled-components'

import {
	CSSTransition,
	TransitionGroup,
	Transition as ReactTransition,
  } from "react-transition-group"

import { transition } from '../config/styles'

const timeout = 250
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		right: 0,
		left: 0,
	},
	entered: {
		transition: `${transition}`,
		position: `relative`,
		right: `-100`,
	},
	exiting: {
		transition: `${transition}`,
		position: `relative`,
		left: `-100`,
	},
}

export default class Transition extends React.Component {
	render() {

		return(
			<TransitionGroup>
				<CSSTransition 
					timeout={500000} 
					key={location.pathname}
					classNames="page-content"
					>
					{this.props.children}
				</CSSTransition>
			</TransitionGroup>
		)

		// return(
		// 	<TransitionGroup component="main">
		// 		<ReactTransition className="transition"
		// 		key={this.props.location.pathname}
		// 		timeout={timeout}
		// 		>
		// 		{status => (
		// 			<div
		// 			style={{
		// 				...getTransitionStyles[status],
		// 			}}
		// 			>
		// 				{this.props.children}
		// 			</div>
		// 		)}
		// 		</Transition>
		// 	</TransitionGroup>
		// )

		// return (
		// 	<TransitionGroup component={null}>
		// 		<StyledCSSTransition
		// 		key={location.pathname}
		// 		timeout={transition}
		// 		classNames="fade"
		// 		>
		// 		{status => (
		// 			<React.Fragment>
		// 				{this.props.children}
		// 			</React.Fragment>
		// 		)}
		// 		</StyledCSSTransition>
		// 	</TransitionGroup>
		// )

		// return (
		// 	<StyledCSSTransition
		// 		// in={showValidationMessage}
		// 		appear={true}
		// 		timeout={300}
		// 		classNames="message"
		// 		unmountOnExit 
		// 	>
		// 			{this.props.children}
		// 	</StyledCSSTransition>
		// )
	}
}

// const StyledTransition = styled(Transition)`
// 	&-enter {
// 		opacity: 0;
// 	}
// 	&-active {
// 		opacity: 1;
// 		transition: ${transition};
// 	}
// 	&-exit {
// 		opacity: 1;
// 	}
// 	&-exit-active {
// 		opacity: 0;
// 		transition: ${transition};
// 	}
// `

// const StyledCSSTransition = styled.main`
// 	.message-enter {
// 		opacity: 0.01;
// 		transform: scale(0.9) translateY(50%);
// 	}
// 	.message-enter-active {
// 		opacity: 1;
// 		transform: scale(1) translateY(0%);
// 		transition: all 300ms ease-out;
// 	}
// 	.message-exit {
// 		opacity: 1;
// 		transform: scale(1) translateY(0%);
// 	}
// 	.message-exit-active {
// 		opacity: 0.01;
// 		transform: scale(0.9) translateY(50%);
// 		transition: all 300ms ease-out;
// 	}
// `