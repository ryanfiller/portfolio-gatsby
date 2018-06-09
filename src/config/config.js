import { injectGlobal } from 'styled-components';

injectGlobal`
	/* I don't think I need these anymore */
	/* @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,700,700i"); */
	/* @import url("https://fonts.googleapis.com/css?family=Dosis:300,400,500,700"); */

	html, body {
		padding: 0;
		margin: 0;
	}

	body {
		font-size: 12px;
		font-family: 'Raleway', sans-serif; /* sansSerif */
		font-weight: 300;
		background-color: #1e2223; /* black */
	}
	main, article, aside, blockquote, caption, header, footer {
		display: block;
	}

	* {
		box-sizing: border-box;
	}
`;

module.exports = {

	padding: '2rem',

	fonts: {
		sansSerif: {
			fontFamily: '"Raleway", sans-serif',
			fontWeight: '300'
		},
		condensed: {
			fontFamily: '"Dosis", sans-serif',
			fontWeight: '400'
		}
	},

	colors: {
		white: '#fcfaf6',
		black: '#1e2223',
		blue: '#3f7cac',
		orange: '#f89c7d',
		get gray () {
			return LightenDarkenColor(this.black, 20);
		},
		get grayLight () {
			return LightenDarkenColor(this.gray, 85);
		},
		get grayDark () {
			return LightenDarkenColor(this.gray, -15);
		}
	},

	breaks: {
		large: 1350,
		tablet: 768,
		phone: 430
	},

	padding: '2rem',

	naviconWidth: '40px',

	transition: '.2s',

	container: function container() {
		return `
			padding-left: 2rem;
			padding-right: 2rem;
		`;
	},

	readable: function readable() {
		return `
			max-width: 80rem;
			margin-left: auto;
			margin-right: auto;
		`;
	}
};

// color-blue: #3f7cac;
// color-orange: #f89c7d;
// color-white: #fcfaf6;
// color-black: #1e2223;
// color-gray: lighten($color-black, 10%);
// color-light-gray: lighten($color-gray, 25%);
// color-dark-gray: darken($color-gray, 5%);

function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}