import { useContext } from 'react'
import GameContext from '../../gameContext.js'
import style from './playerPlate.css'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div
            className={`${prop.className} ${style.wrapper}`}
        >
            <span className={style.row1}><span>名字</span><span>{value}</span></span>
            <span><span>种族</span><span>{value}</span></span><span><span>力量</span><span>{value}</span></span><span><span>攻击</span><span>{value}</span></span>
            <span><span>年龄</span><span>{value}</span></span><span><span>敏捷</span><span>{value}</span></span><span><span>平衡</span><span>{value}</span></span>
            <span><span>LV</span><span>{value}</span></span><span><span>智力</span><span>{value}</span></span><span><span>暴击</span><span>{value}</span></span>
            <span><span>HP</span><span>{value}</span></span><span><span>意志</span><span>{value}</span></span><span><span>暴击倍数</span><span>{value}</span></span>
            <span><span>MP</span><span>{value}</span></span><span><span>幸运</span><span>{value}</span></span><span><span>防护</span><span>{value}</span></span>
            <span><span>EXP</span><span>{value}</span></span><span><span>AP</span><span>{value}</span></span><span><span>护甲</span><span>{value}</span></span>
            <span><span>金钱</span><span>{value}</span></span><span><span>战斗力</span><span>{value}</span></span><span><span>无视护甲</span><span>{value}</span></span>
        </div>
    );
}