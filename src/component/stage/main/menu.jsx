import { useState, useReducer, useMemo } from 'react'
import Inventory from '../panel/inventory.jsx'
import Equipment from '../panel/equipment.jsx'
import PetList from '../panel/petList.jsx'
import SkillList from '../panel/skillList.jsx'
import TitleList from '../panel/titleList.jsx'
import Option from '../panel/option.jsx'
import More from '../panel/more.jsx'
import style from './menu.css'

const menu = [Inventory, Equipment, PetList, SkillList, TitleList, Option, More,]

const getLiIndex = function (event) {
    const li = event.target.closest('li');
    if (li === null) {
        return -1;
    }
    return Array.from(li.parentNode.children).indexOf(li);
};

const reducer = function (state, action) {
    switch (action) {
        case 'left':
            return state - 1;
        case 'right':
            return state + 1;
    }
};

export default function (prop) {
    const [viewCount, dispatchView] = useReducer(reducer, 0);
    const [menuIndex, setMenuIndex] = useState(-1);
    const content = useMemo(
        () =>
            <div className={style.content}>
                {
                    menu.map((Item, index) =>
                        <Item className={index === menuIndex ? style.visible : ''} />
                    )
                }
            </div>,
        [menuIndex]);

    const selectMenu = function (event) {
        const index = getLiIndex(event);
        if (index > 0 && index < 8) {
            setMenuIndex(index - 1);
        }
    }

    return (
        <div
            className={`${prop.className} ${style.wrapper}`}
        >
            <ul
                className={style.row}
                onClick={selectMenu}
            >
                <li
                    className={viewCount > 0 ? '' : style.hidden}
                    onClick={dispatchView.bind(null, 'left')}
                >
                    ←
                </li>
                <li
                    className={`${viewCount > 0 ? style.hidden : ''} ${menuIndex === 0 ? style.select : ''}`}
                >
                    背包
                </li>
                <li
                    className={`${viewCount > 0 ? style.hidden : ''} ${menuIndex === 1 ? style.select : ''}`}
                >
                    装备
                </li>
                <li
                    className={`${viewCount > 1 ? style.hidden : ''} ${menuIndex === 2 ? style.select : ''}`}
                >
                    宠物
                </li>
                <li
                    className={menuIndex === 3 ? style.select : ''}
                >
                    技能
                </li>
                <li
                    className={`${viewCount > 0 ? '' : style.hidden} ${menuIndex === 4 ? style.select : ''}`}
                >
                    称号
                </li>
                <li
                    className={`${viewCount > 1 ? '' : style.hidden} ${menuIndex === 5 ? style.select : ''}`}
                >
                    设置
                </li>
                <li
                    className={`${viewCount > 1 ? '' : style.hidden} ${menuIndex === 6 ? style.select : ''}`}
                >
                    其他
                </li>
                <li
                    className={viewCount > 1 ? style.hidden : ''}
                    onClick={dispatchView.bind(null, 'right')}
                >
                    →
                </li>
            </ul>
            {content}
        </div>
    );
}