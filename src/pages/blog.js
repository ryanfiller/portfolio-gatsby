import React, { Component } from 'react';
import Link from 'gatsby-link'

const BlogList = ({ data }) => {

  return (
    <div>

    <h4>this the the blog list page</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path}>
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}

    </div>
  );
};

export default BlogList

export const query = graphql`
query BlogListQuery {
  allMarkdownRemark(
    filter: {id: {regex: "/blog//"}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          path
        }
      }
    }
  }
}
`
