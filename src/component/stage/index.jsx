import PlayPlate from './main/playerPlate.jsx'
import MonsterPlate from './main/monsterPlate.jsx'
import PetPlate from './main/petPlate.jsx'
import Menu from './main/menu.jsx'
import Message from './main/message.jsx'
import SkillPlate from './main/skillPlate.jsx'
import Gain from './main/gain.jsx'
import style from './stage.css'

export default function () {
    return (
        <div className={style.wrapper}>
            <div className={style.left1}>
                <PlayPlate className={style.left1_left1} />
                <MonsterPlate className={style.left1_right2} />
                <PetPlate className={style.left1_right3} />
            </div>
            <Menu className={style.right2} />
            <div className={style.left3}>
                <Message className={style.left3_left1} />
                <SkillPlate className={style.left3_right2} />
                <Gain className={style.left3_right3} />
            </div>
        </div>
    );
}