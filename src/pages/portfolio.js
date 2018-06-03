import React from 'react'
import Link from 'gatsby-link'
import PortfolioFilter from '../components/portfolio-filter.js'
import PortfolioGrid from '../components/portfolio-grid.js'

const Portfolio = ({ data }) => {

  return (
    <main className="page-content">
    
      <PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>

    </main>
  );
};

export default Portfolio

export const query = graphql`
  query PortfolioListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
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
            backgroundgif
            gifattribution
            category
            tags
            logowhite
          }
        }
      }
    }
  }
`