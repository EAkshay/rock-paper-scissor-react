import React from 'react'
import close from '../images/icon-close.svg'
import rulesimg from '../images/image-rules.svg' 
import '../css/rulesComp.css'
import { useDispatch } from 'react-redux/es/exports'
import { ruleClick } from "../features/rules"

const RulesComp = () => {
     const dispatch = useDispatch()
   return (
       <div className='rules'>
           <div className='rule-1'>
               <h1>RULES</h1>
               <img onClick={() => {dispatch(ruleClick({rule:false}))}} src={close} alt="closeIcon" />
           </div>
           <img className='img' src={rulesimg} alt="RulesImg" />
     </div>
   )
}
 
 export default RulesComp