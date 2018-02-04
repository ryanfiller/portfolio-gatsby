import React, { Component } from 'react'
import Link from 'gatsby-link'
import SVG  from 'react-inlinesvg';

import styled from 'styled-components';
import styles, { colors } from '../config/styles.js';

const Logo = styled.div`
  display: block;

  .logo {
    display: block;
  }

  svg {
    width: 100%;
    height: auto;
    fill: ${colors.white};

    &:hover {
      fill: ${colors.orange};
    }
  }
`;

export default class RfLogo extends Component {
  render() {
    return (
      <Logo>
        <Link className="logo" to="/">
          <SVG src="../images/svgs/logo.svg" />
        </Link>
      </Logo>
    )
  }
}