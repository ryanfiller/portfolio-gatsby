import React from "react";
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import MarkdownBlock from '../components/markdown-block';

export const query = graphql`
	query AboutPage {
		mdx(frontmatter: { title: { eq: "about" } } ) {
			frontmatter {
				title
			}
			body
		}
	}
`

const About = (props) => {
	
	const post = props.data.mdx.body

	return (
		<MarkdownBlock post={ post } />
	)
}

About.propTypes = {
    data: PropTypes.object.isRequired,
};

export default About;