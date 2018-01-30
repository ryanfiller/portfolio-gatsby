import React from "react";

export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
      <span>this is using the portfolio item template</span>
      <h1>{post.frontmatter.title}</h1>
      <h1>{post.frontmatter.title}</h1>
      <h1>{post.frontmatter.title}</h1>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query portfolioPostQuery {
    markdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
`;