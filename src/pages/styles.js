import React from "react";
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import MarkdownBlock from '../components/markdown-block';

export const query = graphql`
	query StylesPage {
		mdx(frontmatter: { title: { eq: "styles" } } ) {
			frontmatter {
				title
			}
			body
		}
	}
`

const Styles = (props) => {
	
	const post = props.data.mdx.body

	return (
		<MarkdownBlock post={ post } />
	)
}

Styles.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Styles;