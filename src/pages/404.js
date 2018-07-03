import React from 'react'
import { navigateTo } from 'gatsby-link'

export default class FourOhFour extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: '',
		};
		this.onKeydown = this.onKeydown.bind(this);
		this.handleArrows = this.handleArrows.bind(this);
	}

	links = [
		{
			title: 'Go home',
			navigate: () => {
				navigateTo('/')
			}
		},
		{
			title: 'See my work',
			navigate: () => {
				navigateTo('/portfolio')
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
				navigateTo('/blog')
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

  render() {

	const links = this.links;
	
	return (
		<main className="page-content error404">
			<h1 className="error404__header">
				<span className="error404__header--code">Error: 404.</span>
				<span className="error404__header--text">The page you were looking for isn't here.</span>
			</h1>
			<ul className="error404-menu">
				{links.map((item, index) => {
					return (
						<li className="error404-menu__link" key={index}>
							<a className={ this.state.menu === index ? 'active' : '' }
								onClick={ item.navigate }
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
			</ul>
		</main>
	)
  }
};
