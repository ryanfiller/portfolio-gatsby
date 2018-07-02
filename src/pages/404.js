import React from 'react'
import Link from 'gatsby-link'

const FourOhFour = () => (
	<main className="page-content error404">
		<h1 className="error404__header">
			<span className="error404__header--code">Error: 404.</span>
			<span className="error404__header--text">The page you were looking for isn't here.</span>
		</h1>
		<ul className="error404-menu">
			<li className="error404-menu__link">
				<Link to="/">Go home</Link>
				</li>
			<li className="error404-menu__link">
				<Link to="/portfolio">See my work</Link>
				</li>
			<li className="error404-menu__link">
			<Link onclick="goBack()">Go back</Link>
			</li>
			<li className="error404-menu__link">
				<Link to="/blog">Read some blogs</Link>
			</li>
			<div className="corner"></div>
			<div className="corner"></div>
			<div className="corner"></div>
			<div className="corner"></div>
			<div className="vertical"></div>
			<div className="horizontal"></div>
		</ul>
	</main>
)

export default FourOhFour
