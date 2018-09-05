import React from 'react'
import Helmet from 'react-helmet'
import { navigateTo } from "gatsby-link"

import styled, { injectGlobal } from 'styled-components'

import { colors, functions, naviconWidth, transition } from '../config/styles'

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
		// this.onKeydown = this.onKeydown.bind(this)
		this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
		// this.navigateAndClose = this.navigateAndClose.bind(this)
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeydown)
	}

	onKeydown = (e) => {
		if (e.keyCode === 27) {
			this.setState({open: false});
		}
	}

	toggleOffCanvas(e, target='') {
		e.preventDefault();
		this.setState({open: !this.state.open})
		// if (window.location.hash.length) {
		// 	window.history.back()
		// } else {
		// 	window.location.hash = target;
		// }
	}

	// navigateAndClose(e, target) {
	// 	e.preventDefault();
	// 	this.setState({open: false}),
	// 	navigateTo(target);
	// }

	render() {

		// if (this.props.location.pathname === '/') {
        //     var orientation = 'horizontal'
        // } else {
		// 	var orientation = 'vertical'
		// }

		var orientation = 'vertical'
		
		return (
            <StyledSite 
            className={this.state.open === false ? `site ${orientation}` : `open site ${orientation}` } 
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

				<StyledContent className="site-content">

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

				</StyledContent >

			</StyledSite>
		)
	}
}

const StyledSite = styled.div`
	position: relative;
    will-change: transform;
    transition: ${transition};

    &.open {
		transform: 
			translateX(-100%) translateX(2rem) translateX(${naviconWidth});

		${functions.phoneBreak(`
			transform: translateX(-50vw);
		`)}

		${functions.tabletBreak(`
			transform: translateX(-33.33vw);
		`)}
    }
`

const StyledContent = styled.div`
	background-color: ${colors.white};
	min-height: 100vh;
	height: auto;
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	.page-content {
		flex: 1;
		overflow: scroll;
	}

	${functions.phoneBreak(`
		height: 100vh;
	`)}
`