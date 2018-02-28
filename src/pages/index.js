import React from 'react'
import Link from 'gatsby-link'
import PortfolioFilter from '../components/portfolio-filter.js'
import PortfolioGrid from '../components/portfolio-grid.js'

import Form from '../components/form.js'

const IndexPage = ({ data }) => {

  return (
    <main className="page-content">

      <div className="temporary-about">
        <p>
          I’m a designer, developer, and illustrator living and working in Memphis, Tennessee.      
        </p>
        <p>
          I have a passion for clean designs, stylized illustrations, and an innovative but accessible internet. I do my best to let that show through everything I do.        
        </p>
        <p>
          Get in touch at <a href="mailto:ryanfiller89@gmail.com">ryanfiller89@gmail.com</a>
        </p>
      </div>

      {/* <PortfolioFilter categories={data.allMarkdownRemark.edges} /> */}
      <PortfolioGrid portfolio={data.allMarkdownRemark.edges}/>

    </main>
  );
};

export default IndexPage

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