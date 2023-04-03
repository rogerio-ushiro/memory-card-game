import "./Notification.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const Notification = forwardRef((props, ref) => {
  const [showPlusPoints, setShowPlusPoints] = useState(false);
  const [showWellDone, setShowWellDone] = useState(false);
  const [showTimesUp, setShowTimesUp] = useState(false);

  useImperativeHandle(ref, () => ({
    plusPoints() {
      setShowPlusPoints(true);
    },
    wellDone() {
      setShowWellDone(true);
    },
    timesUp() {
      setShowTimesUp(true);
    },
  }));

  // notifies the sum of points
  useEffect(() => {
    setTimeout(() => {
      setShowPlusPoints(false);
    }, 1000);
  }, [showPlusPoints]);

  // notifies end game
  useEffect(() => {
    setTimeout(() => {
      setShowWellDone(false);
      setShowTimesUp(false);
    }, 3000);
  }, [showWellDone, showTimesUp]);

  return (
    <div>
      <div
        className={`notification plusPoints ${showPlusPoints ? "show" : ""}`}
      >
        <h1>+10 points!</h1>
      </div>
      <div className={`notification wellDone ${showWellDone ? "show" : ""}`}>
        <h1>Well Done!</h1>
      </div>
      <div className={`notification timesUp ${showTimesUp ? "show" : ""}`}>
        <h1>Time's up!</h1>
      </div>
    </div>
  );
});

export default Notification;
