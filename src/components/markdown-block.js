import React from 'react';
// import PropTypes from 'prop-types';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from '@mdx-js/react'

import LinkHeader from './mdx/link-header'
import PortfolioHeader from './portfolio-header'
import Image from './mdx/image'

import styled from 'styled-components';
import { animations, breaks, containers, fonts } from '../config/styles'

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const components = {
	h2: LinkHeader,
	Image: Image,
	// pre: CodeBlock,
	PortfolioHeader: PortfolioHeader,
}

const MarkdownBlock = (props) => {

	return (
		<MDXProvider components={components}>
			<article className={props.className}>
				<MDXRenderer>
					{props.post}
				</MDXRenderer>
			</article>
		</MDXProvider>
	)
}

// todo body is really a function?
// MarkdownBlock.propTypes = {
//     post: PropTypes.oneOfType([
//         PropTypes.array.isRequired,
//         PropTypes.object.isRequired,
//     ]),
// };

const StyledMarkdownBlock = styled(MarkdownBlock)`
	font-size: 1.5rem;
	line-height: 1.6em;
	background: var(--background);
	padding-top: calc(3*var(--padding));
	padding-bottom: calc(2*var(--padding));
	${containers.container()};
	${containers.readable()};
	text-align: left;

	& > div {
		height: auto;
		width: 100%;
	}

	p {
		margin: 0;
		margin-bottom: var(--padding);
	}

	/* TODO style header links */
	p a { /* so it doesn't grab h2 headers */
		color: var(--light);
		text-decoration: none;
		border-bottom: 0;
		background: var(--active);

		${breaks.tablet(`
				background: transparent;
				border-bottom: 2px var(--active) dotted;
				${animations.highlight()};
		`)}
	}

	ol {
		list-style: none;
		counter-reset: li;
		li {
				counter-increment: li;

				&:before {
					content: counter(li);
					color: var(--primary);
					position: relative;
					left: -.5em;
				}
		}
	}

	ul {
		list-style: none;

		li {
				&:before {
					content: '\2022';
					color: var(--primary);
					position: relative;
					left: -.5em;
				}
		}
	}
	
	h2 {
		${fonts.condensed()};
		color: var(--primary);
		${fonts.sizes('1.75em', '2em, 2.25em')}
	}
	
	h3 {
		${fonts.condensed()};
		color: var(--highlight);
		${fonts.sizes('1.5em', '2em, 2.5em')}
	}
	
	h4 {
		${fonts.sansSerif()};
		color: var(--highlight);
		font-weight: bold;
		${fonts.sizes('1em', '1em, 1.5em')}
		font-size: 1.5em;
		line-height: 1.5em;
	}
	
	blockquote {
		font-size: 1.125em;
		line-height: 1.75em;
		border-left: 1.5em solid var(--highlight);
		padding-left: .5em;
		margin: 1em 0;
		position: relative;
		color: var(--highlight);
	
		&:before {
				content: '"';
				color: var(--light);
				position: absolute;
				font-size: 4em;
				top: 0.5em;
				left: -0.33em;
				line-height: 0;
				${fonts.condensed()};
		}
	
		cite {
				color: var(--highlight);
				display: block;
				text-align: right;
				margin-top: .75em;
				font-size: .75em;
	
				&:before {
					content: '-';
					margin-right: .5em;
				}
		}
	}

	/* TODO see if it is possible to make a component out of this */
	/* https://using-remark.gatsbyjs.org/custom-components/#mapping-from-generic-html-elements */
	.gatsby-highlight {
		width: calc(100% + var(--padding));
		margin: 0 calc(-.5*var(--padding)) var(--padding) calc(-.5*var(--padding));
		
		pre {
			overflow: scroll;
		}
	}

	iframe {
		margin-bottom: var(--padding);
	}

	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		padding-top: 25px;
		height: 0;
		width: calc(100% + (2 * var(--padding)));
		margin: 0 calc(-1*var(--padding)) var(--padding) calc(-1*var(--padding));

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	/* TODO re-style code block better */

	${require("typeface-cutive-mono")}

	code[class*="language-"],
	pre[class*="language-"] {
		font-family: 'Cutive Mono', monospace;
		font-size: 1em;
		line-height: 1.25;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		-webkit-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		/* background:#2a2734; */
		background: var(--active);
		/* color: #afa0fe */
		color: var(--primary);
	}

	code.language-text {
		background: transparent;
		color: var(--highlight);
	}

	pre[class*="language-"]::selection,
	pre[class*="language-"]::selection,
	code[class*="language-"]::selection,
	code[class*="language-"]::selection,
	pre[class*="language-"]::-moz-selection,
	pre[class*="language-"]::-moz-selection,
	code[class*="language-"]::-moz-selection,
	code[class*="language-"]::-moz-selection {
		text-shadow: none;
		/* background: #6a51e6; */
		background: auto;
	}

	pre[class*="language-"] {
		padding: 1em;
		margin: .5em 0;
		overflow: auto
	}

	:not(pre)>code[class*="language-"] {
		padding: .1em;
		border-radius: .3em
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		/* color: #6c6783 */
		color: var(--light)
	}

	.token.punctuation {
		/* color: #6c6783 */
		color: var(--dark)
	}

	.token.namespace {
		opacity: .7
	}

	.token.tag,
	.token.operator,
	.token.number {
		/* color: #e09142 */
		color: var(--primary)
	}

	.token.property,
	.token.function {
		/* color: #c4b9fe */
		color: var(--primary);
	}

	.token.tag-id,
	.token.selector,
	.token.atrule-id {
		/* color: #eeebff */
	}

	code.language-javascript,
	.token.attr-name {
		/* color: #c4b9fe */
		color: var(--highlight);
	}

	code.language-css,
	code.language-scss,
	.token.boolean,
	.token.string,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.language-scss .token.string,
	.style .token.string,
	.token.attr-value,
	.token.keyword,
	.token.control,
	.token.directive,
	.token.unit,
	.token.statement,
	.token.regex,
	.token.atrule {
		/* color: #fc9 */
		color: var(--primary)
	}

	.token.placeholder,
	.token.variable {
		/* color: #fc9 */
		color: var(--primary)
	}

	.token.deleted {
		text-decoration: line-through
	}

	.token.inserted {
		/* border-bottom: 1px dotted #eeebff; */
		border-bottom: 1px dotted var(--light);
		text-decoration: none
	}

	.token.italic {
		font-style: italic
	}

	.token.important,
	.token.bold {
		font-weight: bold
	}

	.token.important {
		/* color: #c4b9fe */
		color: var(--highlight);
	}

	.token.entity {
		cursor: help
	}

	pre>code.highlight {
		/* outline: 0.4em solid #8a75f5; */
		outline: 0.4em solid var(--primary);
		outline-offset: .4em
	}

	.line-numbers .line-numbers-rows {
		/* border-right-color: #2c2937 */
		border-right-color: var(--primary);
	}

	.line-numbers-rows>span:before {
		/* color: #3c3949 */
		color: var(--primary);
	}

.line-highlight {
		/* background: rgba(224, 145, 66, 0.2); */
		background: var(--highlight);
		/* background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0)) */
		background: linear-gradient(to right, var(--highlight) 70%, var(--highlight))
	}
`

export default StyledMarkdownBlock;