import React from "react";

import PortfolioGallery from '../components/portfolio-gallery'
import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {

  const post = data.markdownRemark;

  return (
    <div>
      <PortfolioGallery {...post} />
      <MarkdownBlock post={post.html}/>
    </div>
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
        color
        images{
          image
        }
      }
    }
  }
`