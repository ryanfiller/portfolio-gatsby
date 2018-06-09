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
import styled from 'styled-components';
import config, { breaks, colors } from '../config/config';


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
			<StyledSite className={this.state.open == false ? `site ${orientation}` : `open site ${orientation}` } id="site">

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

			</StyledSite>
		)
	}
}

const StyledSite = styled.div`

	position: relative;
    will-change: transform;
    transition: ${config.transition};

    &.open {
        transform: translateX(-33.33vw);

        @media (max-width: ${breaks.tablet}px) {
			transform: 
			translateX(-100%) translateX(${config.padding}) translateX(${config.naviconWidth}) translateX(${config.padding});
        }
    }

	.site-content {
		background-color: ${colors.white};
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.page-content {
			flex: 1;
			overflow: scroll;
		}

		@media (max-width: ${breaks.phone}px) {
			height: auto;
		}
	}

	&.horizontal {
		.site-content {
			background-color: ${colors.black};
		}

		@supports (display: grid) {
			@media (min-width: ${breaks.tablet}px) {
				.site-content {
					display: grid;
					grid-template-columns: 80vw 20vw;
					grid-template-rows: 1fr auto;

					.header, .footer {
						grid-column-start: 2;
						grid-column-end: 3;
						z-index: 10;
						box-shadow: 0px 0px 1.25rem ${colors.black};
					}

					.header {
						grid-row-start: 1;
						grid-row-end: 2;
					}

					.footer {
						grid-row-start: 2;
						grid-row-end: 3;
					}

					.page-content {
						grid-column-start: 1;
						grid-column-end: 2;
						grid-row-start: 1;
						grid-row-end: 3;
						overflow-x: scroll;
					}
				}
			}
		}
	}
`