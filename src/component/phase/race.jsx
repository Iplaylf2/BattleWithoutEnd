import { useState, useMemo } from 'react'
import style from './race.css'

const getLiIndex = function (event) {
    const li = event.target.closest('li');
    if (li === null) {
        return -1;
    }
    return Array.from(li.parentNode.children).indexOf(li);
};

export default function (prop) {
    const [raceIndex, setRaceIndex] = useState(-1);
    const [ageIndex, setAgeIndex] = useState(0);

    const selectCareer = function (event) {
        const index = getLiIndex(event);
        if (index !== -1) {
            setRaceIndex(index);
            setAgeIndex(0);
        }
    };

    const list = useMemo(() =>
        <ul
            onClick={selectCareer}
            className={style.raceList}
        >
            {
                prop.source.map((race, index) =>
                    <li
                        className={index === raceIndex ? style.raceSelect : ''}
                    >
                        <span>图标</span><span>{race.name}</span>
                    </li>
                )
            }
        </ul>,
        [raceIndex]);

    var detail = null;
    if (raceIndex !== -1) {
        const race = prop.source[raceIndex];
        const age = race.ageArray[ageIndex];

        const selectAge = function (event) {
            const index = getLiIndex(event);
            if (index !== -1) {
                setAgeIndex(index);
            }
        };

        detail = [
            <ul
                onClick={selectAge}
                className={`${style.ageList} ${style.row}`}
            >
                {
                    race.ageArray.map((age, index) =>
                        <li
                            className={index === ageIndex ? style.ageSelect : ''}
                        >
                            {age.value}
                        </li>
                    )
                }
            </ul>,
            <p>{age.description}</p>,
            <p>{age.description}</p>,
            <p>(升级时增长属性是当前年龄增长的1/4)</p>,
            <input type="button" value="确定" onClick={prop.onSelect.bind(null, { raceIndex, ageIndex })} />
        ]
    }

    return [
        <h1>战斗无止境</h1>,
        <div className={style.wrapper}>
            {list}
            <div>
                {detail}
            </div>
        </div>
    ];
}