import React from 'react'
import PropTypes from "prop-types";

import styled from 'styled-components'
import { breaks, padding } from '../config/styles'

import BlogPreview from './blog-preview'

const BlogList = (props) => {
	return (
		<div className={`${props.className} blog-list`}>
			{props.blog.map(({ node }, index) => (
				<BlogPreview article={node} key={index}/>
			))} 
		</div>
	)
}

BlogList.propTypes = {
    blog: PropTypes.array.isRequired,
};

const StyledBlogList = styled(BlogList)`
	width: 100%;
	display: block;
	padding: ${padding};

	& > * {
		width: 100%;
		box-sizing: border-box;
		padding: ${padding};
	}

	${breaks.phone(`
		display: flex;

		& > * {
			flex: 1;
			max-width: 50%;
		}
	`)}

	${breaks.tablet(`
		& > * {
			max-width: 33.333vw;
		}
	`)}

	${breaks.desktop(`
		& > * {
			max-width: 25%;
		}
	`)}
`

export default StyledBlogList;