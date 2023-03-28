import { useEffect, useReducer, useRef } from "react";
import Notification from "../components/Notification/Notification";
import Timer from "../components/Timer/Timer";
import Score from "../components/Score/Score";
import Collection from "../components/Collection/Collection";
import { Reducer, initialState } from "../Reducer";
import "./MemoryGame.css";

function MemoryGame() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const refNotification = useRef();
  const refCollection = useRef();

  useEffect(() => {
    if (state.time === 0) gameOverTrigger();
  }, [state.time]);
  useEffect(() => {
    if (state.score > 0) refNotification.current.showNotification();
  }, [state.score]);

  const gameOverTrigger = () => {
    console.log("game over");
  };

  return (
    <div className="App center">
      <Notification ref={refNotification} />
      <div className="header">
        <Timer className="timer" state={state} dispatch={dispatch} />
      </div>
      <section className={`memory-game ${"opening"}`}>
        <Collection ref={refCollection} state={state} dispatch={dispatch} />
      </section>
      <div className="bottom">
        <div className="circle">
          <Score className="score" state={state} />
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
