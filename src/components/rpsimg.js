import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import '../css/rpsimg.css'
import { useEffect, useState } from 'react'

export const RpsList = ({ initImg }) => {
    let rpsimgList = [
        rock,paper,scissors
    ]

    const [winner, setWinner] = useState(false);
    const [lose, setLose] = useState(false);
    const [tie, setTie] = useState(false);

    const randImg = Math.floor(Math.random() * rpsimgList.length)

    
    if ((initImg == 1 && randImg == 1) || (initImg == 3 && randImg == 0) || (initImg == 2 && randImg == 2)) {
        setTie(true);
    } 
    else if ((initImg == 1 && randImg == 0) || (initImg == 2 && randImg == 1) || (initImg == 3 && randImg == 2)) {
        setWinner(true)
    } else {
        setLose(true)
    }
   

    return (
        <div className='main-con'>
            <div className="small-con">
                <h1>YOU PICKED</h1>
                <h1>THE HOUSE PICKED</h1>
            </div>
            <div className="big-con">
                <div className='con-1'>
                    {initImg == 1 ? <div style={{padding:'50px'}} className='g p'><img src={rpsimgList[1]} /></div> : null}
                    {initImg == 3 ? <div style={{padding:'50px'}} className='g r'><img src={rpsimgList[0]} /></div> : null}
                    {initImg == 2 ? <div style={{padding:'50px'}} className='g s'><img src={rpsimgList[2]} /></div> : null}
                </div>
                <div className='con-2'>
                    {randImg == 0 ? <div style={{padding:'50px'}} className='g r'><img src={rpsimgList[0]} /></div> : null}
                    {randImg == 1 ? <div style={{padding:'50px'}} className='g p'><img src={rpsimgList[1]} /></div> : null}
                    {randImg == 2 ? <div style={{padding:'50px'}} className='g s'><img src={rpsimgList[2]} /></div> : null}
                </div>
            </div>
        </div>
    )
}