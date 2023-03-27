var seconds = parseInt(process.env.REACT_APP_TIME_SECONDS);

// define the initial state
const initialState = {
    time: seconds,
    score: 0,
};

function Reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { time: state.time + 1 };
        case 'decrement':
            return { time: state.time - 1 };
        case 'double':
            return { time: state.time * 2 };
        default:
            throw new Error('Unexpected action');
    }
}

export { Reducer, initialState }