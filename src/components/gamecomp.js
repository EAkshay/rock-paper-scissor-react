import React, { useState } from 'react'
import '../css/gamecomp.css'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import triangle from '../images/bg-triangle.svg'

const Gamecomp = ({imgHandler}) => {
  return (
      <div className='gamecomp'>
          <div className="bg-1">
              <div className="g p">
                <img imd="1" onClick={imgHandler} src={paper} alt="paper" />
              </div>
              <div  className="g s">
                <img imd="2" onClick={imgHandler} src={scissors} alt="scissors" />
              </div>
          </div>
          <div className="bg-2">
              <div  className="g r">
                <img imd='3' onClick={imgHandler} src={rock} alt="rock" />
              </div>
          </div>
          <div className="tr">
              <img src={triangle} alt="" />
          </div>
    </div>
  )
}

export default Gamecomp