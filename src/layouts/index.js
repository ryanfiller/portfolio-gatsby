import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/styles.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const TemplateWrapper = ({ data, children }) => (
  <div>

    <Helmet
      title="ryanfiller.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />

    <div>
      {children()}
    </div>

    <Footer />
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
