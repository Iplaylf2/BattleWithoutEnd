import { useState } from 'react'
import GameContext from './gameContext.js'
import Preparation from './phase/Preparation.js'
import Welcome from './phase/welcome.jsx'
import Theme from './phase/theme.jsx'
import Archive from './phase/archive/index.jsx'
import Career from './phase/career.jsx'
import Load from './phase/load.jsx'
import Stage from './stage/index.jsx'

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
    const [stage, nextStage] = useState(Preparation.over);

    const onCreate = function (name) {
        filing.create(name);
        nextStage(Preparation.career);
    };

    const onSelect = function ({ careerIndex, ageIndex }) {
        nextStage(Preparation.load);
    }
    switch (stage) {
        case Preparation.welcome:
            setTimeout(nextStage, 0, Preparation.theme);
            return <Welcome />;
        case Preparation.theme:
            return <Theme onStart={nextStage.bind(null, Preparation.archive)}></Theme>;
        case Preparation.archive:
            return <Archive source={[]} onCreate={onCreate} onRead={filing.read} onDelete={filing.delete}></Archive>;
        case Preparation.career:
            return <Career source={[{ name: 'foo', ageArray: [{ value: 10 }] }]} onSelect={onSelect}></Career>;
        case Preparation.load:
            setTimeout(nextStage, 0, Preparation.over);
            return <Load />;
        case Preparation.over:
            return <GameContext.Provider value="test"><Stage /></GameContext.Provider>;
    }
}