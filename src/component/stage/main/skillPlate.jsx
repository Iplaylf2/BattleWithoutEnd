import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    return (
        <div>
            <span>攻击</span>
            <ul></ul>
            <span>防御</span>
            <ul></ul>
        </div>
    );
}