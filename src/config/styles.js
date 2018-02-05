import { injectGlobal } from 'styled-components';

injectGlobal`

  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,700,700i");
  @import url("https://fonts.googleapis.com/css?family=Dosis:300,400,500,700");


  body {
    margin: 0;
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;

    svg, a {
      transition: .2s;
    }
  }
`;

module.exports = {

  transition: '.2s',

  padding: '2rem',

  colors: {
    white: '#fcfaf6',
    black: '#1e2223',
    blue: '#3f7cac',
    orange: '#f89c7d'
  },

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

  breaks: {
    large: '1350px',
    tablet: '1024px',
    phone: '500px'
  },

  container: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },

  readable: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    maxWidth: '80rem',
    marginLeft: 'auto',
    marginRight:' auto'
  },
};

// color-blue: #3f7cac;
// color-orange: #f89c7d;
// color-white: #fcfaf6;
// color-black: #1e2223;
// color-gray: lighten($color-black, 10%);
// color-light-gray: lighten($color-gray, 25%);
// color-dark-gray: darken($color-gray, 5%);

// @mixin font-size($desktop-size: 1.5em, $tablet-size: 1.25em, $phone-size: 1em) {

//   font-size: $desktop-size;
//   line-height: 1.25em;

//   @include tablet-break {
//     font-size: $tablet-size;
//   }

//   @include phone-break {
//     font-size: $phone-size;
//   }
// }