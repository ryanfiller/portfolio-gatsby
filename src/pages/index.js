import React from 'react'
import Link from 'gatsby-link'
import PortfolioFilter from '../components/portfolioFilter.js'
import PortfolioGrid from '../components/portfolioGrid.js'

const IndexPage = ({ data }) => {

  return (
    <div>

      <h1>ryan filler</h1>
      <p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

      <PortfolioFilter categories={data.allMarkdownRemark.edges} />
      <PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>
      
    </div>
  );
};

export default IndexPage

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(
      filter: {
        id: { regex: "/portfolio//" },
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
            tags
            logowhite
          }
        }
      }
    }
  }
`
