import "./Notification.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const Notification = forwardRef((props, ref) => {
  const [showPlusPoints, setShowPlusPoints] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

  useImperativeHandle(ref, () => ({
    plusPoints() {
      setShowPlusPoints(true);
    },
    wellDone() {
      setShowWellDone(true);
    },
    gameOver() {
      setShowGameOver(true);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setShowPlusPoints(false);
    }, 1000);
  }, [showPlusPoints]);

  useEffect(() => {
    setTimeout(() => {
      setShowWellDone(false);
      setShowGameOver(false);
    }, 3000);
  }, [showWellDone, showGameOver]);

  return (
    <div>
      <div className={`notification plusPoints ${showPlusPoints ? "show" : ""}`}>
        <h1>+10 points!</h1>
      </div>
      <div className={`notification wellDone ${showWellDone ? "show" : ""}`}>
        <h1>Well Done!</h1>
      </div>
      <div className={`notification gameOver ${showGameOver ? "show" : ""}`}>
        <h1>Time's up!</h1>
      </div>
    </div>
  );
});

export default Notification;
