import React, { Component } from 'react'

import styled from 'styled-components'
import { breaks, padding } from '../config/styles'

import BlogPreview from './blog-preview'

export default class BlogList extends Component {

	render() {

		return (
			<StyledBlogList className="blog-list">
				{this.props.blog.map(({ node }, index) => (
					<BlogPreview article={node} key={index}/>
				))} 
			</StyledBlogList>
		)
	}
}

const StyledBlogList = styled.div`
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