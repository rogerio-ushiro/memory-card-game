import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./Score.css";

const Timer = forwardRef((props, ref) => {
  const [scoreNumber, setScoreNumber] = useState(0);

  useImperativeHandle(ref, () => ({
    addPoint() {
      console.log("add point: " + scoreNumber);
      setScoreNumber((scoreNumber) => scoreNumber + 10);
    },
    reset() {
      setScoreNumber(0);
    },
  }));

  return <div className="score">{scoreNumber} points</div>;
});

export default Timer;
