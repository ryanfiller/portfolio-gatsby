import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Link from 'gatsby-link'
import SVG  from 'react-inlinesvg';

export default class Logo extends Component {
	render() {
		return (
			<Link className="rf-logo" to="/">
				<div className="r"><SVG src="../images/logo/r.svg" /></div>
				<div className="yan"><SVG src="../images/logo/yan.svg" /></div>
				<div className="f"><SVG src="../images/logo/f.svg" /></div>
				<div className="iller"><SVG src="../images/logo/iller.svg" /></div>
			</Link>
		)
	}
}