import { Routes, Route } from "react-router-dom";
import "./App.css";

import { EleccionProvider } from "./context/EleccionContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CandidatosPage from "./pages/CandidatosPage";
import CompararPage from "./pages/CompararPage";
import PropuestasPage from "./pages/PropuestasPage";
import AcercaDePage from "./pages/AcercaDePage";

function App() {
  return (
    <ThemeProvider>
      <EleccionProvider>
        <Navbar />
        <main style={{ paddingTop: "72px" }}>
          <Routes>
            <Route path="/" element={<CandidatosPage />} />
            <Route path="/comparar" element={<CompararPage />} />
            <Route path="/propuestas" element={<PropuestasPage />} />
            <Route path="/acerca" element={<AcercaDePage />} />
          </Routes>
        </main>
        <Footer />
      </EleccionProvider>
    </ThemeProvider>
  );
}

export default App;
