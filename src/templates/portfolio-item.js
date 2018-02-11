import React from "react";

import MarkdownBlock from '../components/markdownBlock'

export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
      
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
      }
    }
  }
`