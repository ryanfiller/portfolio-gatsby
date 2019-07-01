import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'styled-components'

import Header from './header'

const Page = (props) => {

  const theme = useContext(ThemeContext)

  return (
    <div>
      <Header />
      {props.pageContent}
    </div>
  )
}

export default Page;