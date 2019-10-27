import React from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { createGlobalStyle } from 'styled-components';

import MarkdownBlock from '../components/markdown-block';

export const query = graphql`
	query WorkshopPage {
		mdx(frontmatter: { title: { eq: "workshop" } } ) {
			frontmatter {
				title
			}
			body
		}
	}
`

const Styles = createGlobalStyle`
	:root {
		--dark: maroon;
		--light: pink;
		--primary: orange;
		--active: red;
		--highlight: white;
		--disabled: gray;
	}
`

const Workshop = (props) => {
	return (
		<>
			<Styles />
			<MarkdownBlock post={ props.data.mdx.body } />
		</>
	)
}

Workshop.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Workshop;