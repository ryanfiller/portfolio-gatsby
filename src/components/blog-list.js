import React, { Component } from 'react'
import Link from 'gatsby-link'

import ContentMeta from './content-meta'

export default class PortfolioBlock extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="blog-list">
				{this.props.blog.map(({ node }, index) => (
					<article className="blog-preview">
						<span className="blog-preview__date">
							{node.frontmatter.date}
						</span>
						<header className="blog-preview__header">
							<Link to={node.frontmatter.path}>
								{node.frontmatter.title}
							</Link>
						</header>
						<ContentMeta
							category={node.frontmatter.category}
							tags={node.frontmatter.tags}
						/>
						<p>
							{node.frontmatter.excerpt}
							<Link to={node.frontmatter.path}  className="blog-preview__link">
								Read More
							</Link>
						</p>
					</article>
				))} 
			</div>
		)
	}
}