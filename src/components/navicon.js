import React, { Component } from 'react'

export default class Navicon extends Component {
    render() {
		return (
			<div className="navicon" id="navicon" onClick={this.props.toggleOffCanvas}>
				<span className="navicon__top"></span>
				<span className="navicon__middle"></span>
				<span className="navicon__bottom"></span>
			</div>
		)
    }
}