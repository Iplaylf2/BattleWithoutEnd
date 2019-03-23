import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}