import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <span>攻击</span>
            <ul></ul>
            <span>防御</span>
            <ul></ul>
        </div>
    );
}