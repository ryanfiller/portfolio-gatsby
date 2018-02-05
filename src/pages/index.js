import React from 'react'
import Link from 'gatsby-link'
import PortfolioGrid from '../components/portfolioGrid.js'

const IndexPage = ({ data }) => {

  return (
    <div>

      <h1>ryan filler</h1>
      <p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
      <p>Bibendum | Magna | Tellus</p>

      <PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>
      
    </div>
  );
};

export default IndexPage

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(
      filter: {
        id: { regex: "/work//" },
        frontmatter: { published: { eq: true } }
      },
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            color
            category
          }
        }
      }
    }
  }
`
