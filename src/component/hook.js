import { useState } from 'react'

export const useStateWithLast = function (state) {
    const [last, setLast] = useState(state);
    const [current, setCurrent] = useState(state);
    return [last, current, state => {
        setLast(current);
        setCurrent(state);
    }]
};