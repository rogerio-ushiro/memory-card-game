// Parse the REACT_APP_TIME_SECONDS environment variable as an integer
var seconds = parseInt(process.env.REACT_APP_TIME_SECONDS);
var cards = process.env.REACT_APP_CARDS.split(",");

// Define the initial state for the reducer
const initialState = {
  time: seconds,
  score: 0,
  playing: false,
  cards: cards.concat(cards.map((value) => value.toUpperCase())), // Add uppercase versions of the cards
  // .sort((a, b) => 0.5 - Math.random()), // Randomize the order of the cards
};

// Define a reducer function that will update the state based on dispatched actions
function Reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return Object.assign({}, state, {
        time: state.playing ? state.time - 1 : state.time,
      });
    case "correct":
      return Object.assign({}, state, {
        score: state.score + 10,
      });
    case "start-game":
      return Object.assign({}, state, {
        playing: true,
      });
    case "stop-game":
      return Object.assign({}, state, {
        playing: false,
      });
    default:
      throw new Error("Unexpected action");
  }
}

export { Reducer, initialState };
