import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {

  return (
    <div>

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      
      <div>
        <Link to="/about/">about</Link>
      </div>
      <div>
        <Link to="/about/">blog</Link>    
      </div>
      <div>
        <Link to="/about/">portfolio</Link>
      </div>   
      <div>
        <Link to="/counter/">counter</Link>
      </div>  
    </div>
  );
};

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
