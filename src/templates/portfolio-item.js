import React from "react";

import PortfolioGallery from '../components/portfolio-gallery'
import ContentMeta from '../components/content-meta'
import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {

  const post = data.markdownRemark;

  return (
<React.Fragment>
  portfolio item
{/* <main className="page-content page-content-portfolio">

<PortfolioGallery images={post.frontmatter.images} color={post.frontmatter.color} />

<div className="page-content-portfolio__content">
    <header className="page-content-portfolio__header">
        <h1>
            {post.frontmatter.title}
        </h1>

        <ContentMeta tags={post.frontmatter.tags} />

        <a className="" href={post.frontmatter.clienturl} target="_blank">
          {post.frontmatter.client}
        </a>
    </header>

    <MarkdownBlock post={post.html}/>

    {/* <a className="back-link" href="/{{ page.parent }}"> Back to {{ page.parent }}</a> */}

    {/* <cite className="page-content-portfolio__gif-credit">
        Grid Page .gif Credit: <span>{post.frontmatter.gifattribution}</span>
    </cite>
</div>
</main> */}
</React.Fragment>
  );
};

export const postQuery = graphql`
  query PortfolioPost($slug: String!) {

		markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        tags
        color
        gifattribution
        client
        clienturl
        images{
          image
          slidetype
        }
      }
    }
  }
`