import React from "react";

import MediaQuery from 'react-responsive';
// import { breaks } from '../config/config';

import Navigation from '../components/navigation'
import Form from '../components/form.js'

export default class OffCanvas extends React.Component {

	render() {
		return (
			<div className="off-canvas">
				{/* <MediaQuery query={`(max-width: ${breaks.tablet}px)`}>
					<Navigation navigateAndClose={this.props.navigateAndClose} currentPage={this.props.currentPage} />
				</MediaQuery>
				<Form /> */}
			</div>
		);
	}
}