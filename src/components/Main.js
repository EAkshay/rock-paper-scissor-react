
import React from 'react'
import Gamecomp from './gamecomp'
import Head from './head'
import '../css/main.css'
import Fotter from './fotter'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { rpsClick } from '../features/rpshandle'
import { useState } from 'react'
import { RpsList } from './rpsimg'

const Main = () => {
  const imgChange = useSelector((states) => states.imgH.value)
  const dispatch = useDispatch();
  const [initImg,setImg] = useState(0)
  const imgHandler = (e) => {
    dispatch(rpsClick({ click: false }))
    setImg(e.target.attributes.imd.value)
    console.log(e.target.attributes.imd.value)
  }

  return (
      <div className='main'>
          <Head />
          {imgChange.click ? <Gamecomp imgHandler={imgHandler} /> : <RpsList initImg={ initImg } /> }
          <Fotter />
    </div>
  )
}

export default Main