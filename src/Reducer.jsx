var seconds = parseInt(process.env.REACT_APP_TIME_SECONDS);

// define the initial state
const initialState = {
  time: seconds,
  score: 0,
};

function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { time: state.time + 1 };
    case "decrement":
      return Object.assign({}, state, {
        time: state.time--,
      });
    case "double":
      return { time: state.time * 2 };
    case "correct":
      return Object.assign({}, state, {
        score: state.score + 10,
      });
    default:
      throw new Error("Unexpected action");
  }
}

export { Reducer, initialState };
