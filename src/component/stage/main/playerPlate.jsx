import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <span>名字</span><span>{value}</span>
            <span>种族</span><span>{value}</span><span>力量</span><span>{value}</span><span>攻击</span><span>{value}</span>
            <span>年龄</span><span>{value}</span><span>敏捷</span><span>{value}</span><span>平衡</span><span>{value}</span>
            <span>LV</span><span>{value}</span><span>智力</span><span>{value}</span><span>暴击</span><span>{value}</span>
            <span>HP</span><span>{value}</span><span>意志</span><span>{value}</span><span>暴击倍数</span><span>{value}</span>
            <span>MP</span><span>{value}</span><span>幸运</span><span>{value}</span><span>防护</span><span>{value}</span>
            <span>EXP</span><span>{value}</span><span>AP</span><span>{value}</span><span>护甲</span><span>{value}</span>
            <span>金钱</span><span>{value}</span><span>战斗力</span><span>{value}</span><span>无视护甲</span><span>{value}</span>
        </div>
    );
}