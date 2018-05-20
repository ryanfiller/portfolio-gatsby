import React, { Component } from 'react'

export default class Navicon extends Component {
    render() {
		return (
			<div className="navicon" id="navicon" onClick={this.props.toggleOffCanvas}>
				<div className="top"></div>
				<div className="middle"></div>
				<div className="bottom"></div>
			</div>
		)
    }
}
