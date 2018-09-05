import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { navigate } from "gatsby"

import { pages } from '../config/config';
import { navBreak } from '../config/styles';

export default class Navigation extends Component {

	handleNavigate(e) {
		e.preventDefault()
		console.log(e.target)
	}

	render() {
		return (
			<nav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<a 
							href={page}
							onClick={(e) => {this.handleNavigate(e)}}
							key={page} 
							data-text={page}
							// className={ this.props.currentPage.includes(page) ? 'active' : '' }
							>
								{page}
							</a>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${navBreak}px)`}>
								<a
								href="#contact-form"
								onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} 
								key={page} 
								data-text={page} 
								id={page} >
									{page}
								</a>
							</MediaQuery>
						)
					}}
				)}
			</nav>
		)
	}
}