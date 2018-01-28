import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {

  console.log(data);

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
