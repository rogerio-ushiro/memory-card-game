import { useEffect, useReducer, useRef } from "react";
import Notification from "../components/Notification/Notification";
import Timer from "../components/Timer/Timer";
import Score from "../components/Score/Score";
import Collection from "../components/Collection/Collection";
import { Reducer, initialState } from "../Reducer";
import "./MemoryGame.css";
import { useNavigate } from "react-router-dom";

function MemoryGame() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const refNotification = useRef();
  const refCollection = useRef();

  const navigate = useNavigate();

  // shuffle cards and delay timer for 3.5s
  useEffect(() => {
    dispatch({ type: "shuffle" });
    setTimeout(() => {
      dispatch({ type: "start-game" });
    }, 3500);
  }, []);

  // found all pairs
  useEffect(() => {
    if (state.score === (state.cards.length / 2) * 10) {
      dispatch({ type: "stop-game" });
      refNotification.current.wellDone();
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else if (state.score > 0) {
      refNotification.current.plusPoints();
    }
  }, [state.score]);

  // time's up
  useEffect(() => {
    if (state.time === 0) {
      dispatch({ type: "stop-game" });
      setTimeout(() => {
        navigate("/");
      }, 3000);
      refNotification.current.timesUp();
    }
  }, [state.time]);

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
