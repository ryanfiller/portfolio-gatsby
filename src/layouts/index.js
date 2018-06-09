import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import OffCanvas from '../components/off-canvas'
import Overlay from '../components/overlay'

import '../styles/styles.scss'

require("typeface-raleway")
require("typeface-dosis")


export default class TemplateWrapper extends React.Component {

	constructor({ data, children }) {
		super({ data, children });
		this.onKeydown = this.onKeydown.bind(this)
		this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeydown)
	}

	onKeydown(e) {
		if (e.keyCode === 27) {
			this.setState({open: false});
		}
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

		if (this.props.location.pathname === '/') {
            var orientation = 'horizontal'
        } else {
			var orientation = 'vertical'
		}
		
		return (
			<main className={this.state.open == false ? `site ${orientation}` : `open site ${orientation}` } id="site">

				<Helmet
					title="ryanfiller.com"
					meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<OffCanvas />

				<div className="site-content">

					{this.state.open ? 
						<Overlay toggleOffCanvas={this.toggleOffCanvas} /> 
						: ''
					}

					<Header toggleOffCanvas={this.toggleOffCanvas} />

					{this.props.children()}

					<Footer />

				</div>

			</main>
		)
	}
}