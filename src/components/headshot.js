import React, { Component } from 'react'
import Img from "gatsby-image"

import styled from 'styled-components'

export default class Headshot extends Component {
	render() {
		return (
			<StyledHeadshot className="headshot">
			asdfasdf
				{/* <Img outerWrapperClassName="hover" sizes={this.props.hover.sizes} /> */}
				{/* <Img outerWrapperClassName="regular" sizes={this.props.regular.sizes} /> */}
			</StyledHeadshot>
		)
	}
}

const StyledHeadshot = styled.picture`
	display: inline-block;
	overflow: hidden;
	border-radius: 50%;
	margin: 0;
	width: 100%;
	max-width: 25rem;
	height: auto;

	.hover {
		display: none;
	}

	/* img {
		display: block;
		border-radius: 50%;
		height: 100%;
		width: 100%;
		position: relative;
		z-index: 3;
	} */

	@supports(mix-blend-mode: multiply) {
		background-color: $color-blue;
		position: relative;
		@include image-overlay($pixels);

		&:before {
			transition: $transition;
			z-index: 2;
		}

		.hover {
			display: block;
			position: absolute !important; // gatsby-image override
			top: 0; right: 0; bottom: 0; left: 0;
			z-index: 3;
			pointer-events: none;
		}
		
		.regular {
			mix-blend-mode: hard-light;
			filter: grayscale(100%);
			transition: $transition;
			opacity: .85;
			position: relative;
			z-index: 1;
		}

		&:hover {
			&:before {
			opacity: .5;
			}

			.regular {
			opacity: .75;
			}
		}
	}
`