import { useRef } from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Notification from "./components/Notification/Notification";
import Timer from "./components/Timer/Timer";
import Score from "./components/Score/Score";

var seconds = parseInt(process.env.REACT_APP_TIME_SECONDS);

function App() {
  const notificationRef = useRef();
  const scoreRef = useRef(null);

  const notify = () => {
    notificationRef.current.showNotification();
    scoreRef.current.addPoint();
  };

  return (
    <div className="App center">
      <Notification ref={notificationRef} />
      <div className="header">
        <Timer className="timer" seconds={seconds} />
        <Score className="score" ref={scoreRef} />
      </div>
      <section className="memory-game">
        <Collection notificationTrigger={notify} />
      </section>
    </div>
  );
}

export default App;
