import React from 'react'
import '../css/head.css'

const Head = () => {
  return (
      <div className='gamehead'>
          <div className="rps">
              <h1>ROCK</h1>
              <h1>PAPER</h1>
              <h1>SCISSORS</h1>
          </div>
          <div className="scorecomp">
              <h3>SCORE</h3>
              <h1>12</h1>
          </div>
      </div>
  )
}

export default Head