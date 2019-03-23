import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    return (
        <div>
            <span>宠物</span><span>{value}</span>
            <span>Lv</span><span>{value}</span><span>Exp</span><span>{value}</span>
            <span>HP</span><span>{value}</span>
        </div>
    );
}