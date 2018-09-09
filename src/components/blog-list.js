import React, { Component } from 'react'
import Link from 'gatsby-link'

import ContentMeta from './content-meta'

export default class PortfolioBlock extends Component {

	render() {

		return (
			<div className="blog-list">
				{this.props.blog.map(({ node }, index) => (
					<article className="blog-preview">
						<Link to={node.fields.slug}>
							<img className="blog-preview__thumbnail" src={node.frontmatter.thumbnail} alt={node.frontmatter.title}/>
						</Link>
						<div className="blog-preview__content">
							<header className="blog-preview__header">
								<Link to={node.frontmatter.path}>
									{node.frontmatter.title}
								</Link>
							</header>
							<span className="blog-preview__date">
								{node.frontmatter.date}
							</span>
							<p className="blog-preview__excerpt">
								{node.frontmatter.excerpt}
							</p>
							<ContentMeta
								category={node.frontmatter.category}
								tags={node.frontmatter.tags}
							/>
							<Link to={node.frontmatter.path}  className="blog-preview__link">
								Read More
							</Link>
						</div>
					</article>
				))} 
			</div>
		)
	}
}