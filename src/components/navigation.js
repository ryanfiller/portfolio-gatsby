import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Link, { navigateTo } from 'gatsby-link';

import { breaks } from '../config/config';
import { pages } from '../config/site-info';

export default class Navigation extends Component {

	render() {
		return (
			<nav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<Link 
							to={ page } 
							key={page} 
							data-text={page} 
							activeClassName="active">
								{page}
							</Link>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
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