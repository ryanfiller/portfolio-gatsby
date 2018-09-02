import React, { Component } from 'react'
import Img from "gatsby-image";

export default class Headshot extends Component {
	render() {
		return (
            <figure className="headshot">
				<Img outerWrapperClassName="hover" sizes={this.props.hover.sizes} />
				<Img outerWrapperClassName="regular" sizes={this.props.regular.sizes} />
            </figure>
		)
	}
}