import { useContext } from 'react'
import GameContext from '../../gameContext.js'

export default function (prop) {
    const value = useContext(GameContext);
    return (
        <div className={prop.className}>
            <h2>攻击</h2>
            <ul></ul>
            <h2>防御</h2>
            <ul></ul>
        </div>
    );
}