import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./Score.css";

const Timer = forwardRef((props, ref) => {
  return <div className="score">{scoreNumber} points</div>;
});

export default Timer;
