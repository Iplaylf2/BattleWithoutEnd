import { useState } from 'react'
import GameContext from './gameContext.js'
import Preparation from './phase/Preparation.js'
import Welcome from './phase/welcome.jsx'
import Theme from './phase/theme.jsx'
import Archive from './phase/archive/index.jsx'
import Race from './phase/race.jsx'
import Load from './phase/load.jsx'
import Stage from './stage/index.jsx'

const filing = {
    create(name) {
    },
    read() {
    },
    delete() {
    }
};

const raceTest = [
    {
        name: '人类',
        ageArray: Array(8).fill(0).map((v, i) => (
            {
                value: 10 + i,
                description: '人类'
            }))
    },
    {
        name: '精灵',
        ageArray: Array(8).fill(0).map((v, i) => (
            {
                value: 10 + i,
                description: '精灵'
            }))
    },
    {
        name: '巨人',
        ageArray: Array(8).fill(0).map((v, i) => (
            {
                value: 10 + i,
                description: '巨人'
            }))
    },
    {
        name: '不死',
        ageArray: Array(8).fill(0).map((v, i) => (
            {
                value: 10 + i,
                description: '不死'
            }))
    },
    {
        name: '矮人',
        ageArray: Array(8).fill(0).map((v, i) => (
            {
                value: 10 + i,
                description: '矮人'
            }))
    }
];

export default function () {
    const [stage, nextStage] = useState(Preparation.welcome);

    const onCreate = function (name) {
        filing.create(name);
        nextStage(Preparation.race);
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
        case Preparation.race:
            return <Race source={raceTest} onSelect={onSelect}></Race>;
        case Preparation.load:
            setTimeout(nextStage, 0, Preparation.over);
            return <Load />;
        case Preparation.over:
            return <GameContext.Provider value="test"><Stage /></GameContext.Provider>;
    }
}