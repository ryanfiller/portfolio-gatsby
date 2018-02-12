import React from "react";

import PortfolioGallery from '../components/portfolio-gallery'
import ContentMeta from '../components/content-meta'
import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {

  const post = data.markdownRemark;

  return (
    <main className="page-content page-content-portfolio">
      <PortfolioGallery {...post} />
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
     
      </div>
    </main>
  );
};

export const postQuery = graphql`
  query PortfolioPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        template
        category
        tags
        color
        client
        clienturl
        images{
          image
        }
      }
    }
  }
`