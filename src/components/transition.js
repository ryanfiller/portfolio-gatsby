import React from "react"

import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { transition } from '../config/styles'

const Transition = (props) => (
	<TransitionGroup 
		id={props.id}
		component={props.component}
		className={props.className}
	>
		<CSSTransition
			key={props.key}
			timeout={3000}
		>
			<div>
				{props.children}
			</div>
		</CSSTransition>
	</TransitionGroup>
)

const StyledTransition = styled(Transition)`
	
	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		opacity: 1;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-exit-active {
		opacity: 0;
	}
`

export default StyledTransition;