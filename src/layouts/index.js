import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.scss'

import Nav from '../components/nav'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="ryanfiller.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header content={data.allMarkdownRemark.edges} />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {/* <img src ="https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/godzilla.jpg?itok=VHTGHzTl" /> */}
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query NavQuery {
  allMarkdownRemark(
    filter: {id: {regex: "/content//"}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
      }
    }
  }
}
`
