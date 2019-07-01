import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { ThemeOverrideContext } from '../components/layout/layout'
import { defaultTheme } from '../config/styles';

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

	const context = useContext(ThemeOverrideContext);
	useEffect(() => {
		context.setTheme({
			dark: 'maroon',
			light: 'pink',
			primary: 'orange',
			active: 'red',
			highlight: 'white',
			disabled: 'gray',
		})

		return function cleanup() {
			context.setTheme(defaultTheme)
		}
	})

	return (
		<MarkdownBlock post={ props.data.markdownRemark.htmlAst } />
	)
}

Workshop.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Workshop;