import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../config/normalize.css'

import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'

const TemplateWrapper = ({ data, children }) => (
  <div className="site" id="site">

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

    <SiteFooter />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
