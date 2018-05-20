import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

const pages = ['blog', 'about', 'contact']

export default class Navigation extends Component {
	render() {
		return (
			<nav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<a onClick={ () => navigateTo(page)} className="nav__link" key={page} data-text={page} activeClassName="active">
								{page}
							</a>
						)
					} else {
						return(
							<a href="#contact-form" className="nav__link" key={page} data-text={page} id={page} onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} >
								{page}
							</a>
						)
					}}
				)}
			</nav>
		)
	}
}