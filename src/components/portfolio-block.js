import React, { Component } from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { arrows, breaks, colors, fonts, overlays, padding, transition } from '../config/styles'

import ContentMeta from './content-meta'

export default class PortfolioBlock extends Component {

	handleMouseHover = this.handleMouseHover.bind(this);
    state = {
        isHovering: false,
    };

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
        // TODO this state is reversed if it loads while you are hovering
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
			backgroundImage: "url(" + this.props.card.frontmatter.backgroundgif.publicURL + ")",
        };

		return (
			<StyledPortfolioBlock to={this.props.card.fields.slug}
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
				style={this.state.isHovering ? colorAndBackground : color}
				className="portfolio-block"
            >
				<div className="logo">
					<img src={this.props.card.frontmatter.logowhite.publicURL} alt="TODO" />
				</div>
				<div className="content">
					<h2 className="title">
						{this.props.card.frontmatter.title}
					</h2>
					<ContentMeta
						category={this.props.card.frontmatter.category}
						tags={this.props.card.frontmatter.tags}
					/>
					<span className="link">
						Read More
            		</span>
				</div>
			</StyledPortfolioBlock>
		)
	}
}

const StyledPortfolioBlock = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: currentColor;
    background-position: center center;
    background-blend-mode: luminosity; //multiply or luminosity?
    background-size: cover;
    padding: ${padding};
    text-decoration: none;
    position: relative;
    overflow: hidden;

    ${overlays.pixels}
    ${overlays.dark}

    .logo {
        flex: 1;
        width: 100%;
        padding: 0 ${padding};
        display: flex;
        align-items: center;
        justify-content: center;

        img {
        width: 100%;
        height: 100%;
        display: block;
        max-height: 100%;
        max-width: 75%;

            ${breaks.phone(`
                max-width: 30vw;
                max-height: 15vw;
            `)}
        }
    }

    .content {
        text-align: center;
        color: ${colors.white};
        max-height: 100%;
        overflow: hidden;
        transition: ${transition};
        font-size: 1rem;

        ${breaks.tablet(`
            max-height: 0;
            font-size: 1.5rem;
        `)}
    }

    .title {
        ${fonts.condensed()}
        text-transform: uppercase;
        text-align: center;
        line-height: 1em;
        margin: calc(${padding}/2) 0;
    }

    .meta {
        line-height: 1.125em;
        display: block;
        margin-bottom: calc(${padding}/2);

        span {
            display: inline-block;
        }
    }

    .link {
        ${fonts.sansSerif()}
        ${arrows()}
    }
	
    &:before {
        opacity: 0;
        transition: 0s;
    }

    &:hover, &:focus {  
        cursor: pointer; 
        box-shadow: inset 0px 0px 5rem ${colors.black};
        &:before {
            opacity: .5;
        }
        .content {
            max-height: 100%;
        }
    }
`