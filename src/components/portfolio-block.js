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
				<svg width="0" height="0">
					<defs>
						<clipPath id="tv-shape">
							<path d="M5,
								5S17.5,
								0,
								36,
								0,
								67,
								5,
								67,
								5s5,
								12.5,
								5,
								31-5,
								31-5,
								31a98.6,
								98.6,
								0,
								0,
								1-31,
								5A98.6,
								98.6,
								0,
								0,
								1,
								5,
								67,
								98.6,
								98.6,
								0,
								0,
								1,
								5,
								5Z"/>
						</clipPath>
					</defs>
				</svg>
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