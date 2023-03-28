import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button
        className="home-button"
        onClick={() => {
          navigate("/memory-game");
        }}
      >
        Start <br /> Memory Card Game
      </button>
    </div>
  );
}
