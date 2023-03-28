import { useEffect } from "react";
import "./Timer.css";

const Timer = ({ state, dispatch }) => {
  const addZero = (time) => (time < 10 ? "0" + time : time);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return (minutes > 0 ? addZero(minutes) + ":" : "") + addZero(seconds);
  };

  useEffect(() => {
    if (!state.time) return;

    const intervalId = setInterval(() => {
      if (state.time > 0) dispatch({ type: "decrement" });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [state.time]);

  return <div className="timer">{formatTime(state.time)}</div>;
};

export default Timer;
