import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';

const Page = (props) => {
  const {
    pageContent
  } = props;

  return (
    <div>
      <Header 
        color='lightblue'
        active='red'
        background='purple'
      />
      {pageContent}
    </div>
  )
}

export default Page;