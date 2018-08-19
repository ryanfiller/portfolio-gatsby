import React from "react";
import Helmet from 'react-helmet'

import ContentMeta from '../components/content-meta';
import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {

	const post = data.markdownRemark;

	return (
		<main className="page-content page-content-blog">
			<header className="blog-banner">
				<div className="blog-banner__text" >
					<h1 className="blog-banner__title" >
						{post.frontmatter.title}
					</h1>
					<ContentMeta
						date={post.frontmatter.date}
						category={post.frontmatter.category}
						tags={post.frontmatter.tags}
					/>
					<p className="blog-banner__excerpt" >
						{post.frontmatter.excerpt}
					</p>
					<a className="blog-banner__scroll-link" href="#content"></a>
				</div>
				<img className="blog-banner__image" src={post.frontmatter.banner} />
			</header>
			
			<section className="page-content-blog__content" id="content">
				<MarkdownBlock post={post.html}/>
			</section>
		</main>
	);
};

export const postQuery = graphql`
	query BlogPost($path: String!) {

		markdownRemark(frontmatter: { path: { eq: $path} }) {
			html
			frontmatter {
				banner 
				title
				date(formatString: "MMM.DD.YY")
				category
				tags
				excerpt
			}
		}
	}
`