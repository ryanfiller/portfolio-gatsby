import React from "react";
import { graphql } from 'gatsby'

import MarkdownBlock from '../components/markdown-block'

export default class About extends React.Component {

	render() {
		return (
			<MarkdownBlock post={ this.props.data.markdownRemark.htmlAst } />
		)
	}
}

export const query = graphql`
	query AboutPage {
		markdownRemark( frontmatter: { title: { eq: "about" } } ) {
			htmlAst
			frontmatter {
				title
			}
		}
	}
`