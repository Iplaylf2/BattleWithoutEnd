import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <ul className={prop.className}>
            <li>左</li>
            <li>背包</li>
            <li>装备</li>
            <li>宠物</li>
            <li>技能</li>
            <li>称号</li>
            <li>设置</li>
            <li>其他</li>
            <li>右</li>
        </ul>
    );
}