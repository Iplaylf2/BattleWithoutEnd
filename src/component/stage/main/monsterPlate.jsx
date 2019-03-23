import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    return (
        <div>
            <span>怪物</span><span>{value}</span>
            <span>HP</span><span>{value}</span>
            <span>战斗力</span><span>{value}</span>
        </div>
    );
}