import { useState } from 'react'

export const useStateWithLast = function (initial) {
    const [state, setState] = useState([initial, initial]);
    return [state[0], state[1], newState => {
        if (newState === state[1]) {
            state[0] = newState;
            setState(state);
        } else {
            setState([state[1], newState]);
        }
    }]
};