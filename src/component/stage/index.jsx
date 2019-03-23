import { useContext } from 'react'
import GameContext from '../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    return <p>{value}</p>
}