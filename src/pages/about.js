import React from "react";
import styled from 'styled-components'

import MarkdownBlock from '../components/markdown-block'
// TODO
// import Headshot from '../components/headshot';

export default class About extends React.Component {

	render() {
		return (
			<StyledAbout>
				<MarkdownBlock post={ this.props.data.markdownRemark.html } />
			</StyledAbout>
		)
	}
}

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