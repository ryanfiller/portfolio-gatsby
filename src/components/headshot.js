import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import styled from 'styled-components'
import { breaks, padding, theme, transition } from '../config/styles'

const Headshot = (props) => {
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
				<picture className={`headshot ${props.className}`}>
					<Img Tag={'span'} className="hover" sizes={data.hover.childImageSharp.sizes} />
					<Img Tag={'span'} className="regular" sizes={data.regular.childImageSharp.sizes} />
				</picture>
			)}
		/>
	)
}

const StyledHeadshot = styled(Headshot)`
	display: block;
	overflow: hidden;
	border-radius: 50%;
	margin: ${padding} auto;
	width: 50%;
	height: auto;
	cursor: help;

	.hover {
		display: none;
	}

	span {
		display: block;
	}

	img {
		width: 100%;
	}

	${breaks.phone(`
		width: 25%;
		float: right;
		margin: ${padding};
		margin-right: 0;
	`)}

	@supports(mix-blend-mode: multiply) {
		background-color: ${theme.highlight};
		position: relative;
		transition: ${transition}ms;

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
			transition: ${transition}ms;
			opacity: .85;
			position: relative;
			z-index: 1;
		}

		&:hover {
			background-color: ${theme.active};

			.regular {
				opacity: .75;
			}
		}
	}
`

export default StyledHeadshot;