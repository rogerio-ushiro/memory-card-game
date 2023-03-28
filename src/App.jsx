import { Routes, Route } from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}
