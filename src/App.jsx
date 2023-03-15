import { useRef } from "react";
import "./App.css";
import Collection from "./components/Collection";
import Notification from "./components/Notification";

function App() {

  const notify = () => {
    console.log("points");
  };

  return (
    <div className="App center">
      <Notification  />
      <section className="memory-game">
        <Collection notificationTrigger={notify} />
      </section>
    </div>
  );
}

export default App;
