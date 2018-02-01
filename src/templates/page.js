import React from "react";

export default ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
      <span>THIS IS A GENERIC PAGE</span>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query pageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;