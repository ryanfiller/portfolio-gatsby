import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import { pages } from '../config/config';
import { breaks } from '../config/styles';

export default class Navigation extends Component {

	render() {
		return (
			<nav className="nav" role="navigation">
				{ pages.map((page) =>
					{if(page != 'contact'){
						return(
							<a 
							href={page}
							onClick={(e) => {this.props.navigateAndClose(e, page)}}
							key={page} 
							data-text={page}
							// className={ this.props.currentPage.includes(page) ? 'active' : '' }
							>
								{page}
							</a>
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