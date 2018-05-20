import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

import MediaQuery from 'react-responsive';
import { breaks } from '../config/config';

const pages = ['blog', 'about', 'contact']

export default class Navigation extends Component {

	render() {
		return (
			<nav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<a href="" // font tab-index
							onClick={ () => navigateTo(page)} 
							className="nav__link" 
							key={page} 
							data-text={page} 
							activeClassName="active">
								{page}
							</a>
						)
					} else {
						return(
							<MediaQuery query={`(min-width: ${breaks.tablet}px)`}>
								<a href="" // font tab-index
								onClick={(e) => {this.props.toggleOffCanvas(e, '#contact-form')}} 
								className="nav__link" 
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