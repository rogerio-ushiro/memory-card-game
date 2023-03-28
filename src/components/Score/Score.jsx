import "./Score.css";

const Timer = ({ state }) => {
  return (
    <div className="score">
      {state.score > 0 ? state.score + " points" : ""}{" "}
    </div>
  );
};

export default Timer;
