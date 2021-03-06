import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <h2>当前地图掉落</h2>
            <ul>
                <li><span>$</span><span>{value}</span></li>
                <li><span>EXP</span><span>{value}</span></li>
                <li><span>普通</span><span>{value}</span></li>
                <li><span>精品</span><span>{value}</span></li>
                <li><span>稀有</span><span>{value}</span></li>
                <li><span>完美</span><span>{value}</span></li>
                <li><span>史诗</span><span>{value}</span></li>
                <li><span>传奇</span><span>{value}</span></li>
            </ul>
        </div>
    );
}