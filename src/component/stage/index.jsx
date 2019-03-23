import PlayPlate from './main/playerPlate.jsx'
import MonsterPlate from './main/monsterPlate.jsx'
import PetPlate from './main/petPlate.jsx'
import Menu from './main/menu.jsx'
import Message from './main/message.jsx'
import SkillPlate from './main/skillPlate.jsx'
import Gain from './main/gain.jsx'

export default function () {
    return [
        <PlayPlate />,
        <MonsterPlate />,
        <PetPlate />,
        <Menu />,
        <Message />,
        <SkillPlate />,
        <Gain />
    ];
}