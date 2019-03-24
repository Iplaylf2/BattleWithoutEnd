import { useState, useMemo } from 'react'
import { careerTouch, careerSelect, ageTouch, ageSelect } from './race.css'

const getLiIndex = function (event) {
    const li = event.target.closest('li');
    return Array.from(li.parentNode.children).indexOf(li);
};

export default function (prop) {
    const [careerIndex, setCareerIndex] = useState(-1);
    const [ageIndex, setAgeIndex] = useState(0);

    const selectCareer = function (event) {
        const index = getLiIndex(event);
        setCareerIndex(index);
    };

    const list = useMemo(() =>
        <ul onClick={selectCareer}>
            {
                prop.source.map((race, index) =>
                    <li
                        className={`${careerTouch} ${index === careerIndex ? careerSelect : ''}`}
                    >
                        <span>{race.name}</span>
                        <span>{race.name}</span>
                    </li>
                )
            }
        </ul>,
        [careerIndex]);

    var detail = null;
    if (careerIndex !== -1) {
        const race = prop.source[careerIndex];
        const age = race.ageArray[ageIndex];

        const selectAge = function (event) {
            const index = getLiIndex(event);
            setAgeIndex(index);
        };

        detail =
            <div>
                <ul onClick={selectAge}>
                    {
                        race.ageArray.map((age, index) =>
                            <li
                                className={`${ageTouch} ${index === ageIndex ? ageSelect : ''}`}
                            >
                                {age.value}
                            </li>
                        )
                    }
                </ul>
                <p>{age.value}</p>
                <p>{age.value}</p>
                <p>(升级时增长属性是当前年龄增长的1/4)</p>
                <input type="button" value="确定" onClick={prop.onSelect.bind(null, { careerIndex, ageIndex })} />
            </div>;
    }

    return [
        <h1>战斗无止境</h1>,
        list,
        detail
    ];
}