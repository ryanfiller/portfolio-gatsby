import React from "react";

import MarkdownBlock from '../components/markdown-block'

export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <main className="page-content">
      <span>this is using the blog item template</span>
      <h1>{post.frontmatter.title}</h1>
      <MarkdownBlock post={post.html}/>
    </main>
  );
};

export const postQuery = graphql`
  query BlogPost($path: String!) {
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