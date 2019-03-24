import { useContext } from 'react'
import GameContext from '../../gameContext.js'
import style from './monsterPlate.css'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div
            className={`${prop.className} ${style.wrapper}`}
        >
            <div><span>怪物</span><span>{value}</span></div>
            <div><span>HP</span><span>{value}</span></div>
            <div><span>战斗力</span><span>{value}</span></div>
        </div>
    );
}