import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import '../css/rpsimg.css'
import { useEffect, useState } from 'react'
import { Wlt } from './wlt'

export const RpsList = ({ score,setScore,initImg,wincom }) => {
    let rpsimgList = [
        rock,paper,scissors
    ]


    const [winner, setWinner] = useState(false);
    const [lose, setLose] = useState(false);
    const [tie, setTie] = useState(false);

    const randImg = Math.floor(Math.random() * rpsimgList.length)
    const rand2 = randImg;
    const initimg2 = initImg;
    const rand3 = randImg;

    console.log(wincom,rand2)


    return (
        <div className='main-con'>
            <div className="small-con">
                <h1>YOU PICKED</h1>
                <h1 className='ho'>THE HOUSE PICKED</h1>
            </div>
            <div className="big-con">
                <div className='con-1'>
                    {initImg == 2 ? <div style={{padding:'50px'}} className='g p'><img src={rpsimgList[1]} /></div> : null}
                    {initImg == 1 ? <div style={{padding:'50px'}} className='g r'><img src={rpsimgList[0]} /></div> : null}
                    {initImg == 3 ? <div style={{padding:'50px'}} className='g s'><img src={rpsimgList[2]} /></div> : null}
                </div>
                {(rand3 == 1 && wincom == 1 || rand3 == 0 && wincom == 0 || rand3 == 2 && wincom == 2) ? <Wlt gameCon={'GAME TIED'} /> : null}
                {(rand3 == 2 && wincom == 0 || rand3 == 0 && wincom == 1 || rand3 == 1 && wincom == 2) ? <Wlt gameCon={'YOU WIN'} /> : null}
                {(rand3 == 0 && wincom == 2 || rand3 == 1 && wincom == 0 || rand3 == 2 && wincom == 1) ? <Wlt gameCon={'YOU LOSE'} /> : null}
                <div className='con-2'>
                    {randImg == 0 ? <div style={{padding:'50px'}} className='g r'><img src={rpsimgList[0]} /></div> : null}
                    {randImg == 1 ? <div style={{padding:'50px'}} className='g p'><img src={rpsimgList[1]} /></div> : null}
                    {randImg == 2 ? <div style={{padding:'50px'}} className='g s'><img src={rpsimgList[2]} /></div> : null}
                </div>
            </div>
        </div>
    )
}