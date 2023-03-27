import { useReducer, useRef } from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Notification from "./components/Notification/Notification";
import Timer from "./components/Timer/Timer";
import Score from "./components/Score/Score";
import { Reducer, initialState } from "./Reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const refNotification = useRef();
  const refScore = useRef();
  const refCollection = useRef();

  const notify = () => {
    refNotification.current.showNotification();
    refScore.current.addPoint();
  };

  const gameOverTrigger = () => {
    console.log("game over");
    // scoreRef.current.handleChildMethod();
  };

  return (
    <div className="App center">
      <Notification ref={refNotification} />
      <div className="header">
        <Timer
          className="timer"
          state={state} dispatch={dispatch}
        />
        <Score className="score" ref={refScore} />
      </div>
      <section className="memory-game">
        <Collection ref={refCollection} notificationTrigger={notify} />
      </section>
    </div>
  );
}

export default App;
