import React from 'react'
import Link from 'gatsby-link'

export default () => {
  const mainPages = ['about', 'portfolio', 'blog'];
    return (
      <ul>
        {mainPages.map((page) =>
            <Link className="link" to={page}>{page}</Link>
          )}
      </ul>
    )
  }

// this query works but cannot be used for reasons
export const query = graphql`
  query NavQuery {
    allFile(
      filter: {sourceInstanceName: {regex: "/^content$/"}}
    ) {
      edges {
        node {
          sourceInstanceName
        }
      }
    }
  }
`