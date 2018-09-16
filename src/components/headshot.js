import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import styled from 'styled-components'

import { colors, functions, overlays, padding, transition } from '../config/styles'

export default () => {
	return (
		<StaticQuery
			query={graphql`
				query Headshot {
					regular: file(
						relativePath: { regex: "/headshot.png/" }
					) {
						childImageSharp {
							sizes(maxWidth: 500) {
								...GatsbyImageSharpSizes
							}
						}
					}
					hover: file(
						relativePath: { regex: "/headshot-transparent.png/" }
					) {
						childImageSharp {
							sizes(maxWidth: 500) {
								...GatsbyImageSharpSizes
							}
						}
					}
				}
			`}
			render={ data => (
				<StyledHeadshot className="headshot">
					<Img outerWrapperClassName="hover" sizes={data.hover.childImageSharp.sizes} />
					<Img outerWrapperClassName="regular" sizes={data.regular.childImageSharp.sizes} />
				</StyledHeadshot>
			)}
		/>
	)
}

const StyledHeadshot = styled.picture`
	display: block;
	overflow: hidden;
	border-radius: 50%;
	margin: ${padding} auto;
	width: 50%;
	height: auto;

	.hover {
		display: none;
	}

	img {
		width: 100%;
	}

	${functions.phoneBreak(`
		width: 25%;
		float: right;
		margin: ${padding};
		margin-right: 0;
	`)}


	@supports(mix-blend-mode: multiply) {
		background-color: ${colors.blue};
		position: relative;
		${overlays.pixels};

		&:before {
			transition: ${transition};
			z-index: 2;
		}

		.hover {
			display: block;
			position: absolute !important; /* gatsby-image override */
			top: 0; right: 0; bottom: 0; left: 0;
			z-index: 3;
			pointer-events: none;
		}
		
		.regular {
			mix-blend-mode: hard-light;
			filter: grayscale(100%);
			transition: ${transition};
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