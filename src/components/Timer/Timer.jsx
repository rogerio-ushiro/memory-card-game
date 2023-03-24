import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({ seconds, gameOverTrigger }) => {
  const [timeLeft, setTimeLeft] = useState(3);
  const [timeLeftStr, setTimeLeftStr] = useState([]);

  const addZero = (time) => (time < 10 ? "0" + time : time);

  const formatTime = (time) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    return (minutes > 0 ? addZero(minutes) + ":" : "") + addZero(seconds);
  };

  useEffect(() => {
    if (timeLeft === -1) {
      gameOverTrigger();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);

      setTimeLeftStr(`${formatTime(timeLeft)}}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <div className="timer">{timeLeftStr}</div>;
};

export default Timer;
