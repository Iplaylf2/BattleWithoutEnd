import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <h2>当前地图掉落</h2>
            <span>$</span><span>{value}</span>
            <span>EXP</span><span>{value}</span>
            <span>普通</span><span>{value}</span>
            <span>精品</span><span>{value}</span>
            <span>稀有</span><span>{value}</span>
            <span>完美</span><span>{value}</span>
            <span>史诗</span><span>{value}</span>
            <span>传奇</span><span>{value}</span>
        </div>
    );
}