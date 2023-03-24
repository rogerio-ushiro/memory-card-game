import { useRef } from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Notification from "./components/Notification/Notification";
import Timer from "./components/Timer/Timer";
import Score from "./components/Score/Score";

var seconds = parseInt(process.env.REACT_APP_TIME_SECONDS);

function App() {
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
          seconds={seconds}
          gameOverTrigger={gameOverTrigger}
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
