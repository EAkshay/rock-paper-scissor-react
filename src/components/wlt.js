import {useDispatch} from 'react-redux'
import { rpsClick } from '../features/rpshandle'

export const Wlt = ({ gameCon }) => {
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(rpsClick({ click: true }))
    }
    
    return (
        <div className="con-3">
            <h1>{ gameCon }</h1>
            <button onClick={reset}>PLAYAGAIN</button>
        </div>
    )
}