import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import OffCanvas from '../components/off-canvas'

import '../styles/styles.scss'
require("typeface-raleway")
require("typeface-dosis")


class TemplateWrapper extends React.Component {

  constructor({ data, children }) {
    super({ data, children });

    this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
    this.state = {
        open: false,
    };
  }

  toggleOffCanvas(e, target='') {
    e.preventDefault();
    this.setState({open: !this.state.open})
    if (window.location.hash.length) {
      window.history.back()
    } else {
      window.location.hash = target;
    }
  }

  render() {
    return (
      <div className={this.state.open == false ? 'site' : 'site open' } id="site">

        <Helmet
            title="ryanfiller.com"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

        <OffCanvas />

        <div className="site__content">

          <div className="overlay" onClick={this.toggleOffCanvas} />

          <Header toggleOffCanvas={this.toggleOffCanvas}/>

          {this.props.children()}

          <Footer />
        </div>


      </div>
    )
  }
}

export default TemplateWrapper
