import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [timeLeftStr, setTimeLeftStr] = useState([]);

  const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
  };

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft - minutes * 60;
      setTimeLeftStr(`${formatTime(minutes)}:${formatTime(seconds)}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <div className="timer">{timeLeftStr}</div>;
};

export default Timer;
