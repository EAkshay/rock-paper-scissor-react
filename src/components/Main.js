
import React from 'react'
import Gamecomp from './gamecomp'
import Head from './head'
import '../css/main.css'
import Fotter from './fotter'

const Main = () => {
  return (
      <div className='main'>
          <Head />
          <Gamecomp />
          <Fotter />
    </div>
  )
}

export default Main