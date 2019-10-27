import React from 'react'

import styled from 'styled-components';
import { breakPoints, breaks, colors } from '../../config/styles'

const Image = (props) => {
	const {
		alt,
		src,
		title,
	} = props

	const addParams = (url, params) => {
		const splitUrl = url.split('upload/')
		return `${splitUrl[0]}upload/${params}/${splitUrl[1]}`
	}

	return (
		<figure className={`${props.className} ${props.align}`}>
			<picture>
				{!src.includes('.gif'|| '.svg') &&
					<>
						{props.align === 'full' &&
							<source 
								srcSet={addParams(src, `c_scale,w_${breakPoints.large}`)} 
								media={`(min-width: ${breakPoints.large}px)`} 
							/>
						}
						<source 
							srcSet={addParams(src, `c_scale,w_${breakPoints.tablet}`)} 
							media={`(min-width: ${breakPoints.tablet}px)`} 
						/>
					</>
				}
				<img 
					src={src}
					alt={alt}
					title={title}
				/>
			</picture>
    	{title && <figcaption>{title}</figcaption>}
		</figure>
	)
}

const StyledImage = styled(Image)`
	width: calc(100% + (2 * var(--padding)));
	height: auto;
	margin: 0 -var(--padding) 1em -var(--padding);
	display: block;
	clear: both;

	picture,
	img {
		display: block;
		width: 100%;
		height: auto;
		line-height: 0;
	}

	figcaption {
		font-size: .75em;
		line-height: 1.25;
		padding: .25em .5em;
		background-color: ${colors.grayLight};
	}

	&.center {
		${breaks.phone(`
				margin: 0 auto;
				width: 50%;
		`)}
	}

	&.right {
		${breaks.phone(`
				float: right;
				margin: 0 calc(-1*var(--padding)) var(--padding) var(--padding);
				width: 50%;
		`)}
	}

	&.left {
		${breaks.phone(`
				float: left;
				margin: 0 var(--padding) var(--padding) calc(-1*var(--padding));
				width: 50%;
		`)}
	}

	&.full {
		${breaks.phone(`
				display: block;
				width: calc(100% + (2 * var(--padding)));
				height: auto;
				margin: 0 calc(-1*var(--padding)) var(--padding) calc(-1*var(--padding));
		`)}
	}

	${props => (props.small === 'true' && props.align !== 'full' ? `
		margin: 0 auto 1em auto;
		width: auto;
		max-width: 10em;
		
		${breaks.phone(`
			margin: 0 1em 1em 1em;
		`)}
	` : null)}
`
 
export default StyledImage