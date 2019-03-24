import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <span>宠物</span><span>{value}</span>
            <span>Lv</span><span>{value}</span><span>Exp</span><span>{value}</span>
            <span>HP</span><span>{value}</span>
        </div>
    );
}