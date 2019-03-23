import { useState, useMemo } from 'react'
import { careerTouch, careerSelect, ageTouch, ageSelect } from './career.css'

export default function (prop) {
    const [careerIndex, setCareerIndex] = useState(-1);
    const [ageIndex, setAgeIndex] = useState(0);

    const list = useMemo(() =>
        <ul>
            {
                prop.source.map((career, index) =>
                    <li
                        className={`${careerTouch} ${index === careerIndex && careerSelect}`}
                        onClick={setCareerIndex.bind(null, index)}
                    >
                        <span>{career.name}</span>
                        <span>{career.name}</span>
                    </li>
                )
            }
        </ul>,
        [careerIndex]);

    var detail = null;
    if (careerIndex !== -1) {
        const career = prop.source[careerIndex];
        const age = career.ageArray[ageIndex];
        detail =
            <div>
                <ul>
                    {
                        career.ageArray.map((age, index) =>
                            <li
                                className={`${ageTouch} ${index === ageIndex && ageSelect}`}
                                onClick={setAgeIndex.bind(null, index)}
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