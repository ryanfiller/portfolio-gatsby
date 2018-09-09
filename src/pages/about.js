import React from "react";
import styled from 'styled-components'

import MarkdownBlock from '../components/markdown-block'
import Headshot from '../components/headshot';

import Img from "gatsby-image";

export default class About extends React.Component {

	render() {
		return (
			<StyledAbout>
				<MarkdownBlock post={ this.props.data.markdownRemark.html } />
			</StyledAbout>
		)
	}
}

// export const pageQuery = graphql`
//   query HeadshotQuery {
//     headshot: imageSharp(id: { regex: "/headshot.png/" }) {
// 		sizes(maxWidth: 500 ) {
// 		  ...GatsbyImageSharpSizes
// 		}
// 	},
// 	headshotHover: imageSharp(id: { regex: "/headshot-transparent.png/" }) {
// 		sizes(maxWidth: 500 ) {
// 		  ...GatsbyImageSharpSizes
// 		}
// 	}
//   }
// `

export const query = graphql`
	query AboutPage {
		markdownRemark( frontmatter: { title: { eq: "about" } } ) {
			html
			frontmatter {
				title
			}
		}
	}
`

const StyledAbout = styled.main`
	display: flex;
	align-items: center;
`