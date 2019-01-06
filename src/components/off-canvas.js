import React, { useContext } from "react";
import PropTypes from "prop-types";

import { NavContext } from './layout';

import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { theme, breaks, navBreak, naviconWidth, padding } from '../config/styles';

import Navigation from './navigation';
import Form from './form';
import { ContactForm } from '../config/forms';

const OffCanvas = (props) => {

	const context = useContext(NavContext);
	const {
        closeAndNavigate, 
	} = context;

	const {
		color,
		active,
		background,
	} = props;

	const StyledOffCanvas = styled.div`
		display: block;
		position: absolute;
		top: 0;
		left: 100%;
		background-color: ${background};
		height: 100%;
		width: 33.33vw;
		padding: ${padding};
		font-size: 2rem;
		width: calc(100% - ((${padding}) + ${naviconWidth}));

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

	return (
		<StyledOffCanvas className="off-canvas">
			<MediaQuery query={`(max-width: ${navBreak}px)`}>
				<Navigation 
					color={color} 
                    active={active}
					background={background}
					orientation={'vertical'}
					navFunction={closeAndNavigate}
				/>
			</MediaQuery>
			<Form form={ContactForm} />
		</StyledOffCanvas>
	);
}

Navigation.propTypes = {
	color: PropTypes.string.isRequired,
	active: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
};

export default OffCanvas;