import { useContext } from 'react'
import GameContext from '../../gameContext.js'
import style from './petPlate.css'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div
            className={`${prop.className} ${style.wrapper}`}
        >
            <span><span>宠物</span><span>{value}</span></span>
            <span className={style.left2}><span>Lv</span><span>{value}</span><span className={style.left3}>Exp</span><span>{value}</span></span>
            <span><span>HP</span><span>{value}</span></span>
        </div>
    );
}