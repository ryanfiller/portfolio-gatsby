// import React, { useContext } from "react";
import React from "react";

// import { NavContext } from './layout';

// import styled, { ThemeContext } from 'styled-components'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';
import { breaks, navBreak, naviconSize } from '../../config/styles';

// import Navigation from './navigation';
import Form from '../form';
import { ContactForm } from '../../config/forms';

const OffCanvas = (props) => {

	// const theme = useContext(ThemeContext)
	// const nav = useContext(NavContext);

	return (
		<div className={props.className} id="off-canvas">
			<MediaQuery query={`(max-width: ${navBreak}px)`}>
				{/* <Navigation orientation="vertical" navFunction={nav.closeAndNavigate} /> */}
			</MediaQuery>
			<Form form={ContactForm} />
		</div>
	);
}

const StyledOffCanvas = styled(OffCanvas)`
	display: block;
	position: absolute;
	top: 0;
	left: 100%;
	background-color: var(--primary);
	height: 100%;
	width: 33.33vw;
	padding: var(--padding);
	font-size: 2rem;
	width: calc(100% - ((var(--padding)) + ${naviconSize}));

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
		margin-bottom: var(--padding);

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export default StyledOffCanvas;