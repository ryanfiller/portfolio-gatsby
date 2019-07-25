import React from "react";
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import MarkdownBlock from '../components/markdown-block';

export const query = graphql`
	query AboutPage {
		allMdx (
			filter: {
				fileAbsolutePath: { 
					regex: "/about[.]mdx/" 
				}
			}
		) {
			nodes {
				body
			}
		}
	}
`

const About = (props) => {
	
	const post = props.data.allMdx.nodes[0].body

	return (
		<MarkdownBlock post={ post } />
	)
}

About.propTypes = {
    data: PropTypes.object.isRequired,
};

export default About;