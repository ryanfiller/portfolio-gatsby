/* eslint-disable */

import React from "react"
import { CSSTransition, TransitionGroup, Transition } from "react-transition-group"
import styled from 'styled-components'

import { transition } from '../config/styles'

const timeout = 250
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0
	},
	entered: {
		transition: transition,
		opacity: 1
	},
	exiting: {
		transition: transition,
		opacity: 0
	}
}

export default class Fade extends React.Component {
  render() {
    const { children, location } = this.props

	// return (
	// 	<TransitionGroup component={null}>
	// 		<StyledTransition
	// 		key={location.pathname}
	// 		timeout={transition}
	// 		classNames="fade"
	// 		>
	// 		{status => (
	// 			<React.Fragment>
	// 			{children}
	// 			</React.Fragment>
	// 		)}
	// 		</StyledTransition>
	// 	</TransitionGroup>
	// )

    return (
		<StyledCSSTransition
			// in={showValidationMessage}
			appear={true}
			timeout={300}
			classNames="message"
			unmountOnExit 
		>
				{this.props.children}
		</StyledCSSTransition>
    )
  }
}

const StyledTransition = styled(Transition)`
	&-enter {
		opacity: 0;
	}
	&-active {
		opacity: 1;
		transition: ${transition};
	}
	&-exit {
		opacity: 1;
	}
	&-exit-active {
		opacity: 0;
		transition: ${transition};
	}
`

const StyledCSSTransition = styled.main`
	.message-enter {
		opacity: 0.01;
		transform: scale(0.9) translateY(50%);
	}
	.message-enter-active {
		opacity: 1;
		transform: scale(1) translateY(0%);
		transition: all 300ms ease-out;
	}
	.message-exit {
		opacity: 1;
		transform: scale(1) translateY(0%);
	}
	.message-exit-active {
		opacity: 0.01;
		transform: scale(0.9) translateY(50%);
		transition: all 300ms ease-out;
	}
`