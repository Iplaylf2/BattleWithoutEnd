import { useState } from 'react'
import PresetStage from './stage/PresetStage.js'
import Welcome from './stage/welcome.jsx'
import Theme from './stage/theme.jsx'
import Archive from './stage/archive/index.jsx'
import Career from './stage/career.jsx'

const filing = {
    create(name) {
        alert(name);
    },
    read() {
    },
    delete() {
    }
};

export default function () {
    const [stage, nextStage] = useState(PresetStage.welcome);

    const onCreate = function (name) {
        filing.create(name);
        nextStage(PresetStage.career);
    };

    const onSelect = function ({ careerIndex, ageIndex }) {
        nextStage(PresetStage.play);
    }
    switch (stage) {
        case PresetStage.welcome:
            setTimeout(nextStage, 0, PresetStage.theme);
            return <Welcome></Welcome>;
        case PresetStage.theme:
            return <Theme onStart={nextStage.bind(null, PresetStage.archive)}></Theme>;
        case PresetStage.archive:
            return <Archive source={[]} onCreate={onCreate} onRead={filing.read} onDelete={filing.delete}></Archive>;
        case PresetStage.career:
            return <Career source={[{ name: 'foo', ageArray: [{ value: 10 }] }]} onSelect={onSelect}></Career>
        case PresetStage.play:
            return <p>play</p>
    }
}