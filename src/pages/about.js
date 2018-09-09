import React from "react";
import Link from "gatsby-link";

import MarkdownBlock from '../components/markdown-block'
import Headshot from '../components/headshot';

import Img from "gatsby-image";

export default class About extends React.Component {

	render() {
		return (
			<MarkdownBlock post={ this.props.data.markdownRemark.html } />
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