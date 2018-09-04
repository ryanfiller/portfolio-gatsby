import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import { navigateTo } from "gatsby-link"

import Header from './header'
import Footer from './footer'
import OffCanvas from './off-canvas'
import Overlay from './overlay'

// import '../styles/styles.scss'

require("typeface-raleway")
require("typeface-dosis")

injectGlobal`
  html, body {
		padding: 0;
		margin: 0;
		font-size: 12px;
	}

	main, article, aside, blockquote, caption, header, footer {
		display: block;
	}

	* {
		box-sizing: border-box;
	}
`


export default class Layout extends React.Component {

	constructor({ data, children }) {
		super({ data, children });
		this.onKeydown = this.onKeydown.bind(this)
		this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
		this.navigateAndClose = this.navigateAndClose.bind(this)
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

	navigateAndClose(e, target) {
		// e.preventDefault();
		// this.setState({open: false}),
		// navigateTo(target);
	}

	render() {

		// if (this.props.location.pathname === '/') {
        //     var orientation = 'horizontal'
        // } else {
		// 	var orientation = 'vertical'
		// }
		
		return (
            <main 
            // className={this.state.open === false ? `site ${orientation}` : `open site ${orientation}` } 
            id="site">

				<Helmet
					title="ryanfiller.com"
					meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' },
					]}
				/>

				{
					this.state.open ? 
                        <OffCanvas navigateAndClose={this.navigateAndClose} 
                        // currentPage={this.props.location.pathname}
                        />
					: ''
				}

				<div className="site-content">

					{
						this.state.open ? 
							<Overlay toggleOffCanvas={this.toggleOffCanvas} /> 
						: ''
					}

                    <Header toggleOffCanvas={this.toggleOffCanvas} navigateAndClose={this.navigateAndClose} 
                    // currentPage={this.props.location.pathname}
                    />

                    <main className="page-content">
                        {this.props.children}
                    </main>

					<Footer />

				</div>

			</main>
		)
	}
}