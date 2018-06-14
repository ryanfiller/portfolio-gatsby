import React, { Component } from 'react'
import Link from 'gatsby-link'

import ContentMeta from './content-meta'

export default class PortfolioBlock extends Component {

	constructor(props) {
		super(props);
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state = {
			isHovering: false,
		};
	}

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}

	render() {

		let color = {
			color: this.props.card.frontmatter.color,
		};

		let colorAndBackground = {
			color: this.props.card.frontmatter.color,
			backgroundImage: "url(" + this.props.card.frontmatter.backgroundgif + ")",
		};

		return (
			<Link to={this.props.card.frontmatter.path}
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
				style={this.state.isHovering ? colorAndBackground : color}
				className="portfolio-block">
				<div className="portfolio-block__logo">
					<img src={this.props.card.frontmatter.logowhite} />
				</div>
				<div className="portfolio-block__content">
					<h2 className="portfolio-block__title">
						{this.props.card.frontmatter.title}
					</h2>
					<ContentMeta
						category={this.props.card.frontmatter.category}
						tags={this.props.card.frontmatter.tags}
					/>
					<span className="portfolio-block__link">
						Read More
            		</span>
				</div>
			</Link>
		)
	}
}