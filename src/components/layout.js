import React from 'react'
import Helmet from 'react-helmet'
import { navigate } from "gatsby"

import styled, { injectGlobal } from 'styled-components'
import { colors, fonts, functions, naviconWidth, transition } from '../config/styles'

import Header from '../components/header'
import Footer from '../components/footer'
import OffCanvas from '../components/off-canvas'
import Overlay from '../components/overlay'

export default class Layout extends React.Component {

	constructor({ data, children }) {
		super({ data, children });
		this.handleNavigate = this.handleNavigate.bind(this)
		this.onKeydown = this.onKeydown.bind(this)
		this.toggleOffCanvas = this.toggleOffCanvas.bind(this)
		this.closeAndNavigate = this.closeAndNavigate.bind(this)
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
		// TODO #contact link
	}

	handleNavigate(e) {
		e.preventDefault()
		navigate(`/${e.target.getAttribute("href")}`)
	}

	closeAndNavigate(e) {
		e.preventDefault()
		navigate(`/${e.target.getAttribute("href")}`)
		this.setState({open: !this.state.open})
	}

	render() {

		if (this.props.location.pathname === '/') {
            var orientation = 'horizontal'
        } else {
			var orientation = 'vertical'
		}
		
		const className = this.state.open === false ? `site ${orientation}` : `open site ${orientation}`
		
		return (
            <StyledSite 
            className={className} 
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
						<OffCanvas 
							handleNavigate={this.closeAndNavigate}
							toggleOffCanvas={this.toggleOffCanvas}
                        	currentPage={this.props.location.pathname}
                        />
					: ''
				}

				<StyledContent className="site-content">

					{
						this.state.open ? 
							<Overlay toggleOffCanvas={this.toggleOffCanvas} /> 
						: ''
					}

					<Header 
						handleNavigate={this.handleNavigate} 
						toggleOffCanvas={this.toggleOffCanvas}
                    	currentPage={this.props.location.pathname}
                    />

                    {this.props.children}

					<Footer />

				</StyledContent >

			</StyledSite>
		)
	}
}

injectGlobal`
  	html, body {
		padding: 0;
		margin: 0;
		font-size: 12px;
		background-color: ${colors.black};
		${fonts.sansSerif()}
	}

	main, article, aside, blockquote, caption, header, footer {
		display: block;
	}

	* {
		box-sizing: border-box;
	}
`

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

	${functions.tabletBreak(`
		@supports(display: grid) {
			&.horizontal {
				.site-content {
					display: grid;
					grid-template-columns: 80vw 20vw;
					grid-template-rows: 1fr auto;

					.header, .footer {
						grid-column-start: 2;
						grid-column-end: 3;
						z-index: 10;
						box-shadow: 0px 0px 1.25rem $color-black;
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

				.header {
					flex-wrap: wrap;
					justify-content: center;
					align-items: space-around;

					.rf-logo {
						font-size: 2.5em;

						.r {
							filter: drop-shadow( .25em 0px 0px $color-black ); 
							margin-right: -.7em;
						}
		
						.f {
							transform: rotateY(180deg);
							margin-right: 0;
							margin-left: .15em;
						}
		
						.yan, .iller {
							max-width: 0;
						}
					}

					.nav {
						width: 100%;
						flex: initial;
						display: block;
						text-align: center;

						a {
							display: inline-block;
							margin: .5em;
						}
					}
				}

				.portfolio-grid {
					height: 100vh;
					width: auto;
					display: grid;
					grid-auto-flow: row;
					grid-template-columns: repeat(auto-fill, 50vh);
					grid-template-rows: 50vh 50vh;
					overflow-x: scroll;

					& > * {
						width: 100vh;
						height: 50vh;
						grid-column-end: span 2;

						&:first-child, &:last-child {
							width: 50vh;
							grid-column-end: span 1;
						}

						&:nth-child(odd) {
							grid-row-start: 1;
							grid-row-end: 2;
						}

						&:nth-child(even) {
							grid-row-start: 2;
							grid-row-end: 3;
						}
					}
				}
			
				.footer {
					display: block;

					.copyright {
						text-align: center;
						margin-bottom: 1em;
					}
					
					.socials {
						li {
							flex: 1;
						}
		
						li {
							width: 100%;
						}
					}
				}
			}
		}	
	`)}
`

const StyledContent = styled.div`
	background-color: ${colors.white};
	min-height: 100vh;
	height: auto;
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	main {
		flex: 1;
		overflow: scroll;
	}

	${functions.phoneBreak(`
		height: 100vh;
	`)}
`