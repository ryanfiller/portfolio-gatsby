import React from 'react'
import Helmet from 'react-helmet'
import { navigate } from "gatsby"

import styled, { injectGlobal } from 'styled-components'
import { darken } from 'polished'

import { breaks, containers, fonts, overlays, padding } from '../config/styles'

export default class FourOhFour extends React.Component {
	state = {
		menu: '',
	};
	onKeydown = this.onKeydown.bind(this);
	handleArrows = this.handleArrows.bind(this);

	links = [
		{
			title: 'Go home',
			navigate: () => {
				navigate('/')
			}
		},
		{
			title: 'See my work',
			navigate: () => {
				navigate('/portfolio')
			}
		},
		{
			title: 'Go back',
			navigate: () => {
				window.history.back();
			}
		},
		{
			title: 'Read some blogs',
			navigate: () => {
				navigate('/blog')
			}
		}
	]

	componentDidMount() {
		document.addEventListener('keydown', this.onKeydown)
	}

	setMenu(number) {
		this.setState({
			menu: number,
		})
	}

	onKeydown(e) {
		switch(e.which) {
			case 38:
			this.handleArrows('up');
			break;
			
			case 40:
			this.handleArrows('down');
			break;
			
			case 37:
			this.handleArrows('left');
			break;

			case 39:
			this.handleArrows('right');
			break;

			case 13:
			if(this.state.menu !== '') {
				this.links[this.state.menu].navigate();
			}
			break;

			default: return; // regular keys
		}
		e.preventDefault();
	}

	handleArrows(direction){
		if (this.state.menu === '') {
			this.setState({
				menu: 0,
			})
			return;
		}
		
		if (direction === 'up') {
			this.setState({
				menu: this.state.menu - 2,
			})
		}
		
		if (direction === 'down') {
			this.setState({
				menu: this.state.menu + 2,
			})
		}
		
		if (direction === 'left' && this.state.menu % 2 === 0) {
			this.setState({
				menu: this.state.menu + 1,
			})
		} else if (direction === 'left' && this.state.menu % 2 !== 0) {
			this.setState({
				menu: this.state.menu - 1,
			})
		}
		
		if (direction === 'right' && this.state.menu % 2 === 0) {
			this.setState({
				menu: this.state.menu + 1,
			})
		} else if (direction === 'right' && this.state.menu % 2 !== 0) {
			this.setState({
				menu: this.state.menu - 1,
			})
		}

		if (this.state.menu >= this.links.length) {
			this.setState({
				menu: this.state.menu - this.links.length,
			})
		}

		if (this.state.menu < 0) {
			this.setState({
				menu: this.state.menu + this.links.length,
			})
		}
	}

	handleClick(e, navigate) {
		e.preventDefault()
		navigate()
	}

  	render() {
		const links = this.links;
		
		return (
			<Styled404Page className="page-content">
			
				<Helmet>
					<body className="error404" />
				</Helmet>

				<StyledHeader className="header">
					<span className="code">Error: 404.</span>
					<span className="text">The thing you were looking for isn't here.</span>
				</StyledHeader>
				<StyledMenu>
					{links.map((item, index) => {
						return (
							<li key={index}>
								<a className={ this.state.menu === index ? 'active' : '' }
									href={ item.title }
									onClick={ (e) => {this.handleClick(e, item.navigate)} }
									onMouseOver={ () => {this.setMenu(index)} }
								>
									{ item.title }
								</a>
							</li>
						)
					})}
					<div className="corner"></div>
					<div className="corner"></div>
					<div className="corner"></div>
					<div className="corner"></div>
					<div className="vertical"></div>
					<div className="horizontal"></div>
				</StyledMenu>
			</Styled404Page>
		)
	}
}

require("typeface-vt323")

const border = '.5rem'
const borderColor = '#fffbff'
const borderShadow = '#6b7173'

function gradient() {
	const array = []
	const color = '#6b6bc6'
	const stops = 20

	for (var i = 0; i < stops; i++) {
		var currentPercent = (100 / stops) * i
		var nextPercent = (100 / stops) * (i+1)
		var darkened = darken((currentPercent / 200), color)
		
		array.push(`
			${darkened} ${currentPercent}%, ${darkened} ${nextPercent}%
		`)
	}

	return `
		linear-gradient(
			${array.join(",")}
		);
	`
}

injectGlobal`
	body.error404 {
		#header {
			display: none;
		}
	}
`

const Styled404Page = styled.main`
    font-family: 'VT323', monospace;
    color: white;
    margin: 0;
    padding: 0 ${padding};
    max-width: 100%;
    /* background-image: url("/images/site-assets/2001.gif"); */
    background-image: url("/images/site-assets/grass.gif");
    /* background-image: url('https://media3.giphy.com/media/GC7C2Fi902BDG/giphy.gif'); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    
    ${overlays.rgbPixels}
	${overlays.dark}
`

const StyledHeader = styled.h1`
	margin-bottom: calc(4*${padding});
	text-align: center;
	${fonts.sizes('3rem', '4rem, 4rem')}
	text-shadow: -.075em .075em black;
	line-height: 1.25em;

	.code, .text {
		display: block;
	}

	.code {
		font-size: 1.5em;
		width: 100%;
	}
`

const StyledMenu = styled.ul`
	background-image: ${gradient()}
	box-shadow: inset 0px 0px 0px calc(${border}/2) ${borderShadow};
	align-self: flex-end;
	padding: ${padding};
	display: block;
	position: relative;
	width: 100%;
	${containers.container()}
	${containers.readable()}

	${breaks.phone(`
		display: flex;
		flex-wrap: wrap;
	`)}

	${breaks.tablet(`
		margin-bottom: ${padding};
	`)}

	li {
		width: 100%;
		list-style: none;
		position: relative;
		z-index: 10;
		margin: ${padding} 0;

		${breaks.phone(`
			width: 50%
		`)}

		a {
			cursor: pointer;
			display: inline-block;
			text-decoration: none;
			color: white;
			text-shadow: -.075em .075em black;
			font-size: 2.5em;
			padding-left: calc(4*${padding});

			&:focus, &.active {
				&:before {
					content: '';
					display: block;
					background-image: url("/images/site-assets/ff_pointer.png");
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					image-rendering: pixelated;
					height: calc(3*${padding});
					width: calc(3*${padding});
					position: absolute;
					left: calc(-.125*${padding});
				}
			}
		}
	}

    .corner {
        display: block;
        height: ${border};
        width: ${border};
        position: absolute;
        background-color: ${borderColor};
        box-shadow: calc(${border}/2) calc(${border}/2) ${borderShadow};

        &:nth-of-type(1) {
            top: 0;
            left: 0;
        }
        &:nth-of-type(2) {
            top: 0;
            right: 0;
            transform: rotate(90deg);
        }
        &:nth-of-type(3) {
            bottom: 0;
            right: 0;
            transform: rotate(180deg);
        }
        &:nth-of-type(4) {
            bottom: 0;
            left: 0;
            transform: rotate(270deg);
        }
    }

    .vertical {
        position: absolute;
        top: ${border};
        bottom: ${border};
        left: -${border};
        right: -${border};
        border-left: ${border} solid ${borderColor};
        border-right: ${border} solid ${borderColor};
    }

    .horizontal {
        position: absolute;
        top: -${border};
        bottom: -${border};
        left: ${border};
        right: ${border};
        border-top: ${border} solid ${borderColor};
        border-bottom: ${border} solid ${borderColor};
    }
`
