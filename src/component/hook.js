import { useState, useMemo } from 'react'

export const useStateWithLast = function (initialCurrent, initialLast) {
    const [state, setState] = useState([initialCurrent, initialLast]);
    return [state[0], state[1], newState => {
        if (newState === state[1]) {
            state[0] = newState;
            setState(state);
        } else {
            setState([state[1], newState]);
        }
    }];
};

export const useSwitch = function (arrFn, lastFn, currentFn, initialCurrent, initialLast = -1) {
    const [lastIndex, currentIndex, setIndex] = useStateWithLast(initialCurrent, initialLast);
    const arr = useMemo(arrFn, []);
    useMemo(() => {
        if (currentIndex > -1 && currentIndex < arr.length) {
            if (lastIndex > -1 && lastIndex < arr.length) {
                arr[lastIndex] = lastFn(lastIndex);
            }
            arr[currentIndex] = currentFn(currentIndex);
        }
    }, [currentIndex]);
    return [arr, setIndex, currentIndex, lastIndex];
};