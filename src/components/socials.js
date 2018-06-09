import React, { Component } from 'react';
import SVG  from 'react-inlinesvg';

import config from '../config/site-info';

export default class Socials extends Component {

	render() {

		return (
			<ul className="socials">
				{config.socialMedia.map((social) =>
					<li key={social.name}>
					<a 
					className={`social social--${social.name.toLowerCase()}`}
					key={social.name} 
					href={social.url}
					target="_blank"
					style={{color: social.color}}
					>
						<SVG src={`../images/socials/${social.name.toLowerCase()}.svg`}/>
					</a>
					</li>
				)}
			</ul> 
		)
	}
}