import "./Score.css";

const Timer = ({ state }) => {
  return <div className="score">{state.score + " points"}</div>;
};

export default Timer;
