import React, { Component } from 'react';
import Link from 'gatsby-link'

const PortfolioList = ({ data }) => {

  return (
    <div>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}

    </div>
  );
};

export default PortfolioList

export const query = graphql`
query PortfolioListQuery {
  allMarkdownRemark(
    filter: {id: {regex: "/portfolio//"}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          _PARENT
          parent
        }
      }
    }
  }
}
`
