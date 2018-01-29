import React, { Component } from 'react';
import Link from 'gatsby-link'

const PortfolioList = ({ data }) => {

  return (
    <div>

    <h4>the is the portfolio page</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
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

export default PortfolioList

export const query = graphql`
query PortfolioListQuery {
  allMarkdownRemark(
    filter: {id: {regex: "/work//"}}
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
        fields {
          slug
        }
      }
    }
  }
}
`
