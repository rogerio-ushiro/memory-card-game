import { Routes, Route, useNavigate } from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import Home from "./pages/Home";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("/memory-game");
        }}
      >
        About
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}
