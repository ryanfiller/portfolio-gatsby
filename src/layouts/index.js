import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import '../styles/styles.scss'
import '../config/normalize.css'

import SiteHeader from '../components/siteHeader'
import Footer from '../components/footer'

const TemplateWrapper = ({ data, children }) => (
  <div className="site">

    <Helmet
      title="ryanfiller.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <SiteHeader />

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
