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
                        <span>{race.name}</span>
                        <span>{race.name}</span>
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
            if (li !== -1) {
                setAgeIndex(index);
            }
        };

        detail =
            <div>
                <ul
                    onClick={selectAge}
                    className={style.ageList}
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
                </ul>
                <p>{age.value}</p>
                <p>{age.value}</p>
                <p>(升级时增长属性是当前年龄增长的1/4)</p>
                <input type="button" value="确定" onClick={prop.onSelect.bind(null, { raceIndex, ageIndex })} />
            </div>;
    }

    return [
        <h1>战斗无止境</h1>,
        list,
        detail
    ];
}