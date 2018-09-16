import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { animations, colors, fonts, transition } from '../config/styles'

import ContentMeta from './content-meta'

export default class PortfolioBlock extends Component {

	render() {

		return (
			<BlogPreview className="blog-preview">
                <Link to={this.props.article.fields.slug}>
                    <Img outerWrapperClassName="thumbnail" 
                        sizes={this.props.article.frontmatter.thumbnail.image.childImageSharp.sizes} 
                        alt={this.props.article.frontmatter.thumbnail.alt}
                    />
                </Link>
                <div className="content">
                    <header className="header">
                        <Link to={this.props.article.fields.slug}>
                            {this.props.article.frontmatter.title}
                        </Link>
                    </header>
                    <span className="date">
                        {this.props.article.frontmatter.date}
                    </span>
                    <p className="excerpt">
                        {this.props.article.frontmatter.excerpt}
                    </p>
                    <ContentMeta
                        category={this.props.article.frontmatter.category}
                        tags={this.props.article.frontmatter.tags}
                    />
                    <Link to={this.props.article.fields.slug}  
                        className="link">
                        Read More
                    </Link>
                </div>
                {console.log(this.props.article.frontmatter)}
            </BlogPreview>
		)
	}
}

const BlogPreview = styled.article`
    font-size: 1.5rem;
    transition: ${transition};
    color: ${colors.gray};

    .content {
        position: relative;
    }

    .thumbnail {
        /* width: 100%; */
        /* height: auto; */
        margin-bottom: 1rem;

        img {
            width: 100%;
            height: auto !important;
        }
    }

    .header {
        display: block;
        font-size: 1.5em;
        margin-right: 2.75em;
        
        a {
            display: inline;
            font-size: 1em;
            line-height: 1.125em;
            text-align: left;
            ${fonts.sanSerif}
            text-decoration: none;
            color: currentColor;
            ${animations.highlight()}
        }
    }

    .date {
        text-transform: uppercase;
        ${fonts.condensed}
        font-size: 1em;
        line-height: 1em;
        position: absolute;
        top: .80rem;
        right: 0rem;
    }

    .excerpt {
        ${fonts.sanSerif}
        font-size: 1em;
        margin: 1rem 0;
    }

    .meta {
        font-size: .8em;
        ${fonts.condensed}
        margin: 1.5rem 10em 0 0;
    }

    .link {
        color: currentColor;
        ${animations.highlight()}
        ${fonts.inlineLink}
        position: absolute;
        right: 0;
        bottom: 0;
    }
`