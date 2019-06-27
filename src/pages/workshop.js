import React from "react";
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import MarkdownBlock from '../components/markdown-block';

export const query = graphql`
	query WorkshopPage {
		markdownRemark( frontmatter: { title: { eq: "workshop" } } ) {
			htmlAst
			frontmatter {
				title
			}
		}
	}
`

const Workshop = (props) => {
	return (
		<MarkdownBlock post={ props.data.markdownRemark.htmlAst } />
	)
}

Workshop.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Workshop;