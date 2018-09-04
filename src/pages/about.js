import React from "react";
import Link from "gatsby-link";
import Headshot from '../components/headshot';

import Img from "gatsby-image";

export default class About extends React.Component {

	render() {

		const { data } = this.props;
		
		return (
			<main className="page-content about-text">
				{/* <Headshot regular={data.headshot} hover={data.headshotHover} /> */}

				<p>
					I am a designer, developer, and illustrator living and working in Memphis, Tennessee.
				</p>
				<p>
					I have experience with print and web design using a wide variety of technologies, and I’ve recently been growing my front end development skills by learning a variety of coding languages. I have also been drawing my entire life and try to pick up illustration work when I can.
				</p>
				<p>
					I have a passion for clean designs, stylized illustrations, and an innovative but accessible internet. I do my best to let that show through everything I do.
				</p>
				<p>
					Outside of working I enjoy watching old movies, reading books and comics, amateur wood working, being terrible at video games, replica prop construction, DIY home automation, keeping tropical fish, and hanging out with my cats and dog.
				</p>
				<p>
					My full resume can be found on my <a href="https://www.linkedin.com/in/ryanfiller/" target="blank">LinkedIn page.</a>
				</p>
			</main>
		)
	}
}

// export const pageQuery = graphql`
//   query HeadshotQuery {
//     headshot: imageSharp(id: { regex: "/headshot.png/" }) {
// 		sizes(maxWidth: 500 ) {
// 		  ...GatsbyImageSharpSizes
// 		}
// 	},
// 	headshotHover: imageSharp(id: { regex: "/headshot-transparent.png/" }) {
// 		sizes(maxWidth: 500 ) {
// 		  ...GatsbyImageSharpSizes
// 		}
// 	}
//   }
// `