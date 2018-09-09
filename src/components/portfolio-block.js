import React, { Component } from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { colors, fonts, functions, overlays, padding, transition } from '../config/styles'

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
			<StyledPortfolioBlock to={this.props.card.fields.slug}
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
				<div className="logo">
					<img src={this.props.card.frontmatter.logowhite} />
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
        max-width: 30vw;
        max-height: 15vw;

            @include phone-break {
                max-height: 100%;
                max-width: 75%;
            }
        }
    }

    .content {
        text-align: center;
        color: ${colors.white};
        max-height: 0;
        overflow: hidden;
        transition: ${transition};
        font-size: 1.5rem;

        @include tablet-break {
            max-height: none;
            font-size: 1rem;
        }
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
        @include font-sans-serif;

        &:after {
            /* TODO  */
            /* fix this >> */
            content: ' ▸▸';
            display: inline-block;
            position: relative;
        }
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

     /* @supports (clip-path: polygon(0 0, 0 0, 0 0, 0 0)) {
         transition: .2s;
         clip-path: polygon(
             0 0,
             100% 0, 
             100% 100%, 
             0 100%
         );

         &:hover, &:focus {
             clip-path: polygon(
                 1rem 2rem, 
                 calc(100% - 2rem) 1rem, 
                 calc(100% - 1rem) calc(100% - 2rem), 
                 2rem calc(100% - 1rem)
             );
         // clip-path: url(#tv-shape);
         }

         &:nth-child(odd):hover, &:nth-child(odd):focus {
             clip-path: polygon(
                 2rem 1rem, 
                 calc(100% - 1rem) 2rem, 
                 calc(100% - 2rem) calc(100% - 1rem), 
                 2rem calc(100% - 2rem)
             );
         }
     } */
`