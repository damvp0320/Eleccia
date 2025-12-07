import "./App.css";
import Carousel from "./components/Carousel";
import CandidatePage from "./pages/CandidatePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Carousel />} />
      <Route path="/candidate/:id" element={<CandidatePage />} />
    </Routes>
  );
}
