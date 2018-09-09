import React, { Component } from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { functions, padding } from '../config/styles'

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

	${functions.phoneBreak(`
		display: flex;

		& > * {
			flex: 1;
			max-width: 50%;
		}
	`)}

	${functions.tabletBreak(`
		& > * {
			max-width: 33.333vw;
		}
	`)}

	${functions.desktopBreak(`
		& > * {
			max-width: 25%;
		}
	`)}
`