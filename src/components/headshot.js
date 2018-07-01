import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import Img from "gatsby-image";

export default class Headshot extends Component {
	render() {
		return (
            <figure className="headshot">
                <img src="/images/site-assets/headshot.png" />
            </figure>
		)
	}
}