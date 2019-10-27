import React, { useRef } from 'react'

import MediaQuery from 'react-responsive'
import { breakPoints } from '../config/styles'
import { slugify } from '../helpers'

// import { GalleryContext } from '../templates/portfolio-item';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const PortfolioHeader = (props) => {
	
	// const context = useContext(GalleryContext);
	const headerRef = useRef(null);

	const header = props.children.find((child) => child.props.mdxType === 'h2');
	const headerText = header.props.children
	
	const image = props.children.find((child) => child.props.mdxType === 'img');

	// const ownIndex = getOwnHeaderIndex(context.portfolioItems, headerText);

	// let headerPosition

	// if (headerRef.current != null) {
	// 	headerPosition = headerRef.current.offsetTop;
	// }

	// if(Math.abs(context.scroll - headerPosition) <= 50 
	// 	&& context.current !== ownIndex 
	// 	&& context.mode === 'scroll') {
	// 	context.setCurrent(ownIndex)
	// }

	return (
		<React.Fragment>
			<h2 ref={headerRef} id={slugify(headerText)} >
				<a href={`#${slugify(headerText)}`} aria-hidden="true" className="anchor">
					<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
				</a>
				{headerText}
			</h2>
			<MediaQuery query={`(max-width: ${breakPoints.tablet - 1}px)`}>
				<img src={image.props.src} alt={image.props.alt} />
			</MediaQuery>
		</React.Fragment>
	)
}

export default PortfolioHeader;