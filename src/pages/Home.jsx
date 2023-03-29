import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        src="img/play.svg"
        className="playBtn"
        onClick={() => {
          navigate("/memory-game");
        }}
      />
    </div>
  );
}