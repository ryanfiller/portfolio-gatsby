import React, { useContext } from "react";

import { LayoutContext } from './layout';

import styled from 'styled-components'
import { breaks, naviconSize } from '../../config/styles';

import Navigation from './navigation';
import Form from '../form';
import { ContactForm } from '../../config/forms';

const OffCanvas = (props) => {

	const layout = useContext(LayoutContext)

	const {
		jsLoaded,
		isMouseMode,
	} = layout

	return (
		<div className={props.className} id="off-canvas">
			{(jsLoaded && !isMouseMode) &&
				<Navigation />
			}
			<Form form={ContactForm} />
		</div>
	);
}

// todo - refactors this to work with focus within for the form
// this won't work in 2% ie11, pre chrome

const StyledOffCanvas = styled(OffCanvas)`
	--background: var(--primary);
	--color: var(--light);

	display: block;
	position: absolute;
	top: 0;
	left: 100%;
	background-color: var(--background);
	height: 100%;
	width: 33.33vw;
	padding: var(--padding);
	font-size: 2rem;
	width: calc(100% - ((var(--padding)) + ${naviconSize}));

	${breaks.phone(`
		width: 50vw;
	`)}

	${breaks.tablet(`
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 33.33vw;
	`)}

	& > * {
		width: 100%;
		margin-bottom: var(--padding);

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export default StyledOffCanvas;