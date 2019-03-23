import { useContext, useRef, useState, useEffect, useMemo } from 'react'
import GameContext from '../../gameContext.js'

export default function () {
    const value = useContext(GameContext);
    const render = useState({})[1].bind(null, {});
    const ref = useRef();
    useEffect(() => {
        const li = document.createElement('li');
        li.textContent = value;
        ref.current.appendChild(li);
    });
    const dom = useMemo(() =>
        <div>
            <ul ref={ref}></ul>
        </div>,
        [0]);
    return dom;
}