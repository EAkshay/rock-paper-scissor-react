import React from 'react'
import '../css/fotter.css'
import { useDispatch } from 'react-redux/es/exports'
import { ruleClick } from "../features/rules"


const Fotter = () => {
  const dispatch = useDispatch()

  return (
      <div className='fotter'>
      <button onClick={() => { dispatch(ruleClick({ rule: true })) }}>
        RULES
      </button>
    </div>
  )
}

export default Fotter