import { injectGlobal } from 'styled-components';

injectGlobal`

  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,700,700i");
  @import url("https://fonts.googleapis.com/css?family=Dosis:300,400,500,700");


  body {
    margin: 0;
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
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
    orange: '#f89c7d'
  },

  container: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  }
};

// $readable-width: 80rem;

// @mixin container {
//     padding-left: $spacing;
//     padding-right: $spacing;
// }

// @mixin readable {
//     @include container;
//     max-width: $readable-width;
//     margin-left: auto;
//     margin-right: auto;
// }


// color-blue: #3f7cac;
// color-orange: #f89c7d;
// color-white: #fcfaf6;
// color-black: #1e2223;
// color-gray: lighten($color-black, 10%);
// color-light-gray: lighten($color-gray, 25%);
// color-dark-gray: darken($color-gray, 5%);