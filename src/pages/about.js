import React from "react";
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import MarkdownBlock from '../components/markdown-block';

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

const About = (props) => {
	return (
		<MarkdownBlock post={ props.data.markdownRemark.htmlAst } />
	)
}

About.propTypes = {
    data: PropTypes.object.isRequired,
};

export default About;