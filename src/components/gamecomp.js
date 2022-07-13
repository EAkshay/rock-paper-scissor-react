
import React from 'react'
import '../css/gamecomp.css'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import triangle from '../images/bg-triangle.svg'

const Gamecomp = () => {
  return (
      <div className='gamecomp'>
          <div className="bg-1">
              <div className="g p">
                <img src={paper} alt="paper" />
              </div>
              <div className="g s">
                <img src={scissors} alt="scissors" />
              </div>
          </div>
          <div className="bg-2">
              <div className="g r">
                <img src={rock} alt="rock" />
              </div>
          </div>
          <div className="tr">
              <img src={triangle} alt="" />
          </div>
    </div>
  )
}

export default Gamecomp